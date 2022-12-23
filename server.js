import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import postRoute from "./routes/posts.js"
import postsRoute from "./routes/posts.js"
import userRoute from "./routes/users.js"
import usersRoute from "./routes/users.js"
import commentRoute from "./routes/comments.js"
import commentsRoute from "./routes/comments.js"

const PORT = 5000

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All protected routes
app.use("/posts", postRoute );
app.use("/posts/:id", postsRoute);
app.use("/users", usersRoute);
app.use("/users/:id", userRoute) 
app.use("/comments", commentsRoute);
app.use("/comments/:id", commentRoute);

app.listen(PORT, () => {
  console.log(`Server is running at port + ${PORT}`);
  const db = mongoose.connection;

  mongoose.set('strictQuery', true);
  mongoose.connect(
    `mongodb+srv://KGuidadou:ddQ1kwJWSrcHVdaB@portfolio.osycsdj.mongodb.net/SanteConnect`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully to Mongo");
  });
});