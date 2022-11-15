const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controllerResponsaveis')

router.get('/', (req,res)=>{ res.render('../Views/index.ejs')})
router.get('/responsavel', controller.get);

router.get('/addresponsavel', controller.addResponsavel);
router.post('/addresponsavel', controller.addResponsavelpost);

router.get('/deletarresponsavel/:id', controller.deletar);

router.get('/alterarresponsavel/:id', controller.alterar);
router.post('/alterarresponsavel/:id', controller.alterarpost);

module.exports = router;