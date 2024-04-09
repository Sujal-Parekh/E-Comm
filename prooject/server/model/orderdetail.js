const mongoose = require('mongoose');

const orderdetailschema =new mongoose.Schema({
     pid:String,
                    pname:String,
                    pqty:Number,
                    pimg:String,
                    price:Number,
                    orderid:String,
                    email:String,
                    fname:String,
                    lname:String,
                    phone:String,
                    country:String,
                    state:String,
                    city:String
})

const orderdetail = new mongoose.model('orderdetail',orderdetailschema);

module.exports = orderdetail;