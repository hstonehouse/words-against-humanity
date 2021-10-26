function renderHeader() {
  const header = document.getElementById("header-nav");
  header.innerHTML = `
    <h1 class="title">Words Against Humanity</h1>
    `;
}
let userLogin = false;
axios
  .get("/api/sessions/loggedin")
  .then((response) => {
    renderLandingPage();
  })
  .catch((err) => {
    renderLogin();
  });
renderHeader();
