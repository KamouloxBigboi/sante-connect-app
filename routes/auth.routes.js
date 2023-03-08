const {SignIn, SignUp} = require("../controllers/auth.controller.js");
const express = require('express');

const app = express.Router();

app.post("/")
app.post("/sign-in", SignIn);
app.post("/sign-up", SignUp);

module.exports = app;