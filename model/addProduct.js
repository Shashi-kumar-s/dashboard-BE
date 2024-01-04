const mongoose = require('mongoose')
const AddProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },

})

const data = mongoose.model("AddProductDetail", AddProductSchema)
module.exports = data