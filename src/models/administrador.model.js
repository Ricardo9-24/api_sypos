const moongose = require('mongoose')
const {Schema} = moongose

const AdminSchema = new Schema({
    correo:String,
    contrasenia:String
})

module.exports=moongose.model('administrador',AdminSchema)