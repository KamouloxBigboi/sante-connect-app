import Comments from "../models/comments.js";
import express from 'express';

const router = express.Router();

// Création des routes POST / GET / DELETE

// Show all

router.get("/comments", async (req, res) => {
    const comments = await Comments.findOne({});
        try {
            res.send(comments);
        } catch (error) {
            res.status(500).send(error);
        }
});
    
// Create one

router.post("/comments", async (req, res) => {    
    const comment = new Comments(req.body);
        try {
        await comment.save();
        res.send(comment);
        } catch (error) {
        res.status(500).send(error);
        }
});
    
// Show one

router.get("/comments/:id", async (req, res) => {
    const comment = await Comments.findOne({ id: req.params.id });
        try {
            res.send(comment);
        } catch (error) {
            res.status(500).send(error);
        }
});

// Delete one

router.delete("comments/:id"), async (req, res) => {
    const comment = await Comments.findOneAndDelete({ id : req.params.id });
        try {
            res.delete(Comments);
        } catch(error) {
            res.status(500).send(error);
        }
};

export default router