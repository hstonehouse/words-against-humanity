const dotenv = require("dotenv").config();
const db = require("./database/db");
const expressSession = require("express-session");
const pgSession = require("connect-pg-simple")(expressSession);
const express = require("express");
const storiesController = require("./controllers/storycontroller");
const loginController = require("./controllers/logincontroller");
const app = express();
const port = 3000;
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
// start the web server
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
