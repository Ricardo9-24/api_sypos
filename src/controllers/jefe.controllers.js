const JefeCtrl = {}
const Jefe = require('../models/jefe.model')

const  bcript=require('bcryptjs')
const jwt=require('jsonwebtoken')

JefeCtrl.crearJefe=async(req,res)=>{
    const {nombre,correo,contrasenia}= req.body
    const NuevoJefe=new Jefe({
        nombre,correo,contrasenia
    })
    const correojefe=await Jefe.findOne({correo:correo})
    if (correojefe) {
        res.json({
            nErrorCode: 1,
            sErrorMsg:'El correo ya existe'
        })
    }else{
        NuevoJefe.contrasenia = await bcript.hash(contrasenia,10)
        const token = jwt.sign({_id:NuevoJefe._id},'secret')
        await NuevoJefe.save()
        res.json({
            nErrorCode: 0,
            sErrorMsg:'Jefe registrado exitosamente!!',
            id:NuevoJefe._id,
            nombre:NuevoJefe.nombre,
            token
        })
    }
}

JefeCtrl.login=async(req,res)=>{
      const {nombre,correo,contrasenia}=req.body
      const jefe=await Jefe.findOne({correo:correo})
      if (!jefe) {
          return res.json({ 
              nErrorCode: 1,
              sErrorMsg:'Correo incorrecto'
          })
      }
      const match=await bcript.compare(contrasenia,jefe.contrasenia)
      if (match) {
          const token=jwt.sign({_id:jefe._id},'secret')
          res.json({
              nErrorCode: 0,
              sErrorMsg:'Bienvenido ' + jefe.nombre,
              id:jefe._id,
              nombre:jefe.nombre,
              token
          })
      }else{
        res.json({
            nErrorCode: 1,
            sErrorMsg:'Contraseña incorrecta'
        })
      }
}

module.exports=JefeCtrl