const Comments = require("../models/comment.model.js");
const express = require('express');

const app = express();

// Creation des routes POST / GET / DELETE

// Show all

app.get("/", async (req, res) => {
    const comments = await Comments.findOne({});
        try {
            res.send(comments);
        } catch (error) {
            res.status(500).send(error);
        }
});
    
// Create one

app.post("/", async (req, res) => {    
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

app.get("/:id", async (req, res) => {
    const comment = await Comments.findOne({ id: req.params.id });
        try {
            res.send(comment);
        } catch (error) {
            res.status(500).send(error);
        }
});

// Delete one

app.delete("/:id"), async (req, res) => {
    const comment = await Comments.findOneAndDelete({ id : req.params.id });
        try {
            res.send(comment);
        } catch(error) {
            res.status(500).send(error);
        }
};

module.exports = app