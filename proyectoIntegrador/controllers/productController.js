const db = require('../db/usuarios.js')

const productController = {
    products: function(req,res){
        res.render('product', {product: db.productos})
    },
    agregarProducto:function(req,res){
        res.render('product-add', {product: db.productos})
    },
}

module.exports = productController;