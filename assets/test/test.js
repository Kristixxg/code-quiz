var poolOfQuestion = [
{
question: "What city is the first Starbucks located?",
options: ["A. Seattle", "B. San Francisco", "C. Portland", "D. New York"],
answer: "A. Seattle"
},

{
question: "How many ribs are in a human body?",
options: ["A. 24", "B. 25", "C. 26", "D. 27"],
answer: "A. 24"
},

{
question: "set2",
options: ["answer1", "answer2", "answer3", "answer4"],
answer: "answer2"
},

{
question: "set3",
options: ["answer1", "answer2", "answer3", "answer4"],
answer: "answer3"
},

{
question: "set4",
options: ["answer1", "answer2", "answer3", "answer4"],
answer: "answer4"
},

{
question: "set5",
options: ["answer1", "answer2", "answer3", "answer4"],
answer: "answer4"
}
];



var timerEl = document.querySelector("#timer");

var startPageEl = document.querySelector("#start-page");
var startEl = document.querySelector("#start-btn");

var questionPageEl = document.querySelector("#questions-page");
var questionAskEl = document.querySelector("#question-ask");
var optionsEl = document.querySelector("#options");

var endPageEl = document.querySelector("#end-page")
var scoreEl = document.querySelector("#score");
var initialEl = document.querySelector("#initial");
var submitEl = document.querySelector("#submit");

var timeInterval;
var timeLeft = 50;

var i = 0;
var score = 0;


function startGame() {
    //show questions and hide the start page
    startPageEl.setAttribute("data-state", "hidden");
    questionPageEl.setAttribute("data-state", "show");

    timer50s();
    

    displayQuestion();
}

function timer50s(){
    timeInterval = setInterval(function(){
    timeLeft--;
    timerEl.textContent = timeLeft;


    if (timeLeft <= 0) {
        endGame();
    }

}, 1000)
};

function displayQuestion() {
    var currentQuestion = poolOfQuestion[i];

    questionAskEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach(function(option, i) {
        var optionBtn = document.createElement("button");

        // optionBtn.setAttribute("class", "option");
        optionBtn.setAttribute("value", option);
        optionBtn.textContent = option;
        questionPageEl.appendChild(optionBtn);
        optionBtn.onclick = chosen;

    });
};

function chosen() {
    if (this.value !== poolOfQuestion[i].answer) {
        timeLeft = timeLeft - 5;
        timerEl.textContent = timeLeft;
    }

    if (this.value === poolOfQuestion[i].answer) {
        score++;
    }

    i++;

    if (i === poolOfQuestion.length) {
        endGame();
    } else {
        displayQuestion;
    }
}

function endGame() {
    clearInterval(timeInterval);
    timerEl.textContent = 0;
    endPageEl.setAttribute("data-state", "show");
    scoreEl.textContent = score;
    questionPageEl.setAttribute("data-state", "hidden");
}


function trackScore() {
    var recordArr = [] || JSON.parse(localStorage.getItem("record"));

    var initial = initialEl.value;

    var scoreObj = {
        newScore: score,
        user: initial
    }
    
    recordArr.push(scoreObj);

    localStorage.setItem("record", JSON.stringify(scoreObj));

}

startEl.onclick = startGame;


