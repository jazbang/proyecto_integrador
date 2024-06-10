const express = require('express');
const router = express.Router();
let {body}= require('express-validator');
const usersController = require('../controllers/usersController');
let db=require('../database/models');

let registerValidations=[
    body('email')
        .notEmpty().withMessage('Por favor complete el campo email')
        .isEmail().withMessage('Por favor ingrese un email válido')
        .custom(function(value){
            return db.Usuario.findOne({
                where:{email: value},
            })
            .then(function(user){
                if(user){
                    throw new Error ('El mail ingresado ya está registrado, por favor inicie sesion ');

                }
            })
        }),
    body('user')
        .notEmpty().withMessage('Por favor complete el campo con su nombre de usuario')
        .isString().withMessage('El campo debe ser de tipo texto'),
        //agregar de tipo texto y el custom para que no se repitan los nombres de usuarios
    body('password')
        .notEmpty().withMessage('Por favor complete el campo con su contraseña')
        .isLength({ min: 4 }).withMessage('Su contraseña debe tener al menos 4 caracteres'),
    body('dni')
        .isInt().withMessage('Por favor complete el campo con numeros enteros'),
    body('fotoPerfil')
        .isString().withMessage('El campo debe ser de tipo texto'),
];

let loginValidations= [
    body("email") 
        .notEmpty().withMessage("Porfavor complete el campo email.")
        .isEmail().withMessage("Porfavor ingrese un email válido.")
        .custom(function(value){ 
            return db.Usuario.findOne({
                where: {email: value},
            })
            .then(function(user){
                if(!user){ 
                    throw new Error("El email no se encuentra registrado.")
                }
            }) 
        }),
    
    body("password")
        .notEmpty().withMessage("Porfavor complete la contraseña.")
        .custom(function(value, { req }){ 
            return db.Usuario.findOne({
                where: {email: req.body.email},
            })
            .then(function(user){
                if(user && !bcrypt.compareSync(value, user.contrasenia) ){ 
                    throw new Error("La contraseña es incorrecta.")
                }
            }) 
        })
]; 


/* GET users listing. */
router.get('/profile', usersController.profile);

router.get('/register', usersController.register);
router.post('/register',registerValidations, usersController.register);

router.get('/edit', usersController.edit);

router.get('/login', usersController.login);
router.post('/login', loginValidations, usersController.store);


module.exports = router;
