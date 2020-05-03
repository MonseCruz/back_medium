const express = require('express')
const users = require('../usescases/user')
const auth = require('../middlewares/auth')

const router = express.Router()
router.get('/',  async (request, response) => {
  try {
    const userlist = await users.getAll()
    response.json({
      message: 'List of all users',
      data: {
        users: userlist
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

router.post('/', auth, async (request, response) => {
  try {
    const newUser = request.body
    const userCreated = await users.create(newUser)

    response.json({
      message: 'new user added',
      data: {
        user: userCreated
      }
    })
  } catch (error) {
    response.json({
      success: false,
      error: error.message
    })
  }
})

router.delete('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const userDeleted = await users.deleteById(id)

    response.json({
      success: true,
      message: `User with id ${id} deleted`,
      data: {
        user: userDeleted
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

router.patch('/:id', auth, async (request, response) => {
  try {
    const { id } = request.params
    const userUpdated = await users.updateById(id, request.body)

    response.json({
      success: true,
      message: `User with id ${id} updated`,
      data: {
        user: userUpdated
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

router.post('/singup', async (request, response) => {
  try {
    const newUser = await users.singup(request.body)
    response.json({
      message: 'user registered',
      data: {
        user: newUser
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
