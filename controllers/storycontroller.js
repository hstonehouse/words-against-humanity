const express = require("express");

const storiesModel = require("../models/stories");

const stories = express.Router();

stories.get("/randomstory", (req, res) => {
  // grabs all stories from database
  storiesModel.getAllStories().then((storyObj) => {
    //   selects random index from length of returned object
    const randStoryIndex = Math.floor(Math.random() * storyObj.length);
    // selects one story as an object
    const randStory = storyObj[randStoryIndex];
    // returns object {id: INT, content: STORY} as JSON
    res.json(randStory);
  });
});

module.exports = stories;
