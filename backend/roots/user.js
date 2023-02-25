
const express = require("express")
const router = express.Router()
const {UserById,getAllusers,deleteUser} = require("../controllers/usersController")
const {authmiddlware,verifyUser,isAdmin} = require("../utils/authmiddlware")
const {createUser,login} = require("../controllers/authController")






//GET ALL USERS
router.get("/",getAllusers)

//DELETE User 

router.delete("/:id",verifyUser,deleteUser)

//CREATE User

router.post("/",createUser)

//LOGIN

router.post("/login",login)


module.exports  = router