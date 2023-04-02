import Users from "../models/userModel.js";
import express from 'express';

const userRouter = express.Router();

// Création des routes GET (All & One) / POST (One)/ DELETE (One)

// show all

userRouter.get("/", async (req, res) => {
    const users = await Users.find({});
        try {
            res.send(users);
        } catch (error) {
            res.status(500).send(error);
        }
        });

// show one

userRouter.get("/:id", async (req, res) => {
    const user = await Users.findOne({ id: req.params.id});
        try {
            res.send(user);
        } catch (error) {
            res.status(500).send(error);
        }
        });

// Create One

userRouter.post("/", async (req, res) => {    
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

userRouter.delete("/:id"), async (req, res) => {
    const user = await Users.findOneAndDelete({ id : req.params.id });
        try {
            res.send(user);
        } catch(error) {
            res.status(500).send(error);
        }
};

export default userRouter