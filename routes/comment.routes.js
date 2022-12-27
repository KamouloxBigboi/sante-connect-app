import Comments from "../models/comment.model.js";
import express from 'express';

const router = express.Router();

// Creation des routes POST / GET / DELETE

// Show all

router.get("/", async (req, res) => {
    const comments = await Comments.findOne({});
        try {
            res.send(comments);
        } catch (error) {
            res.status(500).send(error);
        }
});
    
// Create one

router.post("/", async (req, res) => {    
    const comment = new Comments(req.body);
        try {
        await comment.save()
            .then((console.log("Commentaire enregistré")))
            .catch((console.log("Error")))
        res.send(comment);
        } catch (error) {
        res.status(500).send(error);
        }
});
    
// Show one

router.get("/:id", async (req, res) => {
    const comment = await Comments.findOne({ id: req.params.id });
        try {
            res.send(comment);
        } catch (error) {
            res.status(500).send(error);
        }
});

// Delete one

router.delete("/:id"), async (req, res) => {
    const comment = await Comments.findOneAndDelete({ id : req.params.id });
        try {
            res.send(comment);
        } catch(error) {
            res.status(500).send(error);
        }
};

export default router