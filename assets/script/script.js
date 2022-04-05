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
    options:["A. Seattle", "B. San Francisco", "C. Portland", "D. New York"],
};

var set1 = {
    question: "How many ribs are in a human body?",
    options:["A. 24", "B. 25", "C. 26", "D. 27"],
};

var set2 = {
    question: "set2",
    options:["answer1", "answer2", "answer3", "answer4"],
}; 

var set3 = {
    question: "set3",
    options:["answer1", "answer2", "answer3", "answer4"],
}; 

var set4 = {
    question: "set4",
    options:["answer1", "answer2", "answer3", "answer4"],
}; 

var set5 = {
    question: "set5",
    options:["answer1", "answer2", "answer3", "answer4"],
}; 

var poolOfQuestion = [set0, set1, set2, set3, set4, set5];
var score;
var i = 0;
var timeInterval;
var timeLeft = 20;

//get highest score record - complete
renderRegistered();

function renderRegistered() {
    score = localStorage.getItem("score");
    console.log(score);
    if (!score) {
     return;
    }
    scoreEl.textContent = score;
}


startBtn.addEventListener("click", function(event) {

    timer20s();
    displayQuestion(i);

});


// countdown - complete
function timer20s() {

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

function displayQuestion(i) {


    if (i === poolOfQuestion.length - 1) {
        clearInterval(timeInterval);
        localStorage.setItem("score", score);
        return;
    }

    questionEl.textContent = poolOfQuestion[i].question;

    option1El.textContent = poolOfQuestion[i].options[0];
    option1El.setAttribute("data-state", "correct");

    option2El.textContent = poolOfQuestion[i].options[1];
    option2El.setAttribute("data-state", "incorrect");

    option3El.textContent = poolOfQuestion[i].options[2];
    option3El.setAttribute("data-state", "incorrect");

    option4El.textContent = poolOfQuestion[i].options[3];
    option4El.setAttribute("data-state", "incorrect");

}

optionsEl.addEventListener("click", function(event){ 
    var element = event.target;

    if (element.matches("button") === true) {

        var state = element.getAttribute("data-state");

        if (state === "correct") {
        score++;
        scoreEl.textContent = score;
        localStorage.setItem("score", score);
        displayResultMsg();

        }
        
        if (state === "incorrect") {
        timeLeft = timeLeft - 5;
        timerEl.textContent = timeLeft;
        displayResultWrongMsg();

        }

        displayQuestion(i++);
    }
});



function displayWonMsg() {
    alert("Congraulations! You won and your score is:" +  score);
}

function displayResultMsg() {
    messageEl.textContent = "Correct!";

}

function displayLostMsg () {
    alert("Time is up. You lost. Your highest Score is: " + score);
}

function displayResultWrongMsg() {
    messageEl.textContent = "Incorrect!";
}


    // displayWonMsg();