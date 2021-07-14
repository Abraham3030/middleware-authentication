const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');
const verificarUsuario = require('../middlewares/verificarUsuario');



router.get('/', controller.index );

router.get('/admin', verificarUsuario, controller.privateRoute);

module.exports = router;