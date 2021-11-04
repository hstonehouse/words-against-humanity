const dotenv = require("dotenv").config();
const db = require("./database/db");
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);
const express = require("express");
const socketIO = require("socket.io");
const storiesController = require("./controllers/storycontroller");
const loginController = require("./controllers/logincontroller");
const roomController = require("./controllers/roomcontroller");
const phraseController = require("./controllers/phrasescontroller");
const phrases = require("./models/phrases");
const rooms = require("./models/gameroom");
const stories = require("./models/stories");
const port = process.env.PORT || 3000;
const app = express();
const server = app.listen(port, () =>
  console.log(`Listening on http://localhost:${port}`)
);

const io = socketIO(server);
let players = [];

// What happens when someone connects and disconnects to your app (via socket)
io.on("connection", (socket) => {

  console.log("Client connected");  

  // Server listens to event from client called "addWord"
  socket.on("addWord", (newWord) => {
    // Retrieve the game from db and then update it
    rooms.retrieveGame().then((response) => {
      const storyLength = new Set(response.words.split(" "));
      if (storyLength.size >= 50) {
        //end the game for all players
        stories.addStory(response.words);
        io.emit("gameHasEnded", response.words);
        rooms.deleteGame(response.room_id);
      } else {
        const entireStory = `${response.words} ${newWord} `;
        rooms.updateGame(entireStory, response.room_id);
        socket.broadcast.emit("gameContent", entireStory);
        // Choose the next player (this will be their socket id)
        const currentPlayerIndex = players.indexOf(socket.id);
        // If the current player is the last player in the array, then go back to the beginning
        if (currentPlayerIndex + 1 === players.length){
          const nextPlayer = players[0];
          io.to(nextPlayer).emit("itsYourTurn");
        } else {
          const nextPlayer = players[currentPlayerIndex + 1];
          io.to(nextPlayer).emit("itsYourTurn");
        }
      }
    });
  });

  // When the user disconnects, take them out of the players array so they don't get picked to take a turn
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    players = players.filter((player) => player !== socket.id);
    console.log(players);
  });

  // Server listens to event from client called "newGame"
  socket.on("newGame", () => {
    // When user presses Start Game, put their socket id into the players array
    const id = socket.id
    players.push(id)
    console.log("Player has joined game", players);

    rooms.retrieveGame().then((response) => {
      if (response == undefined) {
        phrases.getPhrase().then((phraseObj) => {
          const randPhraseIndex = Math.floor(Math.random() * phraseObj.length);
          const randPhrase = phraseObj[randPhraseIndex];
          rooms.initialGame(randPhrase.content);
          console.log("Random phrase:" + randPhrase.content);
          // Server sends event called "gameContent" back to client
          socket.emit("gameContent", randPhrase.content);
          // If you're the only one in the game, you have to wait for other players
          if (players.length === 1){
            socket.emit("waitForOtherPlayers");
          } else {
            socket.emit("itsYourTurn");
          }
        });
      } else {
        // Server sends event called "gameContent" back to client
        socket.emit("gameContent", response.words);
        if (players.length === 1) {
          socket.emit("waitForOtherPlayers");
        } else if (players.length === 2){
          const nextPlayer = players[0];
          io.to(nextPlayer).emit("itsYourTurn");
        } else {
          socket.emit("notYourTurn");
        }        
      }
    });
  });

  // Server listens to event from client called "endGame"
  socket.on("endGame", () => {
    rooms.retrieveGame().then((response) => {
      // Add story to database
      stories.addStory(response.words);
      // Server sends an event "gameHasEnded" back to the client, along with the story
      // This will send out the event to everybody who is connected to the game
      io.emit("gameHasEnded", response.words);
      //Delete the gameroom
      rooms.deleteGame(response.room_id);
    });
  });
});

app.use(
  expressSession({
    store: new pgSession({
      pool: db,
      createTableIfMissing: true,
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  })
);

app.use(express.static("client"));
app.use(express.json());
app.use("/api/sessions", loginController);
app.use("/api/stories", storiesController);
app.use("/api/rooms", roomController);
app.use("/api/phrase", phraseController);
