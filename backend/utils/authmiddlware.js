
const {createError} = require("./error")
const jwt = require("jsonwebtoken")


const authmiddlware = (req,res,next)=>{

const token = req.cookies.jwt
    if(!token){
        return next(createError(404,"You are not authentificated"))
    }

    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err){
            return next(createError(404," Your token is not valid "))
        }
        req.user=user 
        req.user.isAdmin=user.isAdmin
        next()
        
    })
}

const verifyUser = (req,res,next)=>{
    authmiddlware(req,res,()=>{
        if(req.user.id ===  req.params.id || req.user.isadmin){
            next()
        }else{

            return next(createError(400,"you are not authorized! "))
        
        }
    })
    
}

const isAdmin = (req,res,next) =>{
    verifyUser(req,res,()=>{
        if(req.user.isadmin){
            next()
        }
        else{
            return next(createError(400,"you are not authorized! "))
        }
    })
}


module.exports = {authmiddlware,verifyUser,isAdmin}


