const AdminCtrl = {}
const Admin = require('../models/administrador.model')
const Jefes = require('../models/jefe.model')
const EmpleadoCtrl = require('../controllers/empleado.controllers')

const bcript = require('bcryptjs')

AdminCtrl.Login = async(req,res)=>{
    const {correo,contrasenia}=req.body
    try {        
        const admin = await Admin.findOne({corre:correo})
        if (admin != null) {
            res.json({
                nErrorCode:0,
                sErrorCode:"Bienvenido Sr. Todo Poderoso!!!"
            })
        }else{
            res.json({
                nErrorCode:1,
                sErrorCode:"Los datos ingresados son incorrectos"
            })
        }
    } catch (error) {
        res.json({
            nErrorCode:1,
            sErrorCode:error
        })
    }
}

AdminCtrl.ListarJefes = async(req,res)=>{
    const{contrasenia}=req.body

    try {
        const datosJefes = await Jefes.find()
        console.log(datosJefes)
        if (datosJefes) {
            res.json({
                nErrorCode:0,
                sErrorCode:"Empleados encontrados Correctamente",
                datosJefes
            })
        } else {
            res.json({
                nErrorCode:1,
                sErrorCode:"No se encontro información ;(!!!"                
            })
        }
    } catch (error) {
        res.json({
            nErrorCode:1,
            sErrorCode:error
        })
    }
}

AdminCtrl.ListaEmpleadosJefe=async(req,res)=>{
    const idJefe = req.params.idJefe
    try {
        const datosEmpleados = await EmpleadoCtrl.listaEmpleadoByJefe(idJefe)
        if (datosEmpleados) {
            res.json({
                nErrorCode:0,
                sErrorCode:"Consulta de empleados exitoso",
                datosEmpleados
            })
        } else {
            res.json({
                nErrorCode:0,
                sErrorCode:"Consulta de empleados exitoso"
            })
        }
    } catch (error) {
        
    }
}

module.exports=AdminCtrl