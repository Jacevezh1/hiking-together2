// 1. Import (Express, y el router, y controllers)

const router = require('express').Router()

const { 
    getSignup, 
    postSignup,
    getLogin,
    postLogin

    
} = require('./../controllers/auth.controller') 


// 2. Routes

// a. Signup

router.get('/signup', getSignup)
router.post('/signup', postSignup)


// b. Login

router.get('/login', getLogin)
router.post('/login', postLogin)




// 3. Export

module.exports = router