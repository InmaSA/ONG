const express = require('express')
const router = express.Router()

const Group = require('../models/Group.model')

router.post('/new', (req,res,next) => {
  Group.create(req.body)
  .then(theNewGruop => res.json(theNewGruop))
  .catch(err => {
    res.status(500).json({message: 'Error creando un nuevo grupo'})
  })
})


router.get('/list', (req,res,next) => {
  const {name, rol} = req.user
  if (rol === 'DELEGADA') {
    Group.find({delegacion: name})
    .then(allGroups => res.json(allGroups))
    .catch(err => {
      res.status(500).json({message: 'Error obteniendo el listado de grupos'})
    })
  }
  else if (rol === 'DIOCESANA') {
    Group.find({diocesis: name})
    .then(allGroups => res.json(allGroups))
    .catch(err => {
      res.status(500).json({message: 'Error obteniendo el listado de grupos'})
    })
  }
  else {
    Group.find()
    .then(allGroups => res.json(allGroups))
    .catch(err => {
      res.status(500).json({message: 'Error obteniendo el listado de grupos'})
    })
  }
})


router.post('/edit-notes', (req,res,next) => {
  Group.findByIdAndUpdate(req.body._id, {notas: req.body.notas}, {new:true})
  .then(editedGroup => res.json(editedGroup))
  .catch(err => {
    res.status(500).json({message: 'Error editando notas de un grupo'})
  })
})


module.exports = router