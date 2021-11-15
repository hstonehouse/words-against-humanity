const socket = io();

// When the page is refreshed, disconnect the socket
window.addEventListener(
  "beforeunload",
  function (e) {
    socket.disconnect();
  },
  false
);

// Client listens to event from server called "gameContent"
socket.on("gameContent", function (data) {
  const story = document.getElementById("story");
  story.innerText = data;
});

// Client listens to event from server called "itsYourTurn"
socket.on("itsYourTurn", function (data) {
  const turnDiv = document.getElementById("turn-div");
  turnDiv.classList.remove("redbox");
  turnDiv.classList.add("greenbox");
  const inputField = document.getElementById("next-word");
  inputField.removeAttribute("disabled");
  const submitButton = document.getElementById("enter");
  submitButton.removeAttribute("disabled");
  const whoseTurn = document.getElementById("whoseturn");
  whoseTurn.innerText = " ";
  whoseTurn.innerText = "IT'S YOUR \n TURN!";
});

// Client listens to event from server called "waitForOtherPlayers"
socket.on("waitForOtherPlayers", function (data) {
  const turnDiv = document.getElementById("turn-div");
  turnDiv.classList.remove("greenbox");
  turnDiv.classList.add("redbox");
  const inputField = document.getElementById("next-word");
  inputField.setAttribute("disabled", true);
  const submitButton = document.getElementById("enter");
  submitButton.setAttribute("disabled", true);
  const whoseTurn = document.getElementById("whoseturn");
  whoseTurn.innerText = " ";
  whoseTurn.innerText = "PLEASE WAIT FOR \n OTHER PLAYERS.";
});

// Client listens to event from server called "notYourTurn"
socket.on("notYourTurn", function (data) {
  const turnDiv = document.getElementById("turn-div");
  turnDiv.classList.remove("greenbox");
  turnDiv.classList.add("redbox");
  const inputField = document.getElementById("next-word");
  inputField.setAttribute("disabled", true);
  const submitButton = document.getElementById("enter");
  submitButton.setAttribute("disabled", true);
  const whoseTurn = document.getElementById("whoseturn");
  whoseTurn.innerText = " ";
  whoseTurn.innerText = "NOT YOUR \n TURN.";
});

// Client listens to event from server called "gameHasEnded"
socket.on("gameHasEnded", function (data) {
  const page = document.getElementById("page");
  page.innerHTML = " ";
  page.innerHTML = `

    <h3> The game has ended! Here is the final abomination...</h3>
    <div id="flex">
      <div id="story-div">
        <p id="story-paragraph"></p>
      </div>
      <div id="start-button-div">
        <button class="default-text buttons gamebuttons"> PLAY AGAIN </button>
      </div>
    </div>
  `;
  const story = document.getElementById("story-paragraph");
  story.innerText = data;

  const playAgainButton = document.querySelector("button");
  playAgainButton.addEventListener("click", (event) => {
    renderNewGame();
  });
});

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
                        <li>Enter a word</li><br/>
                        <li>Try to make the most creative, ridiculous and silly story you can!</li><br/>
                        <li>The game ends when you reach 50 unique words (and, I, the etc. don't count!) or when you hit the End Game button!</li>
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
                    <input type="text" name="next-word" size="20" id="next-word" maxlength="20" required>
                    <input id="enter" type="submit" value="Press ENTER to Submit">
                </form>
            </div>
            <div id="turn-div">
              <h3 id="whoseturn"></h3>
            </div>
        </div>
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
  });

  // End game functionality
  const endGameButton = document.getElementById("endgame");
  endGameButton.addEventListener("click", (event) => {
    socket.emit("endGame");
  });

  // This sends an event to the server to start the game
  socket.emit("newGame");
}
