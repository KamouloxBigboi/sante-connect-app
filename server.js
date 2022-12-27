import express from "express";
import mongoose from "mongoose";
import cors from "cors"
// import authRoute from "./routes/auth.routes.js"
import postsRoute from "./routes/post.routes.js"
import usersRoute from "./routes/user.routes.js"
import commentsRoute from "./routes/comment.routes.js"

const PORT = 5000

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All protected routes
// app.use("/", authRoute)
app.use("/posts", postsRoute );
app.use("/users", usersRoute);
app.use("/comments", commentsRoute);

app.listen(PORT, () => {
  console.log(`Server is running at port + ${PORT}`);
  const db = mongoose.connection;

  mongoose.set('strictQuery', true);
  mongoose.connect(
    `mongodb+srv://KGuidadou:ddQ1kwJWSrcHVdaB@portfolio.osycsdj.mongodb.net/SanteConnect`, 
  );

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully to Mongo");
  });
});