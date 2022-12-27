import mongoose from "mongoose";

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

const Posts = mongoose.model("Post", PostSchema);


export default Posts