const db = require("../database/db");

const Phrases = {
  getPhrase() {
    const sql = {
      text: `SELECT * FROM phrases`,
    };
    return db.query(sql).then((dbResult) => dbResult.rows);
  },
};

module.exports = Phrases;
