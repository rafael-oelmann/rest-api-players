const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

router.get("/", (req, res) => {
  res.send("We are on players");
});

router.post("/", async (req, res) => {
  const player = new Player({
    name: req.body.name,
    gamesPlayed: req.body.gamesPlayed,
    wins: req.body.wins,
    losses: req.body.losses,
    draws: req.body.draws,
    goals: req.body.goals,
    assits: req.body.assits,
  });
  try {
    const savedPlayer = await player.save();
    res.json(savedPlayer);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
