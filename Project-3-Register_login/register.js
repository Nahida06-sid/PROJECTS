const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form Submitted");
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;
console.log(name);
console.log(email);
console.log(password);
console.log(confirmPassword);
if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
}
const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));//Converts the JavaScript object into a string.

    alert("Registration Successful!");

    window.location.href = "index.html";

});