const Auth={}
const jwt=require('jsonwebtoken')

Auth.verificaToken=(req,res,next)=>{
    const token = req.headers.autorizacion
    if (!token) {
        return res.json({
            nErrorCode:400,
            sErrorMsg:"Usuario no autorizado"
        })
    }

    jwt.verify(token,'secret',(error,resultado)=>{
        if (error) {
            return res.json({
                nErrorCode:400,
                sErrorMsg:"Token invalido"
            })
        }
        // next()
    })
    next()
}

module.exports=Auth