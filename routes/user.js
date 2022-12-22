
import User from "../models/user.js";
import express from 'express';

const router = express.Router();

// Création des routes GET (All & One) / POST (One)

// show all

router.get("/", async (request, response) => {
    const users = await User.find({});
        try {
            response.send(users);
        } catch (error) {
            response.status(500).send(error);
        }
        });

// show one

router.get("/:id", async (request, response) => {
    const user = await User.findOne({ id: req.params.id });
        try {
            response.send(user);
        } catch (error) {
            response.status(500).send(error);
        }
        });

// Create One

router.post("/", async (request, response) => {    
    const user = new User(request.body);
        try {
        await user.save();
        response.send(user);
        } catch (error) {
        response.status(500).send(error);
        }
    });


export default router