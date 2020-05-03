const express = require('express')
const user = require('../usescases/user')
const router = express.Router()


router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body
    console.log(email)
    console.log(password)
    const token = await user.login(email, password)
    console.log(`firma ${token}`)
    response.json({
      success: true,
      message: 'loged in',
      data: {
        token
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      error: error.message
    })
  }
})

module.exports = router 