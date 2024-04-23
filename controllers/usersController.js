const db = require('../db/usuarios.js')

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
    }
}

module.exports = usersController;