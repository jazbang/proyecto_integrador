const db = require('../database/models');
const comment = db.Comentario;
let {validationResult} = require('express-validator');

const commentController = {
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
            return res.render('product', {errors:errors.mapped()})
        }
    }
}

module.exports = commentController;