const server = require('./src/server')
const db = require('./src/lib/db')

async function main () {
  await db.connect()
  console.log('DB connected')
  server.listen(8080, () => {
    console.log('tu servidor esta corriendo')
  })
}

main()

  .then(() => {
    console.log('server ready')
  })
  .catch(error => {
    console.error('error:', error)
  })
