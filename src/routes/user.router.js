// 1. Import

const router = require('express').Router()
const { getProfile, viewEditUser, editUser } = require('./../controllers/user.controller')


// 2. Routes


router.get('/:user', getProfile)
// 3. Edit (user)
router.get("/edit/:userID", viewEditUser) 
router.post("/edit/:userID", editUser)

// 3. Export

module.exports = router



