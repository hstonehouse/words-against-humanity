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
const port = process.env.PORT || 3000;
const app = express();
const server = app.listen(port, () =>
  console.log(`Listening on http://localhost:${port}`)
);

const io = socketIO(server);

// What happens when someone connects and disconnects to your app (via socket)
io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("broadcast", (test) => {
    // contact room db and update current story
    socket.broadcast.emit("wordInput", test);
  });
  socket.on("disconnect", () => console.log("Client disconnected"));
  socket.on("newGameConnect", (test) => {
    rooms.retrieveGame().then((response) => {
      if (response[0] == undefined) {
        phrases.getPhrase().then((phraseObj) => {
          const randPhraseIndex = Math.floor(Math.random() * phraseObj.length);
          const randPhrase = phraseObj[randPhraseIndex];
          rooms.initialGame(randPhrase.content);
          console.log("Random phrase:" + randPhrase.content);
          socket.emit("newGameConnect", randPhrase.content);
        });
      } else {
        socket.emit("newGameConnect", response[0].words);
      }
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
