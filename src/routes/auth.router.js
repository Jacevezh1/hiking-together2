// 1. Import (Express, y el router, y controllers)

const router = require('express').Router()

const { 
    getSignup, 
    postSignup,
    getLogin,
    postLogin,
    postLogout

} = require('./../controllers/auth.controller') 

const { isLoggedIn, isLoggedOut } = require('./../middlewares')


// 2. Routes

// a. Signup

router.get('/signup',isLoggedOut, getSignup)
router.post('/signup', postSignup)


// b. Login

router.get('/login', isLoggedOut, getLogin)
router.post('/login', postLogin)



// c. Logout
router.post('/logout', isLoggedIn, postLogout)





// 3. Export

module.exports = router