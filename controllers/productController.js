const db = require('../database/models');
const producto = db.Product;
//const db = require('../db/usuarios.js')
let {validationResult} = require('express-validator');


const productController = {
    index: function(req, res) {
        let filtrado = {
            include: [
                {association: "comentarios"},
                {association: "usuario"}
              ]
        }
        producto.findAll(filtrado)
        .then(function(results){
            let orden= results.reverse(); //con order no se ordenaba DESC, solo salía lo más reciente cuando agrego producto, por eso puse .reverse()
            return res.render('index', {title: "Home", productos: orden});
        })
        .catch(function(error){
            console.log(error);
        });
    },
    products: function(req,res){
        producto.findOne({
            where:{id:req.params.id},
            include: [
                {association:'usuario'},
                {association:'comentarios',
                include:[{association:'usuario'}]}
            ]
        })
        .then(function(data){
            let comments= data.comentarios;
            let orden=comments.reverse(); //lo puse así porque agregando order: [["created_at", "DESC"]] no hace nada
            return res.render('product', {product: data, comments:orden})
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
            .then(function(data){
                res.redirect('/')
            })
            .catch(function(error){
                console.log(error);
            });
             //hacia index porque tenes que poder ver los productos en el orden de más reciente a más viejo 
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
                return res.render('search-results', {title: `Resultados de la búsqueda: ${busqueda}`, productos: resultados.reverse()})
            })
            .catch(function(error){
                console.log(error);
            });   
    },
    //editProduct:function(req,res){
    //    let id = req.params.id
    //    producto.findByPk(id)
    //    .then(function(result){
    //       return res.render('editProduct', {product: result});
    //    })
    //    .catch(function(error){
    //       console.log(error);
    //   }) 
    //},
    editProduct: function(req, res, next) {
        let idProduct = req.params.id // me trae el id del producto
        let filtrado = {
            include : [
                {association : "usuario"},
            ],
        }
        producto.findByPk(idProduct, filtrado) //me trae el usuario que cargo el producto
        .then(function(result){
            if(!result){ // esto ya se verifica en la vista
                res.send('No puede editar este producto')
            } else{
                return res.render('editProduct', {product: result}); // me redirige a la vista para que pueda editar el producto
            }
        })
        .catch(function(error){
            console.log(error);
        }) 
    },
   //editProcess: function(req,res){
    //    if (req.body.editar){
    //        let errors= validationResult(req);
    //           if(errors.isEmpty()){
    //                let productoEdiatdo= {
    //                    imagen: req.body.imagen,
    //                    nombre:req.body.product,
    //                    descripcion:req.body.descripcion}
    //                producto.update(productoEditado,{where:[{id:req.body.id}]}) 
    //                .then(function(resultados){
    //                    res.redirect('/product') 
    //                })
    //                .catch(function(error){
    //                    console.log(error);
    //                }); 
    //            } else{
    //                return res.render('editProduct', { product: result, errors:errors.mapped() }); 
    //            } 
    //    }
    //},
    del:function(req,res){
        if (req.body.id){
            let idProducto = req.body.id;
            let filtro = {
                where: {id: idProducto}
            }
            producto.findByPk(idProducto, {
                include:[{association: 'comentarios'}]
            })
            .then(function(resultados){
                if(resultados.comentarios!== undefined){
                    db.Comentario.destroy({
                        where: { id_productos: idProducto }})
                    .then(function(result){
                        producto.destroy(filtro)
                        .then(function(result){
                            return res.redirect('/')
                        })
                        .catch(function(error){
                            console.log(error);
                        })
                    })
                    .catch(function(error){
                        console.log(error);
                    })

                } else{
                    producto.destroy(filtro)
                    .then(function(result){
                        return res.redirect('/')
                    })
                    .catch(function(error){
                        console.log(error);
                    })

                }
            })
        }
    }
}
module.exports = productController;