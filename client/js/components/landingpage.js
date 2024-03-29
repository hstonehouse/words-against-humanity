function renderLandingPage() {
  const page = document.getElementById("page");
  const header = document.getElementById("header-nav");
  page.innerHTML = "";

  // axios request the story on page render to create elements to render landing page before starting game
  axios.get("/api/stories/randomstory").then((randomStoryText) => {
    const randomStoryDiv = document.createElement("div");
    randomStoryDiv.id = "story-div";
    const storyParagraph = document.createElement("p");
    storyParagraph.id = "story-paragraph";
    const startButtonDiv = document.createElement("div");
    startButtonDiv.id = "start-button-div";
    const startButton = document.createElement("button");
    const logOutButton = document.createElement("input");
    logOutButton.type = "submit";
    axios.get("/api/sessions/loggedin").then((response) => {
      const header = document.getElementById("header-nav");
      const userEl = document.createElement("p");
      userEl.id = "user-welcome";
      userEl.innerText = `Welcome, 
        ${response.data.username}!`;
      header.prepend(userEl);
    });

    storyParagraph.innerText = randomStoryText.data.content;
    startButton.type = "submit";
    startButton.className = "default-text buttons gamebuttons";
    startButton.innerText = "START GAME";
    logOutButton.type = "submit";
    logOutButton.id = "logout";
    logOutButton.className = "buttons default-text";
    logOutButton.value = "Log Out";
    page.append(randomStoryDiv);
    randomStoryDiv.append(storyParagraph);
    page.append(startButtonDiv);
    startButtonDiv.append(startButton);
    header.append(logOutButton);

    // On click on log out button to log out
    logOutButton.addEventListener("click", (event) => {
      axios.delete("api/sessions/logout").then(() => {
        page.innerHTML = "";
        header.innerHTML = "";
        location.reload();
      });
    });

    // On click on the start game to render the new game page
    startButton.addEventListener("click", (event) => {
      renderNewGame();
    });
  });
}

