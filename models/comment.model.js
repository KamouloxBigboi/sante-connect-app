const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  comments: [{ 
    body: String,
    date: Date,
  }],

  date: {
    type: Date,
    default: Date.now },

  hidden: Boolean, // true or 1 = hidden, false or 0 = not hidden

  meta: {
    votes: Number,
    favs: Number,
  },
});

module.exports = mongoose.model("Comments", CommentSchema);