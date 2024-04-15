const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get('/', productController.index);
//router.get('/login', productController.login);
//router.get('/product', productController.productos);
//router.get('/resultadosDeBusqueda', productController.resultadosDeBusqueda);
//router.get('/register', productController.register);
//router.get('/profile', productController.profile);
//router.get('/profileEdit', productController.editar);
//router.get('/addProduct', productController.producto);


module.exports = router;
