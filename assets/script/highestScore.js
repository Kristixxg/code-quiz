var userName = localStorage.getItem("name");
var userScore = localStorage.getItem("score");

document.querySelector("#score").textContent = userScore;
document.querySelector("#name").textContent = userName;