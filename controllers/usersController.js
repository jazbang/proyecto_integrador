const db = require('../database/models');
const user = db.User;
//const db = require('../db/usuarios.js');
const bcrypt= require('bcryptjs');
let {validationResult} = require('express-validator');


const usersController = {
    profile: function(req,res){
        let userId= req.session.id
        user.findByPk(userId,{
            order:['createdAt', 'DESC'],
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
                fotoPerfil:req.body.fotoPerfil,
                nacimiento:req.body.nacimiento
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
    logout: function(req,res){
        req.session.destroy()
        res.clearCookie("userId")
        return res.redirect("/")
    },
    edit: function(req,res){
        res.render('profile-edit', {product: db.productos, user: db.usuario})
    },
    store: function(req, res){
        
        let recordar= req.body.usuarioLogueado.recordarme;
        req.session.recordarme=recordar;

        if(recordar){
            let usuarioLogueado=req.body.usuarioLogueado.username;
            req.session.username=usuarioLogueado;
            res.cookie('recordarme', usuarioLogueado, {maxAge:24*60*60*1000});
            res.locals.recordarme = recordarme
            return res.redirect('/');
    
        }
        
     }
}

module.exports = usersController;