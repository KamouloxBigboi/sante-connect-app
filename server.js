import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import postRoute from "../sante-connect-app/routes/post.js"
import userRoute from "../sante-connect-app/routes/user.js"

const PORT = 5000

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/post/:id", postRoute); // Protected
app.use("/user", userRoute); // Protected

app.listen(PORT, () => {
  console.log(`Server is running at port + ${PORT}`);
  const db = mongoose.connection;

  mongoose.set('strictQuery', true);
  mongoose.connect(
    `mongodb+srv://KGuidadou:ddQ1kwJWSrcHVdaB@portfolio.osycsdj.mongodb.net/test`, 
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