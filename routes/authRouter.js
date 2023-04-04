const {SignIn, SignUp, logOut} = require('../controllers/authController.js');
const express = require('express');
const cors = require('cors');

const authRouter = express.Router();

authRouter.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  }));

// chemins non-protégés

authRouter.post("/login", SignIn);
authRouter.post("/register", SignUp);
authRouter.get("/logout", logOut)

module.exports = authRouter ;