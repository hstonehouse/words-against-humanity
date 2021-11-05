<h1>Words Against Humanity</h1>

Words Against Humanity is a interactive word game, whereby players take turns in creating a story by inputting single words, one at a time. 

<h3>How to play:</h3>

    - Once you have created an account and logged in, you will be presented with a random existing story from the database
    - Click START GAME to begin a new/join an existing game. The prompt on the right-hand side of the game - page indicates if it is your turn to enter a word
    - Enter a word - no spaces or special characters (except for punctuation)
    - Each player will enter one word at a time to formulate a story
    - Try to make the most creative, ridiculous and silly story you can within 200 words
    - You can end the game and save your story early by pressing the END GAME buttonif you have finished in under 200 words
    - Once the game is ended, your final story will be displayed on screen and saved to the 'stories' database. Your story will then also be visible (at random) on the START GAME/landing page</li>


The website is hosted through <a href="https://devcenter.heroku.com/categories/reference">Heroku</a> and the code repositry is available on <a href="https://github.com/">GitHub</a>.

<h3>Play Words Against Humanity here:</h3>
<a href="https://words-against-humanity.herokuapp.com/">Play Now!</a>

<h3>Technologies used:</h3>
This is a Single Page Application (SPA) developed in Node JS, using the following dependencies:

 href="https://expressjs.com/">Express JS</a>
    `npm install express`</li>
    - <a href="https://www.npmjs.com/package/bcryptjs">Bycrypt</a>
    `npm install bcryptjs`</li>
    - <a href="https://www.npmjs.com/package/express-pg-session">pgSessions</a>
    `npm install express-pg-session`
    - <a href="https://www.npmjs.com/package/connect-pg-simple">Connect-PG-Simple</a>
    `npm install connect-pg-simple`
    - <a href="https://axios-http.com/docs/intro">Axios</a>
    `npm install axios`
    - <a href="https://www.npmjs.com/package/dotenv">Dotenv</a>
    `npm install dotenv`
    - <a href="https://socket.io/">Socket.IO</a></li>
    `npm install socket.io`
    - <a href="https://jestjs.io/">Jest</a>
    `npm install --save-dev jest`


<h3>Understanding the Repo</h3>

This <a href="https://developer.mozilla.org/en-US/docs/Glossary/SPA">Single Page App</a> (SPA) was developed using a standard Node JS, Models, Views and Controllers (MVC) folder structure. More info on Express JS MVC Structures can be found <a href="https://www.section.io/engineering-education/node-mvc-architecture/">HERE</a>

When using Express JS MVC structure, remember to `require` each dependancy on your main server.js file. You must also `module.exports` your 'models' and 'controllers' and then `require` these files on your server.js in order to utilise them.

The game databases were created using <a href="https://www.postgresql.org/">PostgreSQL</a>. These databases are then connected to Heroku using the following CLI commands:

    - `heroku login`
    - heroku addons:create heroku-postgresql:<PLAN_NAME>
    EXAMPLE: `heroku addons:create heroku-postgresql:hobby-dev`
    - `heroku pg:push example_db DATABASE_URL`
    Check your Heroku app for added database


<h3>Project Discovery + Planning:</h3>

    - Trello PM Board: https://trello.com/b/bCL5eeh9/planning-board
    - Figma Layout: https://www.figma.com/file/twTdxgSvGdGqNxnHYpLH4h/Words-Against-Humanity?node-id=0%3A1

<h3>Future Enhancements:</h3>

    <a href="https://www.npmjs.com/package/bad-words">NLP 'Bad-Words'</a>
    `npm install bad-words --save`
    A javascript filter for badwords and profanities.


<h3>Words Against Humanity was created by:</h3>
<a href="https://github.com/hstonehouse">Helen S</a>
<a href="https://github.com/michaeljgrant">Michael V</a>
<a href="https://github.com/hjofford">Hayden O</a>
