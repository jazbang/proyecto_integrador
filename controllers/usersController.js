const db = require('../database/models');
const user = db.User;
//const db = require('../db/usuarios.js');
const bcrypt= require('bcryptjs');
let passEncriptada = bcrypt.hashSync(req.body.password, 10);
let check = bcrypt.compareSync(req.body.password,passEncriptada);


const usersController = {
    profile: function(req,res){
        res.render('profile', {product: db.productos, user: db.usuario})
    },
    register: function(req,res){
        res.render('register')
    },
    login: function(req,res){
        res.render('login')
    },
    edit: function(req,res){
        res.render('profile-edit', {product: db.productos, user: db.usuario})
    },
    store: function(req, res){
        let emailForm=req.body.email;
        req.session.email=emailForm;
        
        //crear cookie
        // res.cookie('lastTitle', ultimaPelicula, {maxAge:1000*60*0.5})
        // return res.redirect('/') //redirigir a la pagina principal, o sea index
     }
}

module.exports = usersController;