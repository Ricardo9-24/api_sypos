const {Router}=require('express')
const router=Router()
const adminCtrl=require('../controllers/administrador.controller')

router.post('/login',adminCtrl.Login)

router.get('/listaJefes',adminCtrl.ListarJefes)

module.exports=router