const {SignIn, SignUp} = require('../controllers/auth.controller.js');
const express = require('express');
const cors = require('cors');

const authRoutes = express.Router();

authRoutes.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  }));

authRoutes.get("/");
authRoutes.post("/");
authRoutes.get("/sign-in");
authRoutes.post("/sign-in", SignIn);
authRoutes.post("/sign-up", SignUp);

module.exports = authRoutes;