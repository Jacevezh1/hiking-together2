// Import rooms.router.js
const router = require('express').Router()

const { getHikes } = require('./../controllers/hike.controller')

// Routes
router.get('/', getHikes)

// Export
module.exports = router



