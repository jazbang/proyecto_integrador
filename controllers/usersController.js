const db = require('../database/models');
const user = db.User;
//const db = require('../db/usuarios.js');
const bcrypt= require('bcryptjs');
let {validationResult} = require('express-validator');


const usersController = {
    profile: function(req,res){
        let userId= req.session.id
        user.findByPk(userId,{
            order:[['created_at', 'DESC']],
            include:[{association: 'productos'}]
        })
        .then(function(user){
            if(user){
                return res.render('profile',{productos:user.Products});
            } else{
                let mensaje= 'Usted no ha cargado ningún producto'
                return res.render('profile', {mensaje:mensaje})
            }
        })
        .catch(function(error){
            return console.log(error)

        })
       // res.render('profile', {product: db.productos, user: db.usuario})
    },
    register: function(req,res){
        let errors= validationResult(req);
        //return res.send(errors.mapped());
        if(errors.isEmpty()){
            let passEncriptada = bcrypt.hashSync(req.body.password, 10);
            user.create({
                username:req.body.user,
                password:passEncriptada,
                dni:req.body.dni,
                foto:req.body.foto,
                nacimiento:req.body.nacimiento
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
                where: [{email:req.body.email}]
            })
            .then(function(usuarioEncontrado){
                req.session.user = {
                    email: usuarioEncontrado.email,
                    username: usuarioEncontrado.username,
                }
                if(req.body.recordarme != undefined){
                    res.cookie('recordarme', req.session.user, {maxAge:24*60*60*1000})
                }

                return res.redirect('/');
            })
              .catch(function(e){
                console.log(e);
            })
        }else{
            return res.render('login', {errors:errors.mapped()})
        }
        
     },
    logout: function(req,res){
        req.session.destroy()
        res.clearCookie("userId")
        return res.redirect("/")
    },
    edit: function(req,res){
        res.render('profile-edit', {product: db.productos, user: db.usuario})
    }
}

module.exports = usersController;