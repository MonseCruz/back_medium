const post = require('../models/post')

function getAll () {
 
  return postlist = post.find({})
}

function create (data) {
  return postCreated = post.create(data)
}

function deleteById (id) {
  return post.findByIdAndRemove(id)
}

function updateById (id, data) {
  return post.findByIdAndUpdate(id, data)
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
}
