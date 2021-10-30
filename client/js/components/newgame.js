const socket = io();

function renderNewGame() {
  const page = document.getElementById("page");
  page.innerHTML = `
        <div id="rules">
            <h2>How to play:</h2>
            <ol>
                <li>Enter a word</li>
                <li>Try to make the most creative, ridiculous and silly story you can within 200 words</li>
                <li>You can end the game early if you have made the best story under 200 words</li>
            </ol>
            </div>

        <div id="game-story">
            <p id="phrase"></p>
            <p id="story"></p>
        </div>

        <button type="submit" class="gamebuttons">END GAME</button>
        <div id="user-input">
        <form id="word-submit-form">
            <label for="next-word">Enter your next word: </label>
            <input type="text" name="next-word" id="next-word">
            <input type="submit" value="Press ENTER to Submit">
        </form>
        </div>
    `;
  socket.emit("newGameConnect");
  socket.on("newGameConnect", function (data) {
    console.log(data);
    const story = document.getElementById("story");
    story.append(data);
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // intercepting the submission of form and instead, doing the below JavaScript
    let userInput = document.getElementById("next-word");
    const story = document.getElementById("story");
    story.append(`${userInput.value} `);
    socket.emit("broadcast", userInput.value);
    userInput.value = "";
  });
  socket.on("wordInput", function (data) {
    console.log(data);
    const story = document.getElementById("story");
    story.append(` ${data} `);
  });
}
