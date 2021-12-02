// 1. Import
const router = require('express').Router()
const index = require("./../controllers/index")


// 2. Routes
router.get('/', index.home)
router.get('/about', index.about)
router.get('/faqs', index.faqs)
router.get('/extra', index.extra)



// 3. Export
module.exports = router


