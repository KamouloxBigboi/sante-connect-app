const mongoose = require('mongoose')

// let validateEmail = function(email) {
//   const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email);
// };

const UserSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    // trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Vous devez indiquer une adresse email"],
    // validate: [validateEmail, " Merci d'inscrire un email valide "],
    // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, " Merci d'inscrire un email valide "]
},

  password: {
    type: String,
    required: [true, "Vous devez indiquer un mot de passe"]
  },

  age: {
    type: Number,
    required: true,
    min: 16,
  },

  gender: String,

  occupation: String,

  country: {
    type: String,
    required: true,
  },        
  
});

module.exports = mongoose.model("Users", UserSchema);
