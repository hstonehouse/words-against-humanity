const pg = require("pg");

const db = new pg.Pool({
    database: "words-against-humanity"
});

module.exports = db;