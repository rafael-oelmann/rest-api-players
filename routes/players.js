const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

//GET BACK ALL THE PLAYERS
router.get("/", async (req, res) => {
  try {
    const playerList = await Player.find();
    res.json(playerList);
  } catch (error) {
    res.json({ message: err });
  }
});

//SUBMIT A PLAYER
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

//SPECIFIC PLAYER
router.get("/:playerId", async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId);
    res.json(player);
  } catch (error) {
    res.json({ message: err });
  }
});

//DELETE PLAYER
router.delete("/:playerId", async (req, res) => {
  try {
    const removedPlayer = await Player.remove({ _id: req.params.playerId });
    res.json(removedPlayer);
  } catch (error) {
    res.json({ message: err });
  }
});

module.exports = router;
