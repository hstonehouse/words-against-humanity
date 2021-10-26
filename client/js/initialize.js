function renderHeader() {
  const header = document.getElementById("header-nav");
  header.innerHTML = `
    <h1>Words Against Humanity</h1>
    `;
  axios.get("/api/sessions/loggedin").then((response) => {
    if (response.status === 403){
      renderLogin();
    } else {
      renderLandingPage();
    }
  });
}

renderHeader();
