
import mongoose from "mongoose";

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
    required: true,
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

const Comments = mongoose.model("Comment", CommentSchema);


export default Comments