const express = require('express');
const controllerMensalidade = require('../Controllers/controllerMensalidade');
const router = express.Router();
const controller = require('../Controllers/controllerMensalidade')

router.get('/mensalidade', controller.get);
router.get('/modalMensalidade/:id', controller.getModal)
router.post('/modalMensalidade/:id', controller.postModal)

module.exports = router;