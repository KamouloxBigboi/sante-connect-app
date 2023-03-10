const {SignIn, SignUp} = require('../controllers/auth.controller.js');
const express = require('express');
const cors = require('cors');

const app = express.Router();

app.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: false,
  }));

app.get("/");
app.post("/");
app.get("/sign-in");
app.post("/sign-in", SignIn);
app.post("/sign-up", SignUp);

module.exports = app;