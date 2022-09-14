const express = require('express')
const app = express()
const morgan= require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
require('./database')

app.set('Port', 4000);
var port = process.env.port || 4000;
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen:'*'}))

// Ruta Administrador
app.use('/admin',require('./routes/administrador.router'))

// Ruta Jefe
app.use('/jefe',require('./routes/jefe.route'))

// Ruta Empleado
app.use('/empleado',require('./routes/empleado.route'))

app.listen((process.env.PORT || 4000), function(){
    console.log('Servidor escuchando por el puerto', process.env.PORT )
})