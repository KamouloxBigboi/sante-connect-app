import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    default: 18,
  },
  gender: {
    type: String,
  },
  occupation: {
    type: String,
  },
  country: {
    type: String,
  },        

});

const Users = mongoose.model("User", UserSchema);


export default Users