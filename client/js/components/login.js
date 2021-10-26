const form = document.querySelector('form');

form.addEventListener("submit", event => {
    event.preventDefault(); // intercepting the submission of form and instead, doing the below JavaScript
    const formData = new FormData(form); // grabs all the data from the form
    const data = Object.fromEntries(formData.entries()); // grab all the entries in the form and turns it into an object

    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.innerHTML = '';
    
    axios.post('/api/sessions/login', data) // this will go to router.post("/login") in your sessions.js
        .then(() => {
            window.location.href = '/'; // if log in successful, redirect to homepage
        })
        .catch(err => {
            const errorMessage = document.createElement('p');
            errorMessage.innerText = 'Log in failed. Please try again.';
            errorMessage.append(errorMessageDiv);
        });
});