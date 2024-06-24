const db = require('../database/models');
const comment = db.Comentario;
let {validationResult} = require('express-validator');

const commentController = {
    addComment:function(req,res){
        let errors= validationResult(req);
        if(errors.isEmpty()){
            comment.create({
                id_productos: req.params.id,
                id_usuarios: req.session.user.id, 
                comentario: req.body.comentario
            })
                .then(function(results){
                    res.redirect(`/product/${req.params.id}`);
                })
                .catch(function(error){
                    console.log(error);
                });
        }else{
            db.Product.findOne({
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
                    let orden=comments.reverse(); //lo puse así porque agregando order: [["created_at", "DESC"]] no hace nada
                    return res.render('product', {product: data, comments:orden,errors:errors.mapped()})
                })
                .catch(function(error){
                    console.log(error);
                });
      
        }
    }
}

module.exports = commentController;