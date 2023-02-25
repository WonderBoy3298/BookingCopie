
const users=require("../models/User")
const express = require("express")
const router  = express.Router()
const bcrypt = require("bcrypt")
const {createError} = require("../utils/error") 
const JWT = require("jsonwebtoken")


const createUser = async(req,res,next)=>{
    
    try{
        const {username,email,password}=req.body
        const newUser=new users({
            username:username,
            email:email,
            password:password

        })
        await newUser.save()
        return res.json({message:"l'utilisateur est creer avec succes "})
    }catch(err){
        res.json(err)
    }


}

const login  = async(req,res,next)=>{

    try{
        users.findOne({username:req.body.username}).then(user=>{

            if(!user){
                
                return next(createError(404,"le username n'existe pas"))
            }
            bcrypt.compare(req.body.password,user.password).then(isvalid=>{
                if(isvalid){
                    const {password,isadmin,...otherdetails} = user._doc 
                     
                     
                    const token = JWT.sign(

                        {id:user._id,isadmin:user.isAdmin},
                        process.env.JWT,
                        {expiresIn:'24h'}
                        )

                        res.cookie("jwt",token,{httpOnly:true,maxAge:1000*60*60*60}).json(otherdetails)                

                    }
                else{
                    return next(createError(404,"le mot de passe est incorrecte "))
                }
            })

        })
      
    }catch(err){
        console.log("erreur")
    }
}


module.exports = {createUser,login}