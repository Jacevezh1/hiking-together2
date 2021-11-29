// Server.js (Montamos el servidor dentro de este archivo unicamente)
const app = require('./app')

app.listen(process.env.PORT, () => {
    console.log(`Listen on http://localhost:${process.env.PORT}`)
})
