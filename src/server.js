const express = require('express')
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const app = express()

app.use(express.json())



app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/auth', authRouter)

module.exports = app