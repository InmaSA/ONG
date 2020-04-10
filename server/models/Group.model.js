const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema ({
  nombre: String,
  delegacion: String,
  diocesis: String,
  provincia: String,
  parroquia: String,
  domicilio_social: String,
  poblacion: String,
  ereccion: String,
  n_registro: String,
  cc: String,
  notas: String,
  nombreConsiliario: String,
  emailConsiliario: String,
  direccionConsiliario: String,
  telefonoConsiliario: String
},{timestamps: true})

const Group = mongoose.model('Group', groupSchema)
module.exports = Group