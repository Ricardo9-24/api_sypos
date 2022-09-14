const mongoose=require('mongoose')
const {Schema} = mongoose

const UsuarioSchema=new Schema({
    nombre:String,
    apellido:String,
    identificacion:String,
    puesto:String,
    tipoContrato:String,
    jefe:String
})

module.exports = mongoose.model('usuario',UsuarioSchema)