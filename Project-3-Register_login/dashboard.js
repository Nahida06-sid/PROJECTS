const user = JSON.parse(localStorage.getItem("user"));

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeMessage.innerText = "Welcome, " + user.name + "!";

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function() {
    window.location.href = "login.html";
});