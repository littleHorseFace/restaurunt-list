const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI_RESTAURUNT, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.error('mondodb link error')
})
db.once('open', () => {
  console.log('connect mongodb')

})

module.exports = db