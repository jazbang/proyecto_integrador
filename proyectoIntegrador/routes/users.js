var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/profile', usersController.profile);
router.get('/register', usersController.register);
router.get('/edit', usersController.edit)
router.get('/login', usersController.login)

module.exports = router;
