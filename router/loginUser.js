const express=require("express")
const router=express.Router()
const loginUser=require("../controller/login")

router.post("/loginUser",loginUser.loginUser)
module.exports = router; 