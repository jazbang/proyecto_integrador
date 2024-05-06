// const db = require('../database/models')
// const producto = db.Producto
const db = require('../db/usuarios.js')


const productController = {
    index: function(req, res, next) {
        res.render('index', {product: db.productos})
    },
    products: function(req,res){
        res.render('product', {product: db.productos})
    },
    agregarProducto:function(req,res){
        res.render('product-add', {product: db.productos, user: db.usuario})
    },
    searchResults: function(req,res){
        res.render('search-results', {product: db.productos})
    }
}

module.exports = productController;