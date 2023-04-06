const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// Fonction email valide (regex)

let validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const UserSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  email: {
    type: Object,
    trim: true,
    lowercase: true,
    unique: true,
    required: [false, "Pour l'inscription, votre adresse email est requise"],
    validate: [validateEmail, " Merci d'inscrire un email valide "],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, " Merci d'inscrire un email valide "]
},

  password: {
    type: Object,
    required: [true, "Tapez votre mot de passe"]
   },

  age: {
    type: Number,
    required: [true, "Pour l'inscription sur cette appli, il faut avoir 16 ans et plus"],
    min: 16
  },

  gender: String,

  occupation: String,

  country: {
    type: String,
    required: true
  }       
  
});

// Encryptage des mdp dans la base de donnée avec bcrypt

UserSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

// Se logger avec l'email et le mot de passe (comparer avec la db)

UserSchema.statics.login = async function(email, password) {
  const user = await this.findOne({email});
  if(user) {
    const auth = await bcrypt.compare(password, user.password);
    if(auth) {
      return user; 
    }
    throw Error("Mot de passe incorrect");
  }
  throw Error("Email incorrect");
};


const User = mongoose.model("users", UserSchema);

module.exports = User;