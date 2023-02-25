const Users = require("../models/User")
const {createError} = require("../utils/error")



const deleteUser = async(req,res)=>{

    try{
    
        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted")

    }catch(err){
        res.json(err)
    }

}

const getAllusers  = async(req,res,next)=>{
    
    
    try{

    const user = await Users.find({})
    res.status(200).json({user})
    
    }catch(err){

        next(err)

    }   

}



const UserById = async(req,res)=>{


    try{
     const user = await Users.findById(req.params.id)
     res.status(200).json(user)
    }catch(err){    
    res.json(err)  
    }
}


module.exports = {
    UserById,getAllusers,deleteUser
}