const UsersSignUp = require("../models/user-sign-up-model");
const UsersSignIn = require("../models/user-sign-in-model");
const express = require('express');
const jwt = require('jsonwebtoken')
const cors = require('cors');

app = express();
app.use(cors());

const maxAge = 3*24*60*60;

// Création de jeton unique par utilisateur enregistré 

const createToken =  (id) => {
    return jwt.sign({id}, "kenshin le vagabond", {
        expiresIn: maxAge,
    });
}

// Fonction de gestion de l'erreur "email déjà existant"

const handleErrors = (err) => {
    let errors = { email: "", password:"" };

    if (err.message ==="Mot de passe incorrecte, réessayez")
    errors.email = "Cet mot de passe est incorrecte";

    if (err.message ==="Nous n'avons trouvé aucun compte avec cet email")
    errors.email = "Cet email n'est pas enregistré";

    if (err===11000) {
        errors.email = "Cet adresse email existe déjà !";
        return errors;
    };

    if (err.message.includes("Users validation failed")) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors; 
};



module.exports.SignUp = async (req, res) => {
    try{
        const  { firstname, 
                 lastname, 
                 email,
                 age, 
                 password, 
                 gender, 
                 occupation, 
                 country} = req.body;

        const newUser = await UsersSignUp.create({firstname, 
                                                  lastname, 
                                                  email,
                                                  age, 
                                                  password, 
                                                  gender, 
                                                  occupation, 
                                                  country});
        const token = createToken(newUser._id);
        res.cookie("jwt", token,{
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge*1000,
        })
        res.status(201).json({user:newUser._id, created: true });
    } catch (err) {
        console.log(err);
        const errors = handleErrors(err);
        res.json({errors, created: false});
        };
    };  
    
    module.exports.SignIn = async (req, res) => {
        try{
            const  { email, password } = req.body;
            const user = await UsersSignIn.login({ email, password });
            const token = createToken(user._id);
            res.cookie("jwt", token,{
                withCredentials: true,
                httpOnly: false,
                maxAge: maxAge*1000,
            })
            res.status(200).json({user:user._id, created: true });
            } catch (err) {
            console.log(err);
            const errors = handleErrors(err);
            res.json({errors, created: false});
            }
        };  
