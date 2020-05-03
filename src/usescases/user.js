const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('../lib/jwt')

async function getAll () {
  const userlist = await User.find({})
  return userlist
}

async function create (data) {
  const userCreated = await User.create(data)
  return userCreated
}

function deleteById (id) {
  return user.findByIdAndRemove(id)
}

function updateById (id, data) {
  return user.findByIdAndUpdate(id, data)
}

async function singup (data) {
  const { email, password } = data
  if (!email) throw new Error('Email is requerides')
  if (!password) throw new Error('Password is required')
  if (password < 6) throw new Error('Password length must be  minim 6 carateres')

  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) throw new Error('Email is already registered')
  const hash = await bcrypt.hash(password, 10)

  return user.create({ ...data, password: hash })
}

async function login (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Invalid data')
  console.log(`hash ${user.password}`)
  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  console.log(isPasswordCorrect)
  if (!isPasswordCorrect) throw new Error('Invalid data')
  return jwt.sign({ id: user._id })
}

module.exports = {
  getAll,
  create,
  deleteById,
  updateById,
  singup,
  login
}
