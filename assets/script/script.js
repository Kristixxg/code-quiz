var scoreEl = documetn.querySelector("#score");
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var questionEl = document.querySelector(".question");
var optionBtns = document.querySelectorAll("li"); //can we use button inside li? 
var messageEl = document.querySelector(".message");



var set1 = {
    question: "",
    options:["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: this.options[0]
}

var set2 = {
    question: "",
    options:["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: this.options[0]
}

var set3 = {
    question: "",
    options:["answer1", "answer2", "answer3", "answer4"],
    correctAnswer: this.options[0]
}


var timeInterval;
var timeRemaining = 20;
var score = 0;


//get highest score record - complete
renderRegistered ();

function renderRegistered() {
    var lastScore = localStorage.getItem("score");

    if (lastScore === 0) {
        return;
    }

    scoreEl.textcontent = lastScore;
}

startBtn.addEventListener("click", function(event) {

    displayQuestion();

});


function displayQuestion() {

}


// countdown - complete

timeInterval = setInterval(function(){
    timeleft--;

    if (timeleft === 0) {
    clearInterval(timeInterval);
    displayLostMsg();
    }

}, 1000);

function displayLostMsg () {
    alert("Time is up. You lost.")
}









