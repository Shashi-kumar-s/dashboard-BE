const express=require("express")
const router=express.Router()
const registerUser=require("../controller/registerUser")

router.post("/registerUser",registerUser.registerUser)
module.exports = router; 