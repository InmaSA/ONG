const express = require('express')
const router = express.Router()

const Volunteer = require('../models/Volunteer.model')

router.post('/new', (req,res,next) => {
  Volunteer.create(req.body)
  .then(theNewVolunteer => res.json(theNewVolunteer))
  .catch(err => {
    res.status(500).json({message: 'Error creando un nuevo voluntario'})
  })
})

router.get('/list', (req,res,next) => {
  Volunteer.find()
  .then(allVolunteers => res.json(allVolunteers))
  .catch(err => {
    res.status(500).json({message: 'Error obteniendo el listado de voluntario'})
  })
})

router.post('/edit', (req,res,next) => {
  Volunteer.findByIdAndUpdate(req.body._id, {
      nombre: req.body.nombre, 
      dni: req.body.dni, 
      telefono: req.body.telefono, 
      email: req.body.email, 
      direccion: req.body.direccion, 
      cp: req.body.cp, 
      fecha_nacimiento: req.body.fecha_nacimiento, 
      delegacion: req.body.delegacion, 
      diocesis: req.body.diocesis, 
      grupo: req.body.grupo, 
      cargo: req.body.cargo, 
      cc: req.body.cc, 
      revista: req.body.revista
      }, 
      {new:true}
    )
  .then(editedVolunteer => res.json(editedVolunteer))
  .catch(err => {
    res.status(500).json({message: 'Error editando el voluntario/a'})
  })
})


router.get('/delete/:_id', (req,res,next) => {
  console.log(req.params._id)
  Volunteer.findByIdAndDelete(req.params._id)
  .then((x) => {
    console.log('eliminado de la base de datos')
    res.status(200).json({message: 'eliminado de la base de datos'})
  })
  .catch(err => console.log({message: 'error eliminando el voluntario de la base de datos'}))
})


module.exports = router
//const {nombre, dni, telefono, email, direccion, cp, fecha_nacimiento, delegacion, diocesis, grupo, cargo, cc, revista} = req.body