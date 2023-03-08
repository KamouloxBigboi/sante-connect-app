const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true,
  },

  post: [{
    body: String, 
    date: Date,
  }],

  date: {
    type: Date,
    default: Date.now},

  imgURL: {
    type: String
  },
});

module.exports = mongoose.model("Posts", PostSchema);