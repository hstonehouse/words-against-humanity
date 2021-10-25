const db = require("../database/db");

const Phrases = {
  getPhrase(id) {
    const sql = {
      text: `SELECT * FROM phrases WHERE phrase_id = $1`,
      values: [id],
    };
    return db.query(sql).then((dbResult) => dbResult.rows);
  },
};

module.exports = Phrases;
