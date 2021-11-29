
// 1. Imports
const express = require('express')
const app = express()

require('dotenv/config')

const path = require('path')



// 2. Middlewares
// Static files - HTML CSS JS IMAGES
app.use(express.static(path.join(__dirname, 'public')))


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// To use req.body
app.use(express.urlencoded({ extended: true }))




// 3. Layout Middleware
// Importante para saber si un usrio esta loggeado y checar en las vistas




// 4.Routes

// Home
app.use('/', require('./routes'))

// Login y signup
app.use('/auth', require('./routes/auth.router'))



// Export
module.exports = app
