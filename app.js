// app.js
// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require handlebars in the project
const exphbs = require('express-handlebars')
const restaurant = require('./restaurant.json')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurantList: restaurant.results })
})

app.get('/restaurants/:restaurants_id', (req, res) => {
  const restaurantsId = req.params.restaurants_id
  const restOne = restaurant.results.find(restaurant => restaurant.id === Number(restaurantsId))
  res.render('show', { restaurantList: restOne })
})

app.get('/search', (req, res) => {
  const searchEat = req.query.findEat
  const restaurantSearchList = restaurant.results.filter((resItem) => {
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

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})