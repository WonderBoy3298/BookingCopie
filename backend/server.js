const express= require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const cookieParser=require("cookie-parser")
//Middlewares

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cookieParser())





// End Of Middlewares


const hotelRoutes=require("./roots/hotels")
const userRoutes = require("./roots/user")
const roomsRoutes = require("./roots/rooms")

const { addListener } = require("./models/Hotel")

app.get('/',(req,res)=>{

    res.json("bienvenue hamza a ton nouveau projet")


})



mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("connecter avec succes"))
.catch(err=>console.log(err))





app.use('/api/hotel',hotelRoutes)
app.use('/api/users',userRoutes)
app.use('/api/rooms',roomsRoutes)


app.use((err,req,res,next)=>{

    const errStatus = err.status || 500
    const errMessage = err.message || " Something went wrong "  

    return res.status(500).json({
    
        success:false,
        status:errStatus,
        message:errMessage
    
     })
})


app.listen(process.env.PORT,()=>{console.log(`http://localhost:${process.env.PORT}`)})