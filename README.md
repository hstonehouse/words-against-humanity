# Words Against Humanity

Words Against Humanity is a interactive word game, whereby players take turns in creating a story by inputting single words, one at a time. 

### How to play:

- Once you have created an account and logged in, you will be presented with a random existing story from the database
- Click START GAME to begin a new/join an existing game. The prompt on the right-hand side of the game - page indicates if it is your turn to enter a word
- Each player will enter one word at a time to formulate a story
- Try to make the most creative, ridiculous and silly story you can within 50 unique words
- You can end the game and save your story early by pressing the END GAME button if you have finished in under 50 words.
- Once the game is ended, your final story will be displayed on screen and saved to the 'stories' database. Your story will then also be visible (at random) on the START GAME/landing page


The website is hosted through [Heroku](https://devcenter.heroku.com/categories/reference) and the code repositry is available on [GitHub](https://github.com/)

### Play Words Against Humanity here:
[Play Now](https://words-against-humanity.herokuapp.com/)

### Technologies used:
This is a Single Page Application (SPA) developed in Node JS, using the following dependencies:

- [Express JS](https://expressjs.com/)
    `npm install express`
- [Bycrypt](https://www.npmjs.com/package/bcryptjs)
    `npm install bcryptjs`
- [pgSessions](https://www.npmjs.com/package/express-pg-session)
    `npm install express-pg-session`
- [Connect-PG-Simple](https://www.npmjs.com/package/connect-pg-simple)
    `npm install connect-pg-simple`
- [Axios](https://axios-http.com/docs/intro)
    `npm install axios`
- [Dotenv](https://www.npmjs.com/package/dotenv)
    `npm install dotenv`
- [Socket.IO](https://socket.io/)
    `npm install socket.io`
- [Jest](https://jestjs.io/)
    `npm install --save-dev jest`


### Understanding the Repo

This [Single Page App](https://developer.mozilla.org/en-US/docs/Glossary/SPA)" (SPA) was developed using a standard Node JS, Models, Views and Controllers (MVC) folder structure. More info on Express JS MVC Structures can be found [HERE](https://www.section.io/engineering-education/node-mvc-architecture/)

When using Express JS MVC structure, remember to `require` each dependancy on your main server.js file. You must also `module.exports` your 'models' and 'controllers' and then `require` these files on your server.js in order to utilise them.

The game databases were created using [PostgreSQL](https://www.postgresql.org/). These databases are then connected to Heroku using the following CLI commands:

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
[Helen S](https://github.com/hstonehouse)
[Michael V](https://github.com/michaeljgrant)
[Hayden O](https://github.com/hjofford)
