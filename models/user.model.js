const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Fonction qui interdit d'entrer un email non valide

let validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const UserSchema = new mongoose.Schema({

  id: { 
    type: String,
    required: false,
  },

  firstname: {
    type: String,
    required: [true, "Vous devez indiquer votre (vos) prénom(s)"],
  },

  lastname: {
    type: String,
    required: [true, "Vous devez indiquer votre nom de famille"]
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Vous devez indiquer une adresse email"],
    validate: [validateEmail, " Merci d'inscrire un email valide "],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, " Merci d'inscrire un email valide "]
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
    required: [true, "Veuillez indiquer votre pays"],
  },  
});

// Encryptage du mot de passe de l'utilisateur enregistré dans la base de donnée

UserSchema.pre("save", async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

UserSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if(user) {
    const auth = await bcrypt.compare(password, user.password);
    if(auth) {
      return user; 
    }
    throw Error("Mot de passe incorrecte, réessayez")
  }
  throw Error("Nous n'avons trouvé aucun compte avec cet email")
}

module.exports = mongoose.model("Users", UserSchema);
