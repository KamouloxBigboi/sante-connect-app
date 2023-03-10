const Users = require("../models/user.model.js");
const express = require('express');
const cors = require('cors');

const app = express.Router();

app.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: false,
  }));

// show all

app.get("/", async (req, res) => {
    const users = await Users.find({});
        try {
            res.send(users);
            console.log(res);
        } catch (err) {
            res.status(500).send(err);
            console.log(err);
        }
        });

// show one

app.get("/:id", async (req, res) => {
    const user = await Users.findOne({ id: req.params.id});
        try {
            res.send(user);
            console.log(res);
        } catch (err) {
            res.status(500).send(err);
            console.log(err)
        }
    });

// Create One

app.post("/", async (req, res) => {    
    const user = new Users(req.body);
        try {
        await user.save()
            .then(() => console.log("Utilisateur enregistré"))
            .catch(() => console.log("Erreur : l'utilisateur n'a pas pu être enregistré"))
        res.send(user);
        } catch (err) {
        response.status(500).send(err);
        console.log(err)
        }
    });

// Delete one

app.delete("/:id"), async (req, res) => {
    const user = await Users.findOneAndDelete({ id : req.params.id });
        try {
            res.send(user);
        } catch(error) {
            res.status(500).send(error);
        }
};

module.exports = app;