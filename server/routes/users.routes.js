const express = require('express')
const router  = express.Router()


const bcrypt = require('bcryptjs')

const User = require('../models/User.model')


/*--------------------------- CREATE NEW USER ----------------------------- */

router.post('/new', (req, res, next) => {
  const {username, name, password, rol} = req.body

  if (!username || !password) {
    res.status(400).json({ message: 'Por favor, introduce un nombre de usuario y una contraseña.' })
    return
  }

  // if (password.length < 8) {
  //     res.status(400).json({ message: 'Debes introducir una contraseña de al menos 8 caracteres.' })
  //     return
  // }

  User.findOne({ username }, (err, foundUser) => {

    if (err) {
        res.status(500).json({ message: "Algo salió mal en la comprobación del usuario, inténtalo de nuevo." })
        return
    }

    if (foundUser) {
        res.status(400).json({ message: 'Ya existe un usuario registrado con este nombre.' })
        return
    }

    const salt = bcrypt.genSaltSync(10)
    const hashPass = bcrypt.hashSync(password, salt)

    const aNewUser = new User({
        username: username,
        password: hashPass,
        name: name,
        rol:rol
    })


      User.create(aNewUser)
      .then(theNewUser => res.json(theNewUser))
      .catch(err => {
        res.status(500).json({message: 'Error creando un nuevo usuario'})
      })
  })
})

/*-------------------------------- LIST ALL USERS-------------------------------- */

router.get('/list', (req,res,next) => {
  User.find()
  .then(allUsers => res.json(allUsers))
  .catch(err => {
    res.status(500).json({message: 'Error obteniendo el listado de usuarios'})
  })
})

/*--------------------------- DELETE USER ------------------------------- */

router.get('/delete/:_id', (req,res,next) => {
  console.log(req.params._id)
  User.findByIdAndDelete(req.params._id)
  .then((x) => {
    console.log('eliminado de la base de datos')
    res.status(200).json({message: 'eliminado de la base de datos'})
  })
  .catch(err => console.log({message: 'error eliminando el usuario de la base de datos'}))
})

module.exports = router