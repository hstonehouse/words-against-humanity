function renderLandingPage() {
  const page = document.getElementById("page");
  const header = document.getElementById("header-nav");
  page.innerHTML = "";

  // axios request the story on page render to create elements to render landing page before starting game
  axios.get("/api/stories/randomstory").then((randomStoryText) => {
  
    const randomStoryDiv = document.createElement("div");
    const storyParagraph = document.createElement("p");
    const startButton = document.createElement("button");
    const logOutButton = document.createElement("button");

    // Check the return from api format is (JSON but how?)
    storyParagraph.innerText = randomStoryText.data.content;
    startButton.type = "submit";
    startButton.id = "startgame";
    startButton.innerText = "Start Game";
    logOutButton.type = "submit";
    logOutButton.id = "logout";
    logOutButton.innerText = "Log Out";
    page.append(randomStoryDiv);
    randomStoryDiv.append(storyParagraph);
    page.append(startButton);
    header.append(logOutButton);

    // On click on log out button to log out
    logOutButton.addEventListener("click", event => {
      axios.delete('api/sessions/logout').then(()=>{
        page.innerHTML = "";
        header.innerHTML = "";
        renderHeader();
        renderLogin();
      });
    })

    // On click on the start game to render the new game page
    startButton.addEventListener("click", (event) => {
      renderNewGame();
    });
  });
}
//   axios.get("/api/rooms").then((response)=>{
//     if (!response.body){
//       // start a new game
//     } else {
//       // join the existing game
//       // renderGame()
//   }
// })
