const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Fonction qui vérifie si l'utilisateur est toujours connecté

module.exports.checkUser = (req, res, next) => {
    const token = req.cookie.jwt;
    if(token) {
        jwt.verify(token, 
            "kenshin le vagabond", 
            async (err, decodedToken) => {
            if(err) {
                res.json({status: false});
                next();
            } else {
                const user =   await User.findById(decodedToken.id);
                if (user) res.json({ status: true, user: user.email });
                else res.json({ status: false });
                next();
            }
        })
    } else {
        res.json({status: false});
        next();
    }
}