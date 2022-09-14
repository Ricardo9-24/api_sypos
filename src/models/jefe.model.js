const mongoose = require('mongoose')
const {Schema} = mongoose

const JefeSchema = new Schema({
    nombre:String,
    correo:String,
    contrasenia:String
})

module.exports= mongoose.model('jefe', JefeSchema)


