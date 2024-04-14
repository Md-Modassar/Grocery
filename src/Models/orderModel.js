const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchem=new mongoose.Schema({
    userid:{type:ObjectId,ref:"users"},
    products:[{
        productid:{type:Number,required:true},
        quantity:{type:Number,required:true},
        amount:{type:Number,required:true}
    }],
    date:{type:String},
    amount:{type:Number,required:true},
    status:{type:String,default:"Pending"}
})

module.exports=mongoose.model('order',orderSchem)