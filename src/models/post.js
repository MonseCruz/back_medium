const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    image:{
        type: String,
        requiered: true
    },
    description:{
        type: String,
        requiered: true
    },
    author:{
        type: String,
        requiered: true
    },
    category:{
        type: String,
        requiered: true
    },
    estimatedReadTime:{
        type: Number,
        requiered: true
    },
    date:{
        type: Date,
        requiered: true
    }
})

module.exports = mongoose.model('Post', postSchema)