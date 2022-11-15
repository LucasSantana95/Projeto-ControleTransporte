const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controllerTransporte')

router.get('/', (req,res)=>{ res.render('../Views/index.ejs')})
router.get('/iniciotransporte', controller.get);

router.get('/manhatransporte', controller.getManha);
router.post('/manhatransporte', controller.postManha);
router.get('/tardetransporte', controller.getTarde);
router.post('/tardetransporte', controller.postTarde);

module.exports = router;