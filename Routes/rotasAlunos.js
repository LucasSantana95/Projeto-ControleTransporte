const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controllerAlunos')

router.get('/', (req,res)=>{ res.render('../Views/index.ejs')})
router.get('/aluno', controller.get);
router.get('/addaluno', controller.addAluno);
router.post('/addaluno', controller.addAlunopost);

router.get('/alteraraluno/:id', controller.alterar);
router.post('/alteraraluno/:id', controller.alterarpost);

router.get('/deletaraluno/:id', controller.deletar);

module.exports = router;