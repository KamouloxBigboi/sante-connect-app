const {SignIn, SignUp} = require('../controllers/authController.js');
const checkUser = require("../middleware/authMiddleware.js")
const express = require('express');
const cors = require('cors');

const authRouter = express.Router();

authRouter.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  }));

// chemins protégés par vérification jwt/cookie

authRouter.post("/dashboard", function(req, res) {
  checkUser
});

// chemins non-protégés

authRouter.post("/login", SignIn);
authRouter.post("/register", SignUp);

module.exports = authRouter ;