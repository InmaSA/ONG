const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  username: String,
  password: String,
  rol: {type: String, 
        enum: ['ADMIN', 'JUNTA', 'DELEGADA', 'DIOCESANA', 'GRUPO'],
        default: 'GRUPO'},
  name: String,      
},{timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User