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

router.get('/product/:id', productController.products);

router.get('/product/editProduct/:id', productController.editProduct);
//router.post('product/editProduct/:id', productAddValidations, productController.editProcess) 


router.post('/product/delete', productController.del)


router.get('/add', productController.productAdd);
router.post('/add', productAddValidations, productController.agregarProducto);

router.get('/search-results', productController.searchResults);



module.exports=router;