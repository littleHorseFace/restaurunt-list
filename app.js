// app.js
// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const parser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const port = process.env.PORT || 3000

const app = express()

// require handlebars in the project
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(express.static('public'))
app.use(parser.urlencoded({ extended: 'ture' }))
app.use(methodOverride('_method'))
app.use(routes)

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})