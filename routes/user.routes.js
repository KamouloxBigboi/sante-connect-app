const Users = require("../models/user.model.js");
const express = require('express');

const app = express.Router();

// Création des routes GET (All & One) / POST (One)/ DELETE (One)

// show all

app.get("/", async (req, res) => {
    const users = await Users.find({});
        try {
            res.send(users);
        } catch (error) {
            res.status(500).send(error);
        }
        });

// show one

app.get("/:id", async (req, res) => {
    const user = await Users.findOne({ id: req.params.id});
        try {
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    });

// Create One

app.post("/", async (req, res) => {    
    const user = new Users(req.body);
        try {
        await user.save()
            .then(() => console.log("Utilisateur enregistré"))
            .catch(() => console.log("Error"))
        res.send(user);
        } catch (error) {
        response.status(500).send(error);
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

module.exports = app;