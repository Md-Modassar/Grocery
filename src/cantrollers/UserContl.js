const userModel=require("../Models/UserModel")
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()


const isValidEmail=function(value){
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    if (emailRegex.test(value)) return true;
}

exports.singUp=async (req,res)=>{
    try{
      const data=req.body
      const {name,email,password}=data
      if(!name)
      {
        return res.status(400).send({status:false,message:"please enter required field"})  
      }
   if(!email)
      {
        return res.status(400).send({status:false,message:"please enter required field"})  
      } 
   if(!password){
      return res.status(400).send({status:false,message:"please enter required field"})  
    } 

    if(!isValidEmail(email)){
      return res.status(400).send({ status: false, msg: "email is not valid" })
    }

    const emailexist=await userModel.findOne({email:email})
    if (emailexist) return res.status(400).send({ status: false, msg: "email should be unique" })

    const createdata=await userModel.create(data)
     return res.status(201).send({status:true,createdata})
    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}
exports.logIn=async(req,res)=>{
    try{
       let data=req.body
       let { email, password } = data

       if (!email) return res.status(400).send({ status: false, msg: "email is mendatory" })
       if (!password) return res.status(400).send({ status: false, msg: "password is mendatory" })

       if(!isValidEmail(email)){
        return res.status(400).send({ status: false, msg: "email is not valid" })
      }

       const emailexist =await userModel.findOne({email:email})
       if(!emailexist){
        return res.status(400).send({status:false,message:"Plase enter valid email"})
       }
       
       if(password!=emailexist.password){
        return res.status(400).send({status:false,message:"Pease enter valid password"})
       }

       let token =jwt.sign({userId:emailexist._id},process.env.SE_JWT)
       return res.status(201).send({status:true,token,emailexist})

    }catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}