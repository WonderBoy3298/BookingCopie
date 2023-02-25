
const { json } = require("body-parser")
const hotelS = require("../models/Hotel")
const Rooms =require("../models/Room")
const {createError} = require("../utils/error")


// GET ROOM 

const getAllRooms = async(req,res,next)=>{
    
    try{
    const rooms = await Rooms.find({})
    res.json(rooms)

    }catch(err){
        next(err)
    }
}



// CREATE ROOM
const createRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelId
    const {title,price,maxPeople,desc,roomNumbers} = req.body
    const room = new Rooms(
        {
        
        title:title,
        price: price,
        maxPeople:maxPeople,
        desc:desc,
        roomNumbers:roomNumbers  
    }
    )
    try{
        await room.save()
        try{
            await hotelS.findByIdAndUpdate(hotelId,{
                $push :{rooms:room._id}
            })
        }catch(err){
            next(err)
        }
        res.json({message:"room created successfuly",room})
    }catch(err){
       next(err)
    }

}

//DELETE ROOM 

const deleteRoom  =async(req,res,next)=>{

    const roomId = req.params.id 
    const hotelId = req.params.hotelid
    try{
    
        await Rooms.findByIdAndDelete(roomId)


        try{
            await hotelS.findByIdAndUpdate(hotelId,{
                $pull :{rooms:roomId}
            })
            res.json("Room has been deleted")

        }catch(err){
            next(err)
        }

    }catch(err){
        next(err)
    }
}

//UPDATE ROOM 
const updateRoom = async(req,res,next)=>{

    const roomId = req.params.id

    try{
       
        const updatedOne = await Rooms.findByIdAndUpdate(roomId , {$set:req.body} , {new:true} ) 
        res.json(updatedOne)

    }catch(err){

        next(err)
    }

}





module.exports = {getAllRooms,createRoom,deleteRoom,updateRoom}