const express =require('express')
const router=express.Router()

const { singUp, logIn }=require("../cantrollers/UserContl")
const { cartCotroller, getAllCart, deletecart }=require("../cantrollers/cartContl")
const { orderCntr, getorders } = require('../cantrollers/order')

router.post("/signup",singUp)
router.post("/login",logIn)

//cart cantroller

router.post("/cart",cartCotroller)
router.get("/cart",getAllCart)
router.delete("/cart/:cartid",deletecart)

//order routes

router.post("/order",orderCntr)
router.get("/order/:userid",getorders)



module.exports=router;