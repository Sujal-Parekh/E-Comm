const mongoose=require("mongoose")
mongoose.set('strictQuery', false);
 const db=mongoose.connect("mongodb://localhost:27017/study")
module.exports=db

