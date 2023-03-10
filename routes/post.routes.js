const Posts = require('../models/post.model.js');
const express = require('express');
const cors = require('cors');

const postRoutes = express.Router();

postRoutes.use(cors({
  origin: ['http://localhost:3000'],
  method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  credentials: true,
}));

postRoutes.use(cors());

// Création des routes GET (All & One) / POST (One)/ DELETE (One)

// Show all

postRoutes.get("/", async (req, res) => {
  const posts = await Posts.find({});
    try {
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Show one

postRoutes.get("/:id", async (req, res) => {
  const post = await Posts.findOne({_id: req.params.id });
    try {
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Create one 

postRoutes.post("/", async (req, res) => {    
  const post = new Posts(req.body);
    try {
      await post.save()
        .then(() => console.log ("L'article a été publié avec succès"))
        .catch(() => console.log("L'article n'a pas pu être publié"))
      res.send(post);
    } catch (error) {
      res.status(400).json({
        message : "L'article n'a pas pu être publié"
      })
    }
});

// Delete one

postRoutes.delete("/:id"), async (req, res) => {
  const post = await Posts.findOneAndDelete({_id : req.params.id });
      try {
          res.status(200).json({
            message : "Article supprimé avec succès"
          });
      } catch(error) {
          res.status(400).json({
            message : "Erreur : l'article n'a pas pu être supprimé"
          });
      }
};


module.exports = postRoutes