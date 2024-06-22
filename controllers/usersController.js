const db = require('../database/models');
const user = db.Usuario;
//const db = require('../db/usuarios.js');
const bcrypt= require('bcryptjs');
let {validationResult} = require('express-validator');


const usersController = {
    profileProcess: function(req,res){
        let userId= req.session.id
        let filtrado = {
            include:[
                {association:'productos'}
            ],
            where: {id: userId},
            order:[['created_at', 'DESC']]
        }
        user.findAll(filtrado)
        .then(function(results){
            if (results){
                return res.render('profile', {productos: results})
            } else{
                return res.render('profile')
            }
        })
        .catch(function(error){
            return console.log(error)
        })
    },
    register: function(req,res){
        return res.render('register');
    },
    registerProcess: function(req,res){
        let errors= validationResult(req);
        //return res.send(errors.mapped());
        if(errors.isEmpty()){
            let passEncriptada = bcrypt.hashSync(req.body.contrasenia, 10);
            user.create({
                email: req.body.email,
                username:req.body.username,
                contrasenia:passEncriptada,
                dni:req.body.dni,
                foto:req.body.foto,
                fecha:req.body.fecha
            })
            return res.redirect('/')
        }else{
            return res.render('register', {errors:errors.mapped()})
        }
         
    },
    login: function(req,res){
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login');
        }
    },
    loginProcess: function(req, res){
        let errors= validationResult(req);

        if(errors.isEmpty()){
            user.findOne({
                where: {email:req.body.email}
            })
            .then(function(usuarioEncontrado){
                req.session.user = usuarioEncontrado

                if(req.body.recordarme != undefined){
                    res.cookie('recordarme',usuarioEncontrado.email, {maxAge:24*60*60*1000})
                }
                
                return res.redirect('/');
            })
            .catch(function(erorrs){
                console.log(erorrs);
            })
        }else{
            return res.render('login', {errors:errors.mapped()})
        }
        
     },
    logout: function(req,res){
        req.session.destroy()
        res.clearCookie("recordarme")
        return res.redirect("/")
    },
    edit: function(req, res, next) {
        let id = req.session.user.id
        let filtrado = {
            include : [
                {association : "productos"},
                {association: "comentarios"}
            ],
        }
        db.Usuario.findByPk(id, filtrado).then((result) => {
            return res.render("profile-edit", {user: result});
        })
    },
    editStore: function(req,res){
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let filtrado = {
                where: {
                    id: req.session.user.id
                }
            } 
            let usuario = {
                email: req.body.email,
                username: req.body.user,
                contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                nacimiento: req.body.nacimiento,
                dni: req.body.dni,
                foto: req.body.profile 
            }
            user.update(usuario, filtrado)
            .then((result) => {
                return res.redirect('/')
            })
            .catch((err) => {
                return console.log(err);
            });       
        } 
        else {
            let id = req.session.user.id;
            let filtrado = {
                include : [
                    {association : "productos", },
                    {association: "comentarios", }
                ],
            }
            db.Usuario.findByPk(id, filtrado).then((result) => {
                return res.render('profile-edit', {title: "Profile Edit", errors: errors.mapped(), old: req.body, user: result
                }); 
            });
        }
    }
}

module.exports = usersController;