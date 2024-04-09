const mongoose=require("mongoose")

const addcartSchema= new mongoose.Schema({

    userid:{
        type:String,
    },
    pid:{
        type:String
    },
qty:{
        type:Number
}
})
const cart=new mongoose.model('cart',addcartSchema)
module.exports= cart

