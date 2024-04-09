const mongoose = require('mongoose')
const studschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    isadmin: {
        type: Boolean,
        default: false
    },
    otp:{
        type:Number,
        default:0
    }
})

const studmodel = mongoose.model("express", studschema)
module.exports = studmodel
