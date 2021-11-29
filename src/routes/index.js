// 1. Import
const router = require('express').Router()

const home = require('./../controllers')



// 2. Routes
router.get('/', home)


// 3. Export
module.exports = router

