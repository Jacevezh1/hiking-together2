// 1. Import (Express, y el router, y controllers)

const router = require('express').Router()

const { 
    getSignup, 
    postSignup,
    getLogin,
    postLogin,
    postLogout

} = require('./../controllers/auth.controller') 



// 2. Routes

// a. Signup

router.get('/signup', getSignup)
router.post('/signup', postSignup)


// b. Login

router.get('/login', getLogin)
router.post('/login', postLogin)



// c. Logout
router.post('/logout', postLogout)





// 3. Export

module.exports = router