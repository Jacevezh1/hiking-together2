// Import rooms.router.js
const router = require('express').Router()
const { getHikes } = require('./../controllers/hike.controller')
const { postHike } = require('./../controllers/hike.controller')

// Routes
router.get('/', getHikes)
router.get('/crear', postHike)
// Export
module.exports = router



