const express = require('express')
const mongoose = require('./config/db')
const cors = require('cors')
const userRoutes = require('./router/addUser')
const productRouets = require('./router/addProduct')
const app = express()
const port = 1000
app.use(cors())
app.use(express.json())
app.use('/api', userRoutes)
app.use('/api', productRouets)
app.listen(port, (req, res) => {
    console.log("server is created successfully");
})
