createdb game

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT
);

CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    words TEXT
);

CREATE TABLE stories (
    story_id SERIAL PRIMARY KEY,
    content TEXT
);

CREATE TABLE phrases (
    phrase_id SERIAL PRIMARY KEY,
    content TEXT
)

INSERT INTO users (username, password) VALUES ('Test', 'test'); -- update password later with bcrypt
INSERT INTO rooms (words) VALUES ('a potato walked into a bar ');
INSERT INTO stories (content) VALUES ('blah ');
INSERT INTO phrases (content) VALUES ('Once upon a time ');
