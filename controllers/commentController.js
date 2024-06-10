const db = require('../database/models');
const producto = db.Comentario;

const productController = {
    comments: function(req,res){
        //res.render('product', {product: db.productos})
    },
    addComment:function(req,res){
        //res.render('product', {product: db.productos})
    }
}

module.exports = commentController;