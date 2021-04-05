const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

//Import Routes
const playersRoutes = require("./routes/players");

//Middlewares
app.use("/players", playersRoutes);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB!");
});

app.listen(3000);
