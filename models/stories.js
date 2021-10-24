const db = require("../database/db");

const Stories = {
  getAllStories() {
    const sql = `SELECT * FROM stories`;
    return db.query(sql).then((dbResult) => dbResult.rows);
  },
  addStory(content) {
    const sql = {
      text: `INSERT INTO stories (content) VALUES ($1)`,
      values: [content],
    };
    return db.query(sql);
  },
};

module.exports = Stories;
