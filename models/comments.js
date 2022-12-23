
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({

  firstname: {
    type: String,
  },

  name: {
    type: String,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },

  date: {
    type: String,
  },

  isFavorite: {
    type: Boolean,
  },

});

const Comments = mongoose.model("Comment", CommentSchema);


export default Comments