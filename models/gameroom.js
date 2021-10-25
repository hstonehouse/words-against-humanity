const db = require("../database/db");

const Gameroom = {
  // When game starts - intial phrase is pushed into database with user_id who started game
  initialGame(user_id, content) {
    const sql = {
      text: `INSERT INTO rooms (user_id, words) VALUES ($1, $2)`,
      values: [user_id, content],
    };
    return db.query(sql);
  },
  // Grab room id using the user_id who started the game
  retrieveUserGame(user_id) {
    const sql = {
      text: `SELECT * FROM rooms WHERE user_id = $1`,
      values: [user_id],
    };
    return db.query(sql).then((dbResult) => dbResult.rows);
  },
  // After each turn room id is used to update game room content to push to all users
  updateGame(room_id, content) {
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
