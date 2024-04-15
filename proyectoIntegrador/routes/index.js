const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get('/', productController.index);
router.get('/product', productController.products);
//router.get('/resultadosDeBusqueda', productController.resultadosDeBusqueda);
router.get('/add', productController.agregarProducto);


module.exports = router;
