const express = require("express");

// To check if a room/game exists

const roomModel = require("../models/gameroom");

const room = express.Router();

room.get("/rooms", (req, res) => {
  // grabs all stories from database
  roomModel.retrieveGame().then((gameObj) => {
    console.log("Room!");
  });
});

room.post("/api/rooms")

module.exports = room;

