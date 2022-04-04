var scoreEl = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var questionEl = document.querySelector(".question");
var optionsEl = document.querySelector(".options");
var optionBtns = document.querySelectorAll(".optionBtn");
var option1El = document.querySelector(".option1");
var option2El = document.querySelector(".option2");
var option3El = document.querySelector(".option3");
var option4El = document.querySelector(".option4");
var messageEl = document.querySelector(".message");

var set0 = {
    question: "What city is the first Starbucks located?",
    options:["Seattle", "San Francisco", "Portland", "New York"],
    // correctAnswer: "Seattle"
};

var set1 = {
    question: "",
    options:["answer1", "answer2", "answer3", "answer4"],
    // correctAnswer: this.options[0]
};

var set2 = {
    question: "",
    options:["answer1", "answer2", "answer3", "answer4"],
    // correctAnswer: this.options[0]
}; 

var poolOfQuestion = [set0, set1, set2];

function displayFirstQuestion() {
    questionEl.textContent = poolOfQuestion[0].question;
    option1El.textContent = poolOfQuestion[0].options[0];
    option2El.textContent = poolOfQuestion[0].options[1];
    option3El.textContent = poolOfQuestion[0].options[2];
    option4El.textContent = poolOfQuestion[0].options[3];
}

var timeInterval;
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

// countdown - complete

function timer20s() {

    var timeLeft = 20;

    timeInterval = setInterval(function(){

        timeLeft--;
        timerEl.textContent = timeLeft;

        if (timeLeft === 0) {
        clearInterval(timeInterval);
        renderRegistered();
        displayLostMsg();
        }

    }, 1000);
}

function displayLostMsg () {
    alert("Time is up. You lost.")
}

startBtn.addEventListener("click", function(event) {

    timer20s();
    displayFirstQuestion();

});

optionsEl.addEventListener("click", function(event){ 
    var element = event.target;

    if (element.matches("button") === true) {
        if (xxxx) {
        score++;
        scoreEl.textContent = score;
        localStorage.setItem("score", score);
        clearInterval(timeInterval);
        nextQuestion();
        } else {
        timeLeft = timeLeft - 5;
        clearInterval(timeInterval);
        nextQuestion();
        }
    }
});

function nextQuestion() {

}