const express = require("express");
const session = require("express-session");

const phrasesModel = require("../models/phrases");

const phrases = express.Router();

phrases.get("/randomphrase", (req, res) => {
    phrasesModel.getPhrase().then((phraseObj) => {
         //   selects random index from length of returned object
    const randPhraseIndex = Math.floor(Math.random() * phraseObj.length);
    // selects one story as an object
    const randPhrase = phraseObj[randPhraseIndex];
    // returns object {id: INT, content: STORY} as JSON
        res.json(randPhrase);
    })
})

module.exports = phrases;