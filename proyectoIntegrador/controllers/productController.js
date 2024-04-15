const db = require('../db/usuarios.js')

const productController = {
    products: function(req,res){
        res.render('product', {user: db.productos})
    },
    agregarProducto:function(req,res){
        res.render('product-add', {user: db.productos})
    },
}

module.exports = productController;