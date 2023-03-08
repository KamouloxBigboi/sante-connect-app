const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const authRoutes = require("./routes/auth.routes.js");
const postsRoutes = require("./routes/post.routes.js");
const usersRoutes = require("./routes/user.routes.js");
const commentsRoutes = require("./routes/comment.routes.js")

const PORT = 5000

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All protected routes

app.use("/", authRoutes)
app.use("/posts", postsRoutes );
app.use("/users", usersRoutes);
app.use("/comments", commentsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port + ${PORT}`);
  const db = mongoose.connection;

  mongoose.set('strictQuery', true);
  mongoose.connect(
    `mongodb+srv://KamalGuidadou:eDAds7gRkZJzBzBl@cluster0.7o1fsht.mongodb.net/test`, 
  );

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully to Mongo");
  });
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);
