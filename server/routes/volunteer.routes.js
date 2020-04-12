const express = require('express')
const router = express.Router()

const Volunteer = require('../models/Volunteer.model')

/*-------------------------------- CREATE NEW VOLUNTEER-------------------------------- */

router.post('/new', (req,res,next) => {
  Volunteer.create(req.body)
  .then(theNewVolunteer => res.json(theNewVolunteer))
  .catch(err => {
    res.status(500).json({message: 'Error creando un nuevo voluntario'})
  })
})

/*-------------------------------- GET LIST OF ALL VOLUNTEERS-------------------------------- */

router.get('/list', (req,res,next) => {
  const {name, rol} = req.user

  if (rol === 'DELEGADA') {
    Volunteer.find({delegacion: name})
    .then(allVolunteers => res.json(allVolunteers))
    .catch(err => {
      res.status(500).json({message: 'Error obteniendo el listado de voluntarios'})
    })
  }
  else if (rol === 'DIOCESANA') {
    Volunteer.find({diocesis: name})
    .then(allVolunteers => res.json(allVolunteers))
    .catch(err => {
      res.status(500).json({message: 'Error obteniendo el listado de voluntarios'})
    })
  }
  else if (rol === 'GRUPO') {
    Volunteer.find({grupo: name})
    .then(allVolunteers => res.json(allVolunteers))
    .catch(err => {
      res.status(500).json({message: 'Error obteniendo el listado de voluntarios'})
    })
  }
  else {
    Volunteer.find()
    .then(allVolunteers => res.json(allVolunteers))
    .catch(err => {
      res.status(500).json({message: 'Error obteniendo el listado de voluntarios'})
    })
  }
})


/*-------------------------------- EDIT A VOLUNTEER-------------------------------- */

router.post('/edit', (req,res,next) => {
  const {_id, cargo, delegacion, diocesis, grupo, nombre, dni, fecha_nacimiento, direccion, cp, telefono, email, cc, revista} = req.body
  Volunteer.findByIdAndUpdate(_id, 
    {cargo, delegacion, diocesis, grupo, nombre, dni, fecha_nacimiento, direccion, cp, telefono, email, cc, revista}, 
    {new:true}
    )
  .then(editedVolunteer => res.json(editedVolunteer))
  .catch(err => {
    res.status(500).json({message: 'Error editando el voluntario/a'})
  })
})


/*-------------------------------- DELETE A VOLUNTEER-------------------------------- */

router.get('/delete/:_id', (req,res,next) => {
  console.log(req.params._id)
  Volunteer.findByIdAndDelete(req.params._id)
  .then((x) => {
    console.log('eliminado de la base de datos')
    res.status(200).json({message: 'eliminado de la base de datos'})
  })
  .catch(err => console.log({message: 'error eliminando el voluntario de la base de datos'}))
})


/*-------------------------------- GET THE VOLUNTEERS IN A GROUP-------------------------------- */

router.get('/find/:group', (req,res,next) => {
  Volunteer.find({grupo: req.params.group})
  .then(volunteers => res.json(volunteers))
  .catch(err => {
    res.status(500).json({message: 'Error obteniendo el listado de voluntarios para este grupo'})
  })
})


module.exports = router