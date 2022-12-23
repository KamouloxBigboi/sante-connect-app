import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  imgURL: {
    type: String
  },
  // date: {
  //   addDate : function() {
  //               this.date = newDate();
  //               if (this.children) {
  //                   for (var i = 0; i < this.children.length; i++) {
  //                       this.children[i].addDate = this.addDate;
  //                       this.children[i].addDate();
  //                   }
  //               }
  //             },
  // }
});

const Posts = mongoose.model("Post", PostSchema);


export default Posts