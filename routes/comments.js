const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//para obtener comentarios de un producto, y envía formulario de creación
router.get('/products/:id/comments', commentController.comments);
//para agregar comentario a un producto
router.post('/products/:productId/comments', commentController.addComment);

module.exports=router;