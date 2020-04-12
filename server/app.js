require('dotenv').config()
require ('./configs/mongoose.config')
require ('./configs/passport.config')

const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')
const express      = require('express')
const favicon      = require('serve-favicon');
const hbs          = require('hbs');

const logger       = require('morgan');
const path         = require('path');

const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const cors          = require('cors')


const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express()

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())


// Passport session config
app.use(session({
  secret: 'SSSSSShhhhhhhhh',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
app.use(passport.initialize())
app.use(passport.session())


// CORS middleware
const whitelist = [`${process.env.WHITE_URL}`]
const corsOptions = {
  origin: (origin, cb) => {
    const originIsWhitelisted = whitelist.includes(origin)
    cb(null, originIsWhitelisted)
  },
  credentials: true
}
app.use(cors(corsOptions))


// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



app.use('/', require('./routes/index.routes'))
app.use('/api', require('./routes/auth.routes'))
app.use('/api/group', require('./routes/group.routes'))
app.use('/api/volunteer', require('./routes/volunteer.routes'))
app.use('/api/users', require('./routes/users.routes'))


module.exports = app
