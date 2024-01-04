const mongoose = require('mongoose')
const AddUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  IsAdmin: {
    type: Boolean,
    required: true
  },
  IsActive: {
    type: Boolean,
    required: true
  },

})

const data = mongoose.model("AddUserDetail", AddUserSchema)
module.exports = data