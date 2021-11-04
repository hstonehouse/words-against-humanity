const socket = io();

// When the page is refreshed, disconnect the socket
window.addEventListener("beforeunload", function(e){
  socket.disconnect()
}, false);

// Client listens to event from server called "gameContent"
socket.on("gameContent", function (data) {
  console.log(data);
  const story = document.getElementById("story");
  story.innerText = data;
});

// Client listens to event from server called "itsYourTurn"
socket.on("itsYourTurn", function (data) {
  const inputField = document.getElementById("next-word");
  inputField.removeAttribute("disabled");
  const whoseTurn = document.getElementById("whoseturn");
  whoseTurn.innerText = " ";
  whoseTurn.innerText = "It's your turn!"
});

// Client listens to event from server called "notYourTurn"
socket.on("notYourTurn", function (data) {
  const inputField = document.getElementById("next-word");
  inputField.setAttribute("disabled", true);
  const whoseTurn = document.getElementById("whoseturn");
  whoseTurn.innerText = " ";
  whoseTurn.innerText = "Not your turn."
})

// Client listens to event from server called "gameHasEnded"
socket.on("gameHasEnded", function (data) {
  const page = document.getElementById("page");
  page.innerHTML = " ";
  page.innerHTML = `
    <h3> The game has ended! Here is your story...</h3>
    <div id="story-div"> 
      <p id="story-paragraph"></p>
    </div>
    
    <div id="start-button-div">
      <button class="default-text buttons gamebuttons"> Play Again </button>
    </div>
  `
  const story = document.getElementById("story-paragraph");
  story.innerText = data;

  const playAgainButton = document.querySelector("button");
  playAgainButton.addEventListener("click", (event) => {
    renderNewGame();
  });
})

function renderNewGame() {
  const page = document.getElementById("page");
  page.innerHTML = `
        <div id="game-page">
            <div id="rules-div">
                <div id="rules-head"> 
                    <h3>How to play:</h2>
                </div>
                <div id="steps">
                    <ol>
                        <li>Enter a word</li>
                        <li>Try to make the most creative, ridiculous and silly story you can within 200 words</li>
                        <li>You can end the game early if you have made the best story under 200 words</li>
                    </ol>
                </div>
            </div>

            <div id="story-box">
                <div id="game-story default-text">
                    <p id="phrase"></p>
                    <p id="story"></p>
                </div>
            </div>

            <button type="submit" class="gamebuttons" id="endgame">END GAME</button>
            <div id="user-input">
                <form id="word-submit-form">
                    <label for="next-word">Enter your next word: </label>
                    <input type="text" name="next-word" size="30" id="next-word">
                    <input id="enter" type="submit" value="Press ENTER to Submit">
                </form>
            </div>

            <h3 id="whoseturn"></h3>
        </div>

        <h3 id="whoseturn"></h3>
    `;

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // intercepting the submission of form and instead, doing the below JavaScript
    let userInput = document.getElementById("next-word");
    const story = document.getElementById("story");
    story.append(`${userInput.value} `);
    socket.emit("addWord", userInput.value);
    userInput.value = "";
    // Disable input field when user has submitted word
    const inputField = document.getElementById("next-word");
    inputField.setAttribute("disabled", true);

    const whoseTurn = document.getElementById("whoseturn");
    whoseTurn.innerText = " ";
    whoseTurn.innerText = "Not your turn."
  });

  // End game functionality
  const endGameButton = document.getElementById("endgame");
  endGameButton.addEventListener("click", event => {
    socket.emit("endGame");
  })
  
  // This sends an event to the server to start the game
  socket.emit("newGame");
  
}