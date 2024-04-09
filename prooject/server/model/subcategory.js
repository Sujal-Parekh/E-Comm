
const mongoose=require("mongoose")
const subcategorySchema= new mongoose.Schema({
    cid:{
        // type:mongoose.Schema.Types.ObjectId,
        // ref:"category",
        // trim:true,
        // require:true
type:String
    },
    subname:{
        type:String,
        trim:true
    },
   cname:{
type:String
   }
}
)
const subcategory =new mongoose.model('subcategory',subcategorySchema)
module.exports=subcategory;