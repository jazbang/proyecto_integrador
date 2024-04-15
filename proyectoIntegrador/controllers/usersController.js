const db = require('../db/usuarios.js')

const usersController = {
    profile: function(req,res){
        res.render('profile', {user: usuarios.usuario})
    },
    register: function(req,res){
        res.render('register')
    },
    login: function(req,res){
        res.render('login')
    },
    edit: function(req,res){
        res.render('profile-edit')
    }
}

module.exports = usersController;