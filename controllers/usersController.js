const db = require('../database/models');
const user = db.User;
//const db = require('../db/usuarios.js');
const bcrypt= require('bcryptjs');
//let passEncriptada = bcrypt.hashSync(req.body.password, 10);
//let check = bcrypt.compareSync(req.body.password,passEncriptada);
let {validationResult} = require('express-validator');


const usersController = {
    profile: function(req,res){
        res.render('profile', {product: db.productos, user: db.usuario})
    },
    register: function(req,res){
        let errors= validationResult(req);
        //return res.send(errors.mapped());
        if(errors.isEmpty()){
            user.Usuario.create({
                username: 'req.body.user',
                password:'req.params.password',
                dni:'req.body.dni',
                fotoPerfil:'req.body.fotoPerfil',
                nacimiento:'req.body.nacimiento',
            })
            res.redirect('/')
        }else{
            return res.render('login', {errors:errors.mapped()})
        }
        
    },
    login: function(req,res){
        let errors= validationResult(req);
        if(errors.isEmpty()){
            res.redirect('/')
        }else{
            return res.render('login', {errors:errors.mapped()})
        }
    },
    edit: function(req,res){
        res.render('profile-edit', {product: db.productos, user: db.usuario})
    },
    store: function(req, res){
        let usuarioLogueado=req.body.usuarioLogueado.username;
        req.session.username=usuarioLogueado;
        
        //crear cookie
        res.cookie('recordarme', usuarioLogueado, {maxAge:1000*60*0.5}) //cómo hago para que me recuerde siempre
        // return res.redirect('/') //redirigir a la pagina principal, o sea index
        //creo que falta hacer lo de la vista
        return res.redirect('/')
     }
}

module.exports = usersController;