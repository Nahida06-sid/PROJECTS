const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Login Clicked");
    const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password!");
    }

});
