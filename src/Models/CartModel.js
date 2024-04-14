const mongoose =require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const cartSchema=new mongoose.Schema({
    userid:{type:ObjectId,ref:"users",required:true},
    quantity:{type:Number,default:1},
    amount:{type:Number},
    productid:{type:Number}
},{timestamps:true})

module.exports=mongoose.model('carts',cartSchema)