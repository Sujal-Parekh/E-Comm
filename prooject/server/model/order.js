const mongoose = require('mongoose')

const orderschema =new mongoose.Schema({
     pids:Array,
     payid:String,
     amount:Number,
     orderid:String,
     signature:String,
     user:String,
     orderstatus:{
          type:String,
          default:'pending'
     }
})

const order = new mongoose.model('order',orderschema);

module.exports = order;