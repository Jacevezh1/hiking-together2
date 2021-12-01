// 1. Import rooms.router.js
const router = require('express').Router()

const { gethikes, getSingleHike, viewCreateHike, createHike, viewEditHike, editHike  } = require('./../controllers/hike.controller')

// 2. Routes

// 2.2 Crear


router.get("/crear", viewCreateHike)// a) Para observar el formulario
router.post("/crear", createHike)// b) Para crear un libro
router.get('/', gethikes)// 2.1 Read (Lectura de los hikes creados, y un en especifico, o sea single)

router.get("/edit/:hikeID", viewEditHike)// 3. View Edit (Hike)
router.post("/edit/:hikeID", editHike) // 4. Edit
router.get("/:hikeID", getSingleHike)





// Export
module.exports = router



