const orderModel =require('../Models/orderModel')
const userModel =require("../Models/UserModel")
const moment = require('moment');
const mongoose=require('mongoose')
const objectId = mongoose.Types.ObjectId

exports.orderCntr=async(req,res)=>{
    try{
      const data=req.body
      const {userid,products}=data
       console.log(products)
      if(!userid){
        return res.status(400).send({status:false,message:"Please enter required userid"})
      }
      if(products.length==0){
        return res.status(400).send({status:false,message:"Please enter required products"})
      }

      if(!objectId.isValid(userid)){
        return res.status(400).send({status:false,message:"please enter valid userid"})
      }

      const userexist=await userModel.findById(userid)

      if(!userexist){
       return res.status(404).send({status:false,message:"user not found"})
      }
     const currentDate = moment();
     const formattedDate = currentDate.format('D/MMM/YYYY');
     data.date=formattedDate.toString()

     const savedata=await orderModel.create(data)

     return res.status(201).send({status:true,savedata})

    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }

    
}

exports.getorders=async(req,res)=>{
    try{
       const {userid}=req.params

       if(!objectId.isValid(userid)){
        return res.status(400).send({status:false,message:"please enter valid userid"})
      }

      const userexist=await userModel.findById(userid)

      if(!userexist){
       return res.status(404).send({status:false,message:"user not found"})
      }

      const orders=await orderModel.find({userid:userid})

      if(orders.length==0)
        {
            return res.status(404).send({status:false,message:"You have not order till Now,'Please order'"})
        }else{
            return res.status(200).send({status:true,orders})
        }



    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}