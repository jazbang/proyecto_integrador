const db = require('../database/models');
const producto = db.Product;
//const db = require('../db/usuarios.js')
let {validationResult} = require('express-validator');


const productController = {
    index: function(req, res) {
        let filtrado = {
            order: [["created_at", "DESC"]],
            include: [
                {association: "comentarios"},
                {association: "usuario"}
              ]
        }
        producto.findAll(filtrado)
        .then(function(results){
            return res.render('index', {title: "Home", productos: results});
        })
        .catch(function(error){
            console.log(error);
        });
    },
    products: function(req,res){
        let errors= validationResult(req);

        producto.findOne({
            where:{id:req.params.id},
            include: [
                {association:'usuario'},
                {association:'comentarios',
                include:[{association:'usuario'}],
                order:[['created_at', 'DESC']]}
            ]
        })
        .then(function(data){
            let comments= data.comentarios;
            return res.render('product', {product: data, comments:comments})
        })
        .catch(function(error){
            console.log(error);
        });

    },
    productAdd:function(req,res){
        return res.render('product-add');
    },
    agregarProducto:function(req,res){
        let errors= validationResult(req);
        //return res.send(errors.mapped());
        if(errors.isEmpty()){
            producto.create({
                imagen: req.body.imagen,
                nombre:req.body.product,
                descripcion:req.body.descripcion,
                id_usuarios: req.session.user.id
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
                nombre: {[db.Sequelize.Op.like]: "%" + busqueda + "%"}
            },
            include: [
                {association: 'comentarios'}
            ]
        }
        producto.findAll(filtrado)
            .then(function(resultados){
                return res.render('search-results', {title: `Resultados de la búsqueda: ${busqueda}`, productos: resultados})
            })
            .catch(function(error){
                console.log(error);
            });   
    },
    edit: function(req,res){
        let id= req.params.id //id del producto
        producto.findByPk(id,{
            include: [{association: 'usuario'}]
        })
        .then(function(result){
            if(!result){ //verifica si el producto existe en la base de datos
                return res.send('Este producto no existe');
            }
            let userId = req.session.id; // id del usuario ya logueado
            if(result.usuario.id !==userId){
                return res.send('Usted no puede editar este producto')
            }
            let errors= validationResult(req);
            if(errors.isEmpty()){
                producto.update({
                    imagen: req.body.imagen,
                    nombre:req.body.product,
                    descripcion:req.body.descripcion
                },
                {where:{id:id}})
                .then(function(resultados){
                    res.redirect('/product') 
                })
                .catch(function(error){
                    console.log(error);
                }); 
            }else{
                return res.render('editProduct', { product: result, errors:errors.mapped() }); 
            }    
        }) 
        .catch(function(error){
            console.log(error);
        });
    },
    del:function(req,res){
        let id= req.params.id
        let userId = req.user.id; //chequear si aca trae el id del usuario ya logueado
        producto.findOne(
            {where: { id:id }}
        )
        .then(function(user){
            if (!user){
                return res.send('No se encuentra el producto')
            }
            if(id!==userId){
                return res.send('Usted no puede borar este producto')
            }
            producto.destroy(
                {where:[{id:id}]}
            )
            .then(function(result){
                return res.redirect('/products')
            })
            .catch(function(error){
                console.log(error);
            })
        })
    }
}

module.exports = productController;