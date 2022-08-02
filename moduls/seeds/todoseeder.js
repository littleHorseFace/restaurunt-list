const mongoose = require('mongoose')
const Rest = require('../todo') // 載入 todo model
const restfile = require('./restfile')
mongoose.connect(process.env.MONGODB_URI_RESTAURUNT, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < restfile.length; i++) {
    Rest.create(restfile[i])
  }
  console.log('done')
})