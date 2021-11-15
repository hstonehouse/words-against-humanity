# Words Against Humanity

Words Against Humanity is an interactive word game, whereby players take turns creating a story by inputting one word at a time. 

### How to play:

- Once you have created an account and logged in, you will be presented with a random existing story from the database for your viewing pleasure
- Click START GAME to begin. If a game already exists, you will automatically join that game. The prompt on the right-hand side of the gamepage indicates if it is your turn to enter a word
- Each player will enter one word at a time to formulate a story
- Try to make the most creative, ridiculous and silly story you can within 50 unique words
- Once the story has reached 50 unique words, the game will automatically end
- Alternatively, you can end the game early by pressing the END GAME button if you have perfected your story before 50 unique words
- Once the game has ended, your final story will be displayed on screen and saved to the 'stories' database. Your story will then also be visible (at random) on the START GAME/landing page

This project is written in vanilla JS and deployed to [Heroku](https://devcenter.heroku.com/categories/reference).

### Play Words Against Humanity [here](https://words-against-humanity.herokuapp.com/).

### Technologies used:
This is a Single Page Application (SPA) developed in Node JS, using the following dependencies:

- [Express JS](https://expressjs.com/)
- [Bycrypt](https://www.npmjs.com/package/bcryptjs)
- [pgSessions](https://www.npmjs.com/package/express-pg-session)
- [Connect-PG-Simple](https://www.npmjs.com/package/connect-pg-simple)
- [Axios](https://axios-http.com/docs/intro)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Socket.IO](https://socket.io/)
- [Jest](https://jestjs.io/)

### Understanding the Repo

This [Single Page App](https://developer.mozilla.org/en-US/docs/Glossary/SPA)" (SPA) was developed using a standard Node JS, Models, Views and Controllers (MVC) folder structure. More info on Express JS MVC Structures can be found [HERE](https://www.section.io/engineering-education/node-mvc-architecture/)

When using Express JS MVC structure, remember to `require` each dependency on your main server.js file. You must also `module.exports` your 'models' and 'controllers' and then `require` these files on your server.js in order to utilise them.

The game databases were created using [PostgreSQL](https://www.postgresql.org/). You can find the SQL scripts inside [schema.sql](blob/main/database/schema.sql). 

These databases are then connected to Heroku using the following CLI commands:

- `heroku login`
- heroku addons:create heroku-postgresql:PLAN_NAME
EXAMPLE: `heroku addons:create heroku-postgresql:hobby-dev`
- `heroku pg:push example_db DATABASE_URL`
Check your Heroku app for added database


### Project Discovery + Planning:

- [Trello PM Board](https://trello.com/b/bCL5eeh9/planning-board)
- [Figma Layout](https://www.figma.com/file/twTdxgSvGdGqNxnHYpLH4h/Words-Against-Humanity?node-id=0%3A1)

### Future Enhancements:

[NLP 'Bad Words'](https://www.npmjs.com/package/bad-words)
    `npm install bad-words --save`
    A javascript filter for badwords and profanities.

### Words Against Humanity was created by:
- [Helen S](https://github.com/hstonehouse)
- [Michael V](https://github.com/michaeljgrant)
- [Hayden O](https://github.com/hjofford)
