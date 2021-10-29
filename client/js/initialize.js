const socket = io();

// What should happen when someone connects
socket.on("connect", () => {
  console.log(`You connected with id: ${socket.id}`);
});

function renderHeader() {
  const header = document.getElementById("header-nav");
  header.innerHTML = `
    <h1 class="title">Words Against Humanity</h1>
    `;
}

axios
  .get("/api/sessions/loggedin")
  .then((response) => {
    renderLandingPage();
  })
  .catch((err) => {
    renderLogin();
  });
renderHeader();
