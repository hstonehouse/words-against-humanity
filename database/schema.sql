createdb words-against-humanity
-- changed DB to the above as that is what I set on heroku. 
-- If we need to change it back, 
-- I'll drop the current DB on Heroku and re-add.

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT
);

CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    user_id INTEGER,
    words TEXT
);

CREATE TABLE stories (
    story_id SERIAL PRIMARY KEY,
    content TEXT
);

CREATE TABLE phrases (
    phrase_id SERIAL PRIMARY KEY,
    content TEXT
);

-- CREATE TABLE game_state (
--     id SERIAL PRIMARY KEY,
--     status BOOL
-- );

-- Test user and room
INSERT INTO users (username, password) VALUES ('Test', 'test'); -- update password later with bcrypt
INSERT INTO rooms (user_id, words) VALUES (1, 'A potato walked into a bar... ');

-- Phrases/Story Starters to enter into database
INSERT INTO phrases (content) VALUES ('Once upon a time... ');
INSERT INTO phrases (content) VALUES ('In a galaxy far, far away, there lived a... ');
INSERT INTO phrases (content) VALUES ('We had just begun our journey to... ');
INSERT INTO phrases (content) VALUES ('We were in shock! We did not mean to... ');
INSERT INTO phrases (content) VALUES ('I approached the door with caution because I knew... ');
INSERT INTO phrases (content) VALUES ('It was a stunning spring afternoon as... ');
INSERT INTO phrases (content) VALUES ('As I opened my eyes, I saw... ');
INSERT INTO phrases (content) VALUES ('It was my time to shine! The crowd went silent as... ');
INSERT INTO phrases (content) VALUES ('We had been travelling for days and we were beginning to... ');
INSERT INTO phrases (content) VALUES ('It was at that moment, they realised they... ');
INSERT INTO phrases (content) VALUES ('60 seconds left. The silence was deafening, only amplifying the suspense as... ');
INSERT INTO phrases (content) VALUES ('The parcel had finally arrived! ... ');
INSERT INTO phrases (content) VALUES ('The year is 2050... ');
INSERT INTO phrases (content) VALUES ('Have you ever wondered what it would be like to... ');
INSERT INTO phrases (content) VALUES ('I looked at my reflection in the mirror and... ');
INSERT INTO phrases (content) VALUES ('Tonight was the night. Date number 3! I was filled with excitment as I... ');
INSERT INTO phrases (content) VALUES ('A soft summer breeze brushed through my hair as we... ');
INSERT INTO phrases (content) VALUES ('Their instructions were clear. On the note, a time, location and the task which read... ');
INSERT INTO phrases (content) VALUES ('Finally, after months in lockdown, we were free! The first thing I want to do is... ');
INSERT INTO phrases (content) VALUES ('Vaxxed, waxed and ready to relax! It was finally time to... ');
INSERT INTO phrases (content) VALUES ('Time slowed. Everything else fell out of focus. We locked eyes and... ');
INSERT INTO phrases (content) VALUES ('They eagerly unwrapped the present to find... ');
INSERT INTO phrases (content) VALUES ('My heart skipped a beat as the doorbell rang. They were here! I take a breath and reach for the door to find... ');
INSERT INTO phrases (content) VALUES ('The plan was set. Our mission is to... ');
INSERT INTO phrases (content) VALUES ('Luck was on our side. We had finally... ');
INSERT INTO phrases (content) VALUES ('No one saw it coming. We all just stood and watched as... ');
INSERT INTO phrases (content) VALUES ('I decided to consult Dr Google. I entered my symptoms and the first article diagnosed me with... ');
INSERT INTO phrases (content) VALUES ('Apparently I got a little carried away while trying to... ');
INSERT INTO phrases (content) VALUES ('It is the morning after the night before and I found myself... ');
INSERT INTO phrases (content) VALUES ('I took a deep breath as I... ');
INSERT INTO phrases (content) VALUES ('Do you want to build a... ');


INSERT INTO stories (content) VALUES ('I took a deep breath as I stumbled up the steps to the gym. I didn''t feel hung over which meant I was still drunk. I knew I was late. The rest of the team had already arrived and were getting ready for the morning workout, stretching and telling stories about the night before. I kept the hood of my sweatshirt up trying to go as long as I could without showing my face. “What happened to you?” the team caption asked. Someone pulled the hood off my head revealing two black eyes and a huge scratch on my right cheek. “Where does that scratch lead?” someone asked, pointing to a scratch that started at the base of my neck and disappeared under my sweatshirt. My cheeks flushed a fiery red. I pulled off my shirt and threw it to the floor. “Do you remember the guy from the bar last night? Well things were going really good… Then the handcuffs came out, and he left the room to get us both some water, when suddenly, his cat decided to go all Claw and Order on me! It was a cat-astrophe”');
INSERT INTO stories (content) VALUES ('Do you wanna build a snowman? C''mon, let''s go and play. I never see you anymore. Come out the door. It''s like you''ve gone away! We used to be best buddies and now we''re not. I wish you would tell me why! Do you wanna build a snowman? It doesn''t have to be a snowman. Go away, Anna! Okay, bye. Do you wanna build a snowman? Or ride our bikes around the halls? I think some company is overdue. I''ve started talking to the pictures on the walls. Hang in there, Joan! It gets a little lonely, all these empty rooms. Just watching the hours tick by. Elsa? Please, I know you''re in there, people are asking where you''ve been! They say, "Have courage", and I''m trying to. I''m right out here for you, just let me in! We only have each other, it''s just you and me. What are we gonna do? Do you wanna build a snowman?')