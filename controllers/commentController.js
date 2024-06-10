const db = require('../database/models');
const comment = db.Comentario;

const commentController = {
    comments: function(req,res){
        //res.render('product', {product: db.productos})
    },
    addComment:function(req,res){
        //res.render('product', {product: db.productos})
    }
}

module.exports = commentController;