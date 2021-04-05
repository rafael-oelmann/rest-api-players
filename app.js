const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
//Middlewares

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB!");
});

app.listen(3000);
