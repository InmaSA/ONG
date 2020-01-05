const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  username: String,
  password: String,
  rol: {type: String, 
        enum: ['ADMIN', 'JUNTA', 'DELE', 'DIO', 'GRUPO'],
        default: 'GRUPO'}
},{timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User