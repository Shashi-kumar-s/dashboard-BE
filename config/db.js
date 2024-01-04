const mongoose = require('mongoose')
const url = 'mongodb+srv://shashikumarsharma59:shashi00$@cluster0.ajezqkh.mongodb.net/'
mongoose.connect(url).then((res) => console.log( "mongoose connect")).catch((error) => console.log(error))

