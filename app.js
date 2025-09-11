//pass= 2XINIMBJaAN6a05e

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/productRoutes");
const path = require("path");
const app = express();
const cors = require("cors");

//Middleware
// app.use("/",(req, res, next) => {
//     res.send("It is working");
// })

app.use(express.json());
app.use(cors());

// 👇 expose uploads folder for static file serving
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/products", router); //users-variable name

//Database Connection
mongoose
  .connect("mongodb+srv://admin:2XINIMBJaAN6a05e@cluster0.t2o1tnw.mongodb.net/")
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000); //port
  })
  .catch((err) => console.log(err));
