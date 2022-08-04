const express = require('express')

const router = express.Router()

const Rest = require('../../moduls/todo')


router.get('/', (req, res) => {
  Rest.find()
    .lean()
    .then(rests => res.render('index', { restaurantList: rests }))
    .catch(error => console.error(error))
})

module.exports = router