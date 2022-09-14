const {Router}=require('express')
const router=Router()
const jefeCtrl=require('../controllers/jefe.controllers')

router.post('/crear',jefeCtrl.crearJefe)

router.post('/login',jefeCtrl.login)

module.exports=router 