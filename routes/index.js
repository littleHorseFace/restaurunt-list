const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const todos = require('./modules/todos')
const search = require('./modules/serch')

router.use('/', home)
router.use('/restaurants', todos)
router.use('/search', search)

module.exports = router