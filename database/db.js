const pg = require("pg");

// Connected to Heroku DB using process.env.DATABASE_URL
let db;
if (process.env.NODE_ENV === 'production') {
  db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  db = new pg.Pool({
    database: 'words-against-humanity',
  })
}
module.exports = db;
