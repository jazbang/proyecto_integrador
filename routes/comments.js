const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const commentController = require('../controllers/commentController');

let commentValidations= [
    body("agregarComment") 
        .notEmpty().withMessage("No puede enviar un comentario vacío.")
        .isLength({min:3}).withMessage("El comentario debe tener al menos 3 caracteres.")
];

//para obtener comentarios de un producto, y envía formulario de creación
router.get('/products/:id/comments', commentController.comments);
//para agregar comentario a un producto
router.post('/products/:productId/comments', commentValidations, commentController.addComment);

module.exports=router;