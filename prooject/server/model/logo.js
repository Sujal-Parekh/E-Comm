const mongoose = require("mongoose")
const logoSchema = new mongoose.Schema({
    logoname: {
        type: String,
        trim: true,

    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    images: {
        type: Array,
    },
    cid: {
       type:String,
     },
     s_cid:{
       type:String,
    },
color:{
    type:String,
},
    size:{
        type:String,
    }
}
)
const logo = new mongoose.model('logo', logoSchema)
module.exports = logo;