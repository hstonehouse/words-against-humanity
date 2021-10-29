function renderNewGame(){
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

        <button type="submit" id="end-game">END GAME</button>

        <form id="word-submit-form">
            <label for="next-word">Enter your next word: </label>
            <input type="text" name="next-word" id="next-word">
            <input type="submit" value="Press ENTER to Submit">
        </form>
    `
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // intercepting the submission of form and instead, doing the below JavaScript
        // const formData = new FormData(form); // grabs all the data from the form
        // const data = Object.fromEntries(formData.entries()); // grab all the entries in the form and turns it into an object
        let userInput = document.getElementById("next-word");
        const story = document.getElementById("story");
        story.append(`${userInput.value} `);
        userInput.value = "";
    })
}

