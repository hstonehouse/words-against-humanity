const db = require("../database/db");

const Users = {
  getUser(username) {
    const sql = {
      text: `SELECT * FROM users WHERE username = $1`,
      values: [username],
    };
    return db.query(sql).then((dbResult) => dbResult.rows);
  },
};

module.exports = Users;
