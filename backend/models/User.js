
const mongoose = require("mongoose")
const {isEmail} = require("validator")
const bcrypt = require("bcrypt")
const { validate } = require("./Hotel")


const UsersSchema = new mongoose.Schema({

    
    username:{

        type:String,
        unique:[true,'username already existe !']
    },
    email:{

      type:String,
      unique:true,
      required:[true,'Please enter a valid email'],
      validate:[isEmail,'Please Enter a valid email ']
      
    },
    password:{

        type:String,
        required:[true,'Please Enter a password'],
        minLenght:[6,'Minimun Password Lenght is 6 characters']
    
    },
    isAdmin:{
        type:Boolean,
        default:false
    }



})

UsersSchema.pre('save',async function (next){
    
    this.password= await bcrypt.hash(this.password,5)
    next() ;
})

module.exports = mongoose.model("user2",UsersSchema)