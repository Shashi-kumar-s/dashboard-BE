const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/dashboard'
mongoose.connect(url).then((res) => console.log("mongoose connect")).catch((error) => console.log(error))

