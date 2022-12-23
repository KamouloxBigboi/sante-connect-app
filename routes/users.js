import Users from "../models/users.js";
import express from 'express';

const router = express.Router();

// Création des routes GET (All & One) / POST (One)/ DELETE (One)

// show all

router.get("/user", async (res) => {
    const users = await Users.find({});
        try {
            res.send(users);
        } catch (error) {
            res.status(500).send(error);
        }
        });

// show one

router.get("/user/:id", async (req, res) => {
    const user = await Users.findOne({ id: req.params.id });
        try {
            res.get(user);
        } catch (error) {
            res.status(500).send(error);
        }
        });

// Create One

router.post("/user", async (req, res) => {    
    const user = new Users(req.body);
        try {
        await user.save();
        res.send(user);
        } catch (error) {
        response.status(500).send(error);
        }
    });

// Delete one 
router.delete("users/:id"), async (req, res) => {
    const user = await Users.findOneAndDelete({ id : req.params.id });
        try {
            res.delete(user);
        } catch(error) {
            res.status(500).send(error);
        }
};
export default router