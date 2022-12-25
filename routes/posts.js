import Posts from "../models/posts.js";
import express from 'express';

const router = express.Router();

// Création des routes GET (All & One) / POST (One)/ DELETE (One)

// Show all

router.get("/", async (req, res) => {
  const posts = await Posts.find({});
    try {
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Show one

router.get("/:id", async (req, res) => {
  const post = await Posts.findOne({ id: req.params.id });
    try {
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Create one 

router.post("/", async (req, res) => {    
  const post = new Posts(req.body);
    try {
      await post.save();
      res.send(post);
    } catch (error) {
      res.status(500).send(error);
    }
});

// Delete one

router.delete("/:id"), async (req, res) => {
  const post = await Posts.findOneAndDelete({ id : req.params.id });
      try {
          res.delete(post);
      } catch(error) {
          res.status(500).send(error);
      }
};


export default router