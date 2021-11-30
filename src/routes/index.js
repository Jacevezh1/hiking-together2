// 1. Import
const router = require('express').Router()
const index = require("./../controllers/index")


// 2. Routes
router.get('/', index.home)
router.get('/about', index.about)

// 3. Export
module.exports = router