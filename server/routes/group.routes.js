const express = require('express')
const router = express.Router()

const Group = require('../models/Group.model')

/*-------------------------------- CREATE NEW GROUP-------------------------------- */
router.post('/new', (req,res,next) => {
  Group.create(req.body)
  .then(theNewGruop => res.json(theNewGruop))
  .catch(err => {
    res.status(500).json({message: 'Error creando un nuevo grupo'})
  })
})


/*-------------------------------- LIST ALL GROUPS-------------------------------- */


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


/*-------------------------------- EDIT A GROUP-------------------------------- */

router.post('/edit', (req,res,next) => {
    const {_id, nombre, delegacion, diocesis, provincia, parroquia, domicilio_social, poblacion, ereccion, n_registro, 
      notas, cc, nombreConsiliario, emailConsiliario, direccionConsiliario, telefonoConsiliario} = req.body
  Group.findByIdAndUpdate(_id, 
    {nombre, delegacion, diocesis, provincia, parroquia, domicilio_social, poblacion, ereccion, n_registro, 
    notas, cc, nombreConsiliario, emailConsiliario, direccionConsiliario, telefonoConsiliario}, 
    {new:true}
    )
  .then(editedGroup => res.json(editedGroup))
  .catch(err => {
    res.status(500).json({message: 'Error editando el grupo'})
  })
})



module.exports = router