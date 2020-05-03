const express = require('express')
const posts = require('../usescases/post')
const auth = require('../middlewares/auth')

const router = express.Router()
router.get('/', auth, async (request, response) => {
  try {
    const postlist = await posts.getAll()
    response.json({
      message: 'List of all post',
      data: {
        post: postlist
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

router.post('/', auth,  async (request, response) => {
  try {
    const newPost = request.body
    const postCreated = await posts.create(newPost)

    response.json({
      message: 'new post added',
      data: {
        post: postCreated
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
    const postDeleted = await posts.deleteById(id)

    response.json({
      success: true,
      message: `Post with id ${id} deleted`,
      data: {
        post: postDeleted
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
    const postUpdated = await posts.updateById(id, request.body)

    response.json({
      success: true,
      message: `Post with id ${id} updated`,
      data: {
        post: postUpdated
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