const db = require('../database/models');
const comment = db.Comentario;
let {validationResult} = require('express-validator');

const commentController = {
    comments: function(req,res){
        let productId = req.params.id; 
        let filtrado = {
            where: {
                id_productos: productId
            },
            include: [
                {association: 'producto'},
                {association:'usuario'}
            ]
        }
        
        comment.findAll(filtrado)
            .then(function(data){
                return res.render('product', {comments: data})
            })
            .catch(function(error){
                console.log(error);
            });   
    },
    addComment:function(req,res){
        //res.render('product', {product: db.productos})
    }
}

module.exports = commentController;