const express = require("express");
const session = require("express-session");

const usersModel = require("../models/users");

const login = express.Router();

login.post("/", (req, res) => {
  const { username, password } = req.body;
  usersModel.getAllStories(username).then((userObj) => {
    if (userObj[0].password === password) {
      req.session.user = userObj[0].id;
      res.json({ message: `Successfully logged in as ${username}` });
    } else {
      res
        .status(400)
        .json({ message: `Password does not match username provided` });
    }
  });
});

login.get("/", (req, res) => {
  if (!req.session.user) {
    res.status(403).json({ message: "Not logged in" });
  } else {
    res.json({ username: req.session.user });
  }
});

login.delete("/", (req, res) => {
  req.session.destroy();
  res.json({ message: "You have logged out successfully" });
});

module.exports = login;
