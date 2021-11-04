function renderRegister() {
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
                        <label id="confirmpassword" for="confirmpassword">Confirm Password: </label>
                        <input type="password" name="confirmpassword" required>
                    </div>
                    <div class="flex-center">
                        <input type="submit" class="default-text buttons submit-button" value="Register">
                    </div>
                </form>
            </section>
        </div

    `;
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // intercepting the submission of form and instead, doing the below JavaScript
    const formData = new FormData(form); // grabs all the data from the form
    const data = Object.fromEntries(formData.entries()); // grab all the entries in the form and turns it into an object

    const errorMessageDiv = document.getElementById("error-message");

    const attemptRegister = async () => {
      const errorMessage = document.createElement("p");
      errorMessageDiv.innerHTML = "";
      errorMessage.innerText = "Registering User...";
      errorMessageDiv.append(errorMessage);
      try {
        const response = await axios.post("/api/sessions/register", data);
        renderLogin();
      } catch (err) {
        errorMessageDiv.innerHTML = "";
        errorMessage.innerText = "Passwords do not match";
        errorMessageDiv.append(errorMessage);
      }
    };
    attemptRegister();
  });
}
