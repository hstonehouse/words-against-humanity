function renderLogin() {
  const page = document.getElementById("page");
  page.innerHTML = `
        <div class="flex-center">
            <section class="login">
                <h2>Please Log In</h2>
                <div id="error-message"></div>
                <form id="login-form"> 
                    <div class="label-grid">
                        <label for="username">Username: </label>
                        <input type="text" name="username" required>
                        <label for="password">Password: </label>
                        <input type="password" name="password" required>
                    </div>
                    <div class="flex-center">
                        <input type="submit" class="default-text" value="Log In">
                    </div>
                </form>
            </section>
        </div>
  
        <div class="flex-center">
            <button class="default-text" id="register">Register</button>
        </div>

    `;
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // intercepting the submission of form and instead, doing the below JavaScript
    const formData = new FormData(form); // grabs all the data from the form
    const data = Object.fromEntries(formData.entries()); // grab all the entries in the form and turns it into an object

    // const errorMessageDiv = document.getElementById("error-message");
    // errorMessageDiv.innerHTML = "";

    axios
      .post("/api/sessions/login", data) // this will go to router.post("/login") in your sessions.js
      .then(() => {
        window.location.href = "/"; // if log in successful, redirect to homepage
      })
      .catch((err) => {
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "Log in failed. Please try again.";
        errorMessage.append(errorMessageDiv);
      });
  });

  // Register button
  const register = document.getElementById("register");

  register.addEventListener("click", (event) => {
    window.location.href = "/api/sessions/register";
  });
}
