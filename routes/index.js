const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const productController = require('../controllers/productController');

let productAddValidations=[
    body('imagen')
        .notEmpty().withMessage('Por favor agregar una imagen')
        .isString().withMessage('Por favor complete con el campo con el nombre del archivo'),
        
    body('product')
        .notEmpty().withMessage('Por favor agregar el nombre del producto')
        .isString().withMessage('Por favor complete el campo del nombre del producto'),
        //agregar de tipo texto y el custom para que no se repitan los nombres de usuarios
    body('descripcion')
        .notEmpty().withMessage('Por favor agregar una descripción del producto')
        .isString().withMessage('Por favor complete con el campo con el nombre del archivo'),
];

router.get('/', productController.index);

router.get('/product', productController.products);
router.get('/product', productController.encontrarUsuario);

router.get('/editProduct', productController.edit)
router.post('/editProduct', productAddValidations, productController.edit) 

router.get('/product', productController.del)


router.get('/add', productController.agregarProducto);
router.post('/add', productAddValidations, productController.agregarProducto);

router.get('/search-results', productController.searchResults);



module.exports=router;
