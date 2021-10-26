function renderLandingPage() {
  const page = document.getElementById("page");
  // axios request the story on page render to create elements to render landing page before starting game
  axios.get("/api/stories/randomstory").then((randomStoryText) => {
    const randomStoryDiv = document.createElement("div");
    const storyParagraph = document.createElement("p");
    const startButton = document.createElement("button");
    // Check the return from api format is (JSON but how?)
    storyParagraph.innerText = randomStoryText.content;
    startButton.type = "submit";
    startButton.id = "startgame";
    startButton.innerText = "Start Game";
    page.append(randomStoryDiv);
    randomStoryDiv.append(storyParagraph);
    page.append(startButton);
  });
  // On click on the start game to render the new game page
  const startButton = document.getElementById("startgame");
  startButton.addEventListener("click", (event) => {
    renderNewGame();
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
