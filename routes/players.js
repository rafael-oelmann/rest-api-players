const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

router.get("/", (req, res) => {
  res.send("We are on players");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
