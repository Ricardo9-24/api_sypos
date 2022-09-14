const mongoose = require('mongoose')

URI=('mongodb://localhost/mongobd')
// URI=('mongodb+srv://ricardocrud:admindb@cluster0.hcvwr.mongodb.net/test')

mongoose.connect(URI,{
    useNewUrlParser:true,
    // useUnifielTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:false
})
.then(db=>console.log('base de datos mongoDB conectada', db.connection.name))
.catch(error=>console.log(error))

module.exports = mongoose;