const express = require('express');
const router = express.Router();
let {body}= require('express-validator');
const usersController = require('../controllers/usersController');
let db=require('../database/models');
const bcrypt = require("bcryptjs")

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
                    throw new Error ('El mail ingresado ya está registrado, por favor inicie sesión ');

                }
            })
        }),
    body('username')
        .notEmpty().withMessage('Por favor complete el campo con su nombre de usuario')
        .isString().withMessage('El campo debe ser de tipo texto')
        .custom(function(value){ 
            return db.Usuario.findOne({
                where: {username: value},
            })
            .then(function(user){
                if(user){ 
                    throw new Error("El usuario ingresado ya está registrado.")
                }
            }) 
        }),
    body('contrasenia')
        .notEmpty().withMessage('Por favor complete el campo con su contraseña')
        .isLength({ min: 4 }).withMessage('Su contraseña debe tener al menos 4 caracteres'),
    body('dni')
        .isInt().withMessage('Por favor complete el campo con numeros enteros'),
    body('foto')
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
    
    body("contrasenia")
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

let editValidations = [
    body("email")
        .notEmpty().withMessage("Por favor, complete el campo email.").bail()
        .isEmail().withMessage("Por favor, ingrese un email válido."),

    body("password")
        .notEmpty().withMessage("Por favor, complete con su contraseña")
        .isLength({ min: 4 }).withMessage("Su contraseña debe tener un mínimo de 4 caracteres"),

    body("user")
        .notEmpty().withMessage("Por favor, complete el campo usuario."),

    body("fecha")
        .notEmpty().withMessage("Por favor, seleccione su fecha de nacimiento.")
        .isDate().withMessage("Por favor, ingrese una fecha válida."),

    body("dni")
        .notEmpty().withMessage("Por favor, complete el campo DNI.")
        .isNumeric().withMessage("Por favor, ingrese un DNI válido."),

    body("profile")
        .notEmpty().withMessage("Por favor, complete el campo de foto de perfil.")
        .isURL().withMessage("Por favor, ingrese una URL válida para la foto de perfil.")
];


/* GET users listing. */
router.get('/profile', usersController.profile);
router.post('/profile', usersController.profileProcess);

router.get('/register', usersController.register);
router.post('/register',registerValidations, usersController.registerProcess);

router.get('/edit', usersController.edit);
router.post('/edit', editValidations, usersController.editStore)

router.get('/login', usersController.login);
router.post('/login', loginValidations, usersController.loginProcess);

router.post('/logout', usersController.logout);


module.exports = router;
