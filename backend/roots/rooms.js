const express = require("express")
const router = express.Router()
const {getAllRooms,createRoom,deleteRoom,updateRoom} = require("../controllers/roomsController")




// Get ALL Rooms
router.get('/',getAllRooms)

// Create Room
router.post('/:hotelId',createRoom)

// Delete Room 
router.delete('/:id/:hotelid',deleteRoom)

//Update Room 
router.put('/',updateRoom)






module.exports = router