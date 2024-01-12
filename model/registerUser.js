const mongoose = require("mongoose")

const RegisterUserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const data = mongoose.model("RegisterUser", RegisterUserSchema)
module.exports = data;