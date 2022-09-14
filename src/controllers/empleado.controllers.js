const EmpleadoCtrl = {}
const Empleado=require('../models/usuario.model')

EmpleadoCtrl.crearEmpleado=async (req,resp)=>{
    const {nombre,apellido,identificacion,puesto,tipoContrato,jefe}=req.body
    try {
        
        const NuevoEmpleado=new Empleado({
            nombre,apellido,identificacion,puesto,tipoContrato,jefe
        })
                
        const respuesta = await NuevoEmpleado.save()
        if (respuesta != null) {
            resp.json({
                nErrorCode:0,
                sErrorMsg:'Empleado registrado exitosomente!!',
                respuesta
            })
        }else{
            resp.json({
                nErrorCode:1,
                sErrorMsg:'No fue posible crear el empleado ;('
            })
        }
    } catch (error) {
        resp.json({
            nErrorCode:1,
            sErrorMsg:error
        })
    }
   
}

EmpleadoCtrl.listar=async (req,resp)=>{
    const respuesta = await Empleado.find()

    resp.json(respuesta)
}

EmpleadoCtrl.listaById = async(req,resp)=>{
    try {        
        const id = req.params.id
        const respuesta = await Empleado.findById({_id:id})
        if(respuesta != null){
            resp.json({
                nErrorCode:0,
                sErrorMsg:"Consulta correcta",
                respuesta
            })
        }else{
            resp.json({
                nErrorCode:1,
                sErrorMsg:"No se encontraron datos con el ID ingresado",
                respuesta
            })
        }
    } catch (error) {
        resp.json({
            nErrorCode:99,
            sErrorMsg:"Ha ocurrido un error",
            error
        })
    }
}

EmpleadoCtrl.listaEmpleadoByJefe = async(req,resp) =>{
    const id = req.params.id
    const respuesta = await Empleado.find({jefe:id})

    resp.json(respuesta)
}

EmpleadoCtrl.eliminar = async (req,resp) =>{
    const id = req.params.id
    const respuesta = await Empleado.findByIdAndRemove({_id:id})
    if (respuesta != null) {
        resp.json({
            nErrorCode:0,
            sErrorMsg:"Empleado eliminado correctamente!!"
        })
    }else{
        resp.json({
            nErrorCode:1,
            sErrorMsg:"No fue posible eliminar el registro :(",
            respuesta
        })
    }
}

EmpleadoCtrl.actualizar = async(req,resp)=>{
    try {
        const id = req.params.id
        const respuesta = await Empleado.findByIdAndUpdate({_id:id},req.body)
        if (respuesta != null) {
            resp.json({
                nErrorCode:0,
                sErrorMsg:"Datos de empleado, actualizado correctamente",
                respuesta
            })
        } else {
            resp.json({
                nErrorCode:1,
                sErrorMsg:"No fue posible actualizar el registro :(",
                respuesta
            })
        }
    } catch (error) {
        resp.json({
            nErrorCode:99,
            sErrorMsg:"Algo salio mal ;(",
            error
        })
    }
}

EmpleadoCtrl.buscarEmpleado = async(req,resp)=>{
    const nombres = req.params.nombres
    const id=req.params.id
    console.log(nombres)
    const respuesta=await Empleado.find({jefe:id,nombre: { $regex: new RegExp("^" + nombres.toLowerCase(), "/"+"i") }}).collation({locale: 'tr', strength: 1})
    // const respuesta=await Empleado.find({jefe:id,nombre:{$regex: `.*${ nombres }.*`}})
    // const respuesta=await Empleado.find({jefe:id,nombre: { $regex: new RegExp(`^${nombres}$`, 'i') }})
    console.log(respuesta)
    if (respuesta!=null) {
        resp.json({
            nErrorCode:0,
            sErrorMsg:"Consulta correcta",
            respuesta
        })
    }else{
        resp.json({
            nErrorCode:1,
            sErrorMsg:"Busqueda fallida",
            respuesta
        })
    }
}

module.exports=EmpleadoCtrl