const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const usersModel = require("../models/users");
const login = express.Router();

login.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await usersModel.getUser(username);

  if (!foundUser[0]) {
    res.status(400).json({ message: `User does not exist` });
    return
  }
  const isPasswordCorrect = await bcrypt.compare(
    password,
    foundUser[0].password
  );
  if (isPasswordCorrect) {
    req.session.user = foundUser[0].username;
    res.json({ message: `Successfully logged in as ${username}` });
  } else {
    res
      .status(400)
      .json({ message: `Password does not match username provided` });
  }
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
  res.clearCookie("connect.sid");
  res.status(200).json({ message: "You have logged out successfully" });
});

login.post("/register", async (req, res) => {
  const { username, password, confirmpassword } = req.body;
  if (password === confirmpassword) {
    // Salt is generated then hashed together with the password
    const salt = await bcrypt.genSalt(16);
    hashedPass = await bcrypt.hash(password, salt);
    // then the user and hashed pass are pushed to the DB and a 200 status is returned
    usersModel.addUser(username, hashedPass);
    res.status(200).json({ message: "User created" });
  } else {
    res.status(400).json({ message: "Passwords don't match" });
  }
});

module.exports = login;
