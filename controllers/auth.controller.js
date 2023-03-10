const Posts = require("../models/post.model");
const Users = require("../models/user.model.js");
const express = require('express');
const jwt = require('jsonwebtoken')
const cors = require('cors');

app = express();
app.use(cors());

const maxAge = 3*24*60*60;

const createToken =  (id) => {
    return jwt.sign({id}, "kenshin le vagabond", {
        expiresIn: maxAge,
    });
}

module.exports.SignIn = async (req, res) => {
    try{
        const {id,
               type: { enum: [post,
                              comment]},
               post_uid,
               content,
               author_id,
               timestamp,
               vote_count,
               comment_count,
               parent_id,
               votes: [{vote_id,
                        voted_user_id,}]
                } = req.body;

        const newPost = await Posts.create({id,
                                         type: { enum: [post,
                                                    comment]},
                                         post_uid,
                                         content,
                                         author_id,
                                         timestamp,
                                         vote_count,
                                         comment_count,
                                         parent_id,
                                         votes: [{vote_id,
                                                 voted_user_id,}]
                                        })

        const token = createToken(newPost._id, created = true)

        res.cookie("jwt", token,{
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge*1000,
        })

        res.status(201).json({post:newPost._id, created: true });
               
        } catch (err) {
        console.log(err);
    }
};

module.exports.SignUp = async (req, res) => {
    try{
        const  { firstname, 
                 lastname, 
                 email,
                 age, 
                 password, 
                 gender, 
                 occupation, 
                 country} = req.body;

        const newUser = await Users.create({firstname, 
                                         lastname, 
                                         email,
                                         age, 
                                         password, 
                                         gender, 
                                         occupation, 
                                         country});

        const token = createToken(newUser._id);

        res.cookie("jwt", token,{
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge*1000,
        })

        res.status(201).json({user:newUser._id, created: true });

    } catch (err) {
        console.log(err);
    }
};  

