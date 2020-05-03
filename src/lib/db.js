const mongoose = require('mongoose')
const user = 'devmonse'
const password = 'raquelservicios18'
const dbName = 'medium'
const host = 'monse-kodemia-zs7ft.mongodb.net'

const url = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`

function connect () {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = {
  connect
}
