const db = require("../database/db");

const Users = {
  getUser(username) {
    const sql = {
      text: `SELECT * FROM users WHERE username = $1`,
      values: [username],
    };
    return db.query(sql).then((dbResult) => dbResult.rows);
  },
  addUser(username, password) {
    const sql = {
      text: `INSERT INTO users (username, password) VALUES ($1, $2)`,
      values: [username, password],
    };
    return db.query(sql);
  },
};

module.exports = Users;
