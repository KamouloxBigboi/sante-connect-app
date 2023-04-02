const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const { checkUser } = require("./middleware/authMiddleware.js")
const { SignIn, SignUp } = require("./controllers/authController.js");

const PORT = 5000

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running at port + ${PORT}`);
  const db = mongoose.connection;
  
  mongoose.set('strictQuery', true);
  mongoose.connect(
    `mongodb+srv://KamalGuidadou:eDAds7gRkZJzBzBl@cluster0.7o1fsht.mongodb.net/Sante_Connect?retryWrites=true&w=majority`, 
    );
    
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully to Mongo");
    });
  });
  
  app.use(cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  }));
  
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use("/dashboard", checkUser);
  app.use("/login", SignIn);
  app.use("/register", SignUp);
  