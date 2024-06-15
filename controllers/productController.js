const db = require('../database/models');
const producto = db.Producto;
//const db = require('../db/usuarios.js')
let {validationResult} = require('express-validator');


const productController = {
    index: function(req, res, next) {
        res.render('index', {product: db.productos})
    },
    products: function(req,res){
        res.render('product', {product: db.productos})
    },
    agregarProducto:function(req,res){
        let errors= validationResult(req);
        //return res.send(errors.mapped());
        if(errors.isEmpty()){
            producto.create({
                imagen: 'req.body.imagen',
                nombre:'req.body.product',
                descripcion:'req.body.descripcion',
            })
            res.redirect('/') //hacia index porque tenes que poder ver los productos en el orden de más reciente a más viejo 
        }else{
            return res.render('product-add', {errors:errors.mapped()})
        }
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
                return res.render('search-results', {title: `Resultados de la búsqueda: ${busqueda}`, products: resultados})
            })
            .catch(function(error){
                console.log(error);
            });   
    },
    edit: function(req,res){
        let id= req.params.id
        producto.findByPk(id,{
            include: [{association: 'usuario'}]
        })
        .then(function(result){
            res.render('/product', {product: result}) // ver bien que mandar asi despues accedo con product.username
        })
        .catch(function(error){
            console.log(error);
        })
    }
}

module.exports = productController;