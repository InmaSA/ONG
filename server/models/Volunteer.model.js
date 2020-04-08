const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const volunteerSchema = new Schema ({
  nombre: String,
  dni: String,
  direccion: String,
  cp: String,
  telefono: String,
  email: String,
  fecha_nacimiento: String,
  delegacion: String,
  diocesis: String,
  grupo: String,
  cargo: {type: String, default: 'voluntario/a'},
  revista: {type: Boolean, default: false}
}, {timestamps: true})

const Volunteer = mongoose.model('Volunteer', volunteerSchema)
module.exports = Volunteer