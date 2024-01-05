const mongoose = require('mongoose')
const url = 'mongodb+srv://shashikumarsharma59:shashi@cluster0.ajezqkh.mongodb.net/dashboard?retryWrites=true&w=majority'
mongoose.connect(url).then((res) => console.log( "mongoose connect")).catch((error) => console.log(error))

