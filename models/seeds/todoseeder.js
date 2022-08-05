const Rest = require('../todo') // 載入 todo model
const restfile = require('./restfile')

const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < restfile.length; i++) {
    Rest.create(restfile[i])
  }
  console.log('done')
})