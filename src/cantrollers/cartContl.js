const cartModel=require("../Models/CartModel")
const mongoose=require("mongoose")
const objectId = mongoose.Types.ObjectId
const userModel =require("../Models/UserModel")

exports.cartCotroller=async(req,res)=>{
    try{
        const data=req.body
        
        const {userid,amount,quantity,productid}=data
        
      
        
        if(!userid){return res.status(400).send({status:false,message:"Please enter required userid"})}
        if(!amount){return res.status(400).send({status:false,message:"Please enter required amount"})}
        if(!quantity){return res.status(400).send({status:false,message:"Please enter required quantity"})}
        if(!productid){return res.status(400).send({status:false,message:"Please enter required productid"})}
        
        if(!objectId.isValid(userid)){return res.status(400).send({status:false,message:"Please enter valide id"})}

        const existuser=await userModel.findById(userid)
        if(!existuser){
            return res.status(400).send({status:false,message:"this userid not exist"})
        }
        data.userid=userid
        
        const savedata =await cartModel.create(data)
        return res.status(201).send({status:true,savedata})
    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

exports.getAllCart=async(req,res)=>{
    try{
        const userid = req.query.userid
  

        if(!objectId.isValid(userid)){return res.status(400).send({status:false,message:"Please enter valide id"})}

        const existuser=await userModel.findById(userid)
        if(!existuser){
            return res.status(400).send({status:false,message:"this userid not exist"})
        }

        const getdata =await cartModel.find({userid:userid})
        return res.status(200).send({status:true,getdata})


    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

exports.deletecart=async(req,res)=>{
    try{
       const {cartid}=req.params
       console.log(cartid)

       if(!objectId.isValid(cartid)){return res.status(400).send({status:false,message:"Please enter valide id"})}

       const deletecart =await cartModel.findByIdAndDelete(cartid)
       if(!deletecart){
         return res.status(404).send({status:false,message:"Please enter valide"})
       }else{
        return res.status(200).send({status:true,message:"Delete cart Sccussfully"})
       }
    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}