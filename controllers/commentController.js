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
            res.redirect(`/product/${req.params.id}`)
        }
    }
}

module.exports = commentController;