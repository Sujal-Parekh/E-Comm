const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
    cname: {
        type: String,
        trim: true,

    },
}
)
const category = new mongoose.model('category', categorySchema)
module.exports = category;