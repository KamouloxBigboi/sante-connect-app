const mongoose = require('mongoose');

const UserSignInSchema = new mongoose.Schema({

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Vous devez indiquer une adresse email"],
},

  password: {
    type: String,
    required: [true, "Vous devez indiquer un mot de passe"]
  },
});
 

 UserSignInSchema.statics.login = async function(email, password) {
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

module.exports = mongoose.model("UsersSignIn", UserSignInSchema);
