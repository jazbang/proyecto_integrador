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
                    id_productos: productId
                },
                include: [
                    {association: 'producto'},
                    {association:'usuario'}
                ]
            }
    
            comment.findAll(filtrado)
                .then(function(data){
                    return res.render('product', {comments: data})
                })
                .catch(function(error){
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