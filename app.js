// app.js
// require packages used in the project
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const mongoose = require('mongoose')
const parser = require('body-parser')
const Rest = require('./moduls/todo')

// require handlebars in the project

const restaurant = require('./restaurant.json')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(parser.urlencoded({ extended: 'ture' }))

// link dataset mongoDB
mongoose.connect(process.env.MONGODB_URI_RESTAURUNT, { useNewUrlParser: true, useUnifiedTopology: true })

// test link sucess or error
const db = mongoose.connection
db.on('error', () => {
  console.error('mondodb link error')
})
db.once('open', () => {
  console.log('connect mongodb')
  console.log(Rest)
})
// routes setting
app.get('/', (req, res) => {
  Rest.find()
    .lean()
    .then(rests => res.render('index', { restaurantList: rests }))
    .catch(error => console.error(error))
})

app.get('/restaurants/add-new', (req, res) => {
  res.render('creat')
})

app.get('/restaurants/:restaurants_id', (req, res) => {
  const restaurantsId = req.params.restaurants_id
  Rest.findById(restaurantsId)
    .lean()
    //  以下未寫 檔案名稱 會有 錯誤 !!
    // TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument(爭議 爭論) must be of type string. Received an instance of Object
    .then(rests => res.render('show', { restaurantList: rests }))
    .catch(error => console.error(error))
})

app.get('/restaurants/:restaurants/adit', (req, res) => {
  const id = req.params.restaurants
  console.log(id)
  return Rest.findById(id)
    .lean()
    .then(rests => res.render('adit', { restaurunt: rests }))
    .catch(error => console.error(error))

})

app.post('/restaurants/add-new', (req, res) => {
  const name = req.body.name
  const category = req.body.category
  const image = req.body.image
  const location = req.body.adress
  const phone = req.body.phone
  const rating = req.body.rating
  const description = req.body.description
  const newRest = new Rest({
    name,
    category,
    image,
    location,
    phone,
    rating,
    description,
  })

  newRest.save()
    .then(() => res.redirect('/'))
    .catch(error => { console.log(error) })

})

app.post('/restaurants/:restaurunt/adit', (req, res) => {
  const id = req.params.restaurunt
  const name = req.body.name
  const adress = req.body.adress
  const phone = req.body.phone
  const description = req.body.description
  console.log(phone.trim().length)
  Rest.findById(id)
    .then(rests => {
      if (name.trim().length > 0) {
        rests.name = name
      }
      if (adress.trim().length > 0) {
        rests.location = adress
      }
      if (phone.trim().length > 0) {
        rests.phone = phone
      }
      if (description.trim().length > 0) {
        rests.description = description
      }
      return rests.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))

})

app.post('/restaurants/:restaurants/delete', (req, res) => {
  const id = req.params.restaurants
  console.log(id)
  return Rest.findById(id)
    .then(rests => rests.remove())
    .then(() => { res.redirect('/') })
    .catch(error => console.error(error))

})

app.get('/search', (req, res) => {
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

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})