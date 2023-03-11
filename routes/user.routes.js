const Users = require("../models/user.model.js");
const express = require('express');
const cors = require('cors');

const userRoutes = express.Router();

userRoutes.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
}));

// show all

userRoutes.get("/", async (req, res) => {
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

userRoutes.get("/:id", async (req, res) => {
    const user = await Users.findOne({_id: req.params.id});
    try {
        res.send(user);
        console.log(res);
    } catch (err) {
        res.status(500).send(err);
        console.log(err)
    }
});

// Create One

userRoutes.post("/", async (req, res) => {
    const user = new Users(req.body);
    try {
        await user.save()
            .then(() => console.log("Utilisateur enregistré"))
            .catch(() => console.log("Erreur : l'utilisateur n'a pas pu être enregistré"))
            res.status(200).json({
            message: "Utilisateur enregistré"
        });
        } catch (err) {
            res.status(500).send(err);
            console.log("Erreur : l'utilisateur n'a pas pu être enregistré")
        }
    });

// Delete one

userRoutes.delete("/:id"), async (req, res) => {
    const user = await Users.findOneAndDelete({_id : req.params.id });
        try {
            res.status(201).json({
                message: "Utilisateur supprimé de la base de donnée"
            })
        } catch(error) {
            res.status(400).json({
                message: "L'utilisateur n'a pas pu être enregistré"
            });
        }
};

module.exports = userRoutes;