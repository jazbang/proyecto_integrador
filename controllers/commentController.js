const db = require('../database/models');
const comment = db.Comentario;
let {validationResult} = require('express-validator');

const commentController = {
    comments: function(req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let comentario = {
                id_usuarios: req.session.user.id,
                id_productos: req.params.id,
                comentario: req.body.comentario
            }

            comment.create(comentario)
                .then((result) => {
                    return res.redirect("/product/" + req.params.id);
                }).catch((error) => {
                    console.log(error);
                });
        } else {
            let productId = req.params.id;

            let filtrado = {
                where: {
                    id: productId
                },
                include: [
                    { association: 'usuario' },
                    { 
                        association: 'comentarios', 
                        include: [{ association: 'usuario' }],
                        order: [['created_at', 'DESC']]
                    }
                ]
            }

            db.Product.findOne(filtrado)
                .then(function(product) {
                    let condition = false;
                    if (req.session.user != undefined && req.session.user.id == product.usuario.id) {
                        condition = true;
                    }

                    return res.render('product', {
                        product: product,
                        comments: product.comentarios,
                        condition: condition,
                        errors: errors.mapped(),
                        old: req.body
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    },
    addComment:function(req,res){
        let errors= validationResult(req);
        if(errors.isEmpty()){
            comment.create({
                id_productos: req.params.id,
                id_usuarios: req.session.user.id, //no estoy segura si esto está bien, a chequear
                comentario: req.body.comentario
            })
            res.redirect(`/product/${req.params.id}`)
        }else{
            return res.render('login', {errors:errors.mapped()})
        }
    }
}

module.exports = commentController;