const db = require('../db/usuarios.js')


const productController = {
    index: function(req, res, next) {
        res.render('index', {product: db.productos})
    },
    products: function(req,res){
        res.render('product', {product: db.productos})
    },
    agregarProducto:function(req,res){
        res.render('product-add', {product: db.productos})
    },
}

module.exports = productController;