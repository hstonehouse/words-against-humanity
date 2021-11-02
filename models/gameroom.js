const db = require("../database/db");

const Gameroom = {
  // When game starts - intial phrase is pushed into database with user_id who started game
  initialGame(content) {
    const sql = {
      text: `INSERT INTO rooms (words) VALUES ($1)`,
      values: [content],
    };
    return db.query(sql);
  },
  // Grab room id using the user_id who started the game
  retrieveGame() {
    const sql = {
      text: `SELECT * FROM rooms`,
    };
    return db.query(sql).then((dbResult) => dbResult.rows[0]);
  },
  // After each turn room id is used to update game room content to push to all users
  updateGame(content, room_id) {
    const sql = {
      text: `UPDATE rooms SET words = $1 WHERE room_id = $2`,
      values: [content, room_id],
    };
    return db.query(sql).then((dbResult) => dbResult.rows);
  },
  // After game state is ended - delete the game so if new game is started only one game matches user_id
  deleteGame(room_id) {
    const sql = {
      text: `DELETE FROM rooms WHERE room_id = $1`,
      values: [room_id],
    };
    return db.query(sql);
  },
};

module.exports = Gameroom;
