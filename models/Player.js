const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  gamesPlayed: {
    type: Number,
    required: true,
    default: 0,
  },
  wins: {
    type: Number,
    required: true,
    default: 0,
  },
  losses: {
    type: Number,
    required: true,
    default: 0,
  },
  draws: {
    type: Number,
    required: true,
    default: 0,
  },
  goals: {
    type: Number,
    required: true,
    default: 0,
  },
  assits: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Player", PlayerSchema);
