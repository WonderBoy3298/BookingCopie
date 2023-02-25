
const express = require("express")
const router = express.Router()
const {createhotel,deletehotel,getAllHotels,getHotelById,updateHotel,countBycity,countByType} = require("../controllers/hotelController")
const {authmiddlware,verifyUser,isAdmin} = require("../utils/authmiddlware")


//---------------------------------------------------------- routes for hotels ------------------------------------///

//CREATE Hotel
router.post("/",isAdmin, createhotel)

//Update Hotel

router.put("/:id",authmiddlware,updateHotel)

// DETLETE Hotel
router.delete("/:id",isAdmin, deletehotel)


// GET ALL HOTEL 

router.get("/",getAllHotels)

// GET Hotel BY ID

router.get("/find/:id" ,getHotelById)

// Count hotel By city name 
router.get("/countByCity",countBycity)


// COUNT  BY hotel TYPE
router.get("/countByType",countByType)
//router.get("/countByType",)



module.exports = router