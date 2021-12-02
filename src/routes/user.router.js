// 1. Import

const router = require('express').Router()
const { getProfile, viewEditUser, editUser } = require('./../controllers/user.controller')


// 2. Routes


router.get('/:user', getProfile)



// Edit User
router.get("/edit/:userID", viewEditUser) 

router.post("/edit/:userID", editUser)








// 3. Export

module.exports = router



