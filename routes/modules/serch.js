const express = require('express')
const router = express.Router()
const Rest = require('../../models/todo')

router.get('/', (req, res) => {
  const searchEat = req.query.findEat
  Rest.find()
    .lean()
    .then(rests => {
      const restaurantSearchList = rests.filter((resItem) => {
        const nameSearch = resItem.name.toLowerCase().trim().includes(searchEat.toLowerCase().trim())
        const categorySearch = resItem.category.toLowerCase().trim().includes
          (searchEat.toLowerCase().trim())
        if (nameSearch) {
          return nameSearch
        } else {
          return categorySearch
        }
      })
      console.log(restaurantSearchList)
      res.render('index', { restaurantList: restaurantSearchList, keyword: searchEat.trim() })
    })
})

module.exports = router