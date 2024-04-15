const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/', productController.index);
router.get('/product', productController.products);
router.get('/add', productController.agregarProducto);
//router.get('/resultadosDeBusqueda', productController.resultadosDeBusqueda);

module.exports=router;