const db = require('../database/models');
const producto = db.Producto;
//const db = require('../db/usuarios.js')


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
        busqueda = req.query.search;
        let filtrado = {
            where: {
                nombre: {[db.Sequelize.op.like]: "%" + busqueda + "%"}
            },
            include: [
                {association: 'comentarios'}
            ]
        }
        db.Producto.findAll(filtrado)
        .then(function(resultados){
            return res-render('search-results', {title: `Resultados de la búsqueda: ${busqueda}`, products: resultados})
        })
        .catch(function(error){
            console.log(error);
        });   
    },
}

module.exports = productController;