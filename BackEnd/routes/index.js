var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main')

/* GET home page. */
router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/services', mainController.services);
router.get('/contact', mainController.contact);
router.get('/login', mainController.login);
router.get('/register', mainController.register);


module.exports = router;
