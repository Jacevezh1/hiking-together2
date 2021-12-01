// 1. Import

const router = require('express').Router()
const { getProfile } = require('./../controllers/user.controller')


// 2. Routes


router.get('/:user', getProfile)

// 3. Export

module.exports = router



