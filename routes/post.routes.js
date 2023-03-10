const Posts = require('../models/post.model.js');
const express = require('express');
const cors = require('cors');

const app = express.Router();

app.use(cors({
  origin: ['http://localhost:3000'],
  method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  credentials: false,
}));

app.use(cors());

// Création des routes GET (All & One) / POST (One)/ DELETE (One)

// Show all

app.get("/", async (req, res) => {
  const posts = await Posts.find({});
    try {
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Show one

app.get("/:id", async (req, res) => {
  const post = await Posts.findOne({ id: req.params.id });
    try {
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Create one 

app.post("/", async (req, res) => {    
  const post = new Posts(req.body);
    try {
      await post.save()
        .then(() => console.log ("Article enregistré dans la base de donnée"))
        .catch(() => console.log("Error"))
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Delete one

app.delete("/:id"), async (req, res) => {
  const post = await Posts.findOneAndDelete({ id : req.params.id });
      try {
          res.send(post);
      } catch(error) {
          res.status(500).send(error);
      }
};


module.exports = app