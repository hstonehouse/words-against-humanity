const express = require("express");
const session = require("express-session");

const usersModel = require("../models/users");

const login = express.Router();

login.post("/login", (req, res) => {
  const { username, password } = req.body;
  usersModel.getUser(username).then((userObj) => {
    if (!userObj[0]) {
      res
        .status(400)
        .json({ message: `User does not exist` });
    } else if (userObj[0].password === password) {
      req.session.user = userObj[0].user_id;
      res.json({ message: `Successfully logged in as ${username}` });
    } else {
      res
        .status(400)
        .json({ message: `Password does not match username provided` });
    }
  });
});

login.get("/loggedin", (req, res) => {
  if (!req.session.user) {
    res.status(401).json({ message: "false" });
  } else {
    res.json({ username: `${req.session.user}` });
  }
});

login.delete("/logout", (req, res) => {
  req.session.destroy();
  res.json({ message: "You have logged out successfully" });
});

module.exports = login;
