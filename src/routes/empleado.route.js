const {Router} = require('express')
const router = Router()
const empleadoCtrl = require('../controllers/empleado.controllers')
const Auth = require('../helper/auth')

router.post('/crear',Auth.verificaToken,empleadoCtrl.crearEmpleado)

router.get('/listAll',Auth.verificaToken,empleadoCtrl.listar)

router.get('/listById/:id',Auth.verificaToken,empleadoCtrl.listaById)

router.get('/listByJefe/:id',Auth.verificaToken,empleadoCtrl.listaEmpleadoByJefe)

router.put('/actualizar/:id',Auth.verificaToken,empleadoCtrl.actualizar)

router.delete('/eliminar/:id',Auth.verificaToken,empleadoCtrl.eliminar)

router.get('/buscar/:id/:nombres',Auth.verificaToken,empleadoCtrl.buscarEmpleado)

module.exports=router