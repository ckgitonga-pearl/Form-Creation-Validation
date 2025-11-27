document.addEventListener("DOMContentLoaded", function () {

    // Get form and elements
    const form = document.getElementById("registration-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const feedback = document.getElementById("form-feedback");

    // Submission event will be added here later
});
document.addEventListener("DOMContentLoaded", function () {

    // Step 2: Select the form using its ID
    const form = document.getElementById("registration-form");

});
document.addEventListener("DOMContentLoaded", function () {
    
    // Step 1: Select the form
    const form = document.getElementById("registration-form");

    // Step 2: Select the feedback division
    const feedbackDiv = document.getElementById("form-feedback");

});
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Form submission event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevents page reload and actual submission

        // (We will add validation logic in the next steps)
        console.log("Form submission blocked for validation");
    });

});
// Retrieve and trim input values
const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();

let isValid = true;        
let messages = []; 
 if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
    }
    if (!email.includes('@') || !email.includes('.')) {
    isValid = false;
    messages.push('Email must contain both "@" and "."');
}
if (password.length < 8) {
    isValid = false;
    messages.push("Password must be at least 8 characters long.");
}
feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // green
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // red
        }
    