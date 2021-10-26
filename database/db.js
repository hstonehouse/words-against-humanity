const pg = require("pg");

// Connected to Heroku DB using process.env.DATABASE_URL
const db = new pg.Pool({
  database: process.env.DATABASE_URL ?? "words-against-humanity",
});

module.exports = db;
