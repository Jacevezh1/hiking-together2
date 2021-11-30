// 1. Imports

const express = require('express')
const app = express()
const hbs = require("hbs")

require('dotenv/config')

const connectDB = require('./db')

const path = require('path')



// 2. Middlewares ( Static files - HTML CSS JS IMAGES )

app.use(express.static(path.join(__dirname, 'public')))
hbs.registerPartials(__dirname + "/views/partials")
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')


// To use req.body (Para poder acceder a los datos de los formularios que mis usuarios utilicen)
app.use(express.urlencoded({ extended: true }))



connectDB()

// 3. Layout Middleware (Importante para saber si un usrio esta loggeado y checar en las vistas)

app.use((req, res, next) => {
    res.locals.currentUser = req.session.currentUser
    next()
})




// 4. Routes

// a) Home
app.use('/', require('./routes'))

// b) Login y signup
app.use('/auth', require('./routes/auth.router'))

// c) Users
app.use('/user', require('./routes/user.router'))

// d) Hikes
app.use('/hikes', require('./routes/hikes.router'))




// 5. Export

module.exports = app



