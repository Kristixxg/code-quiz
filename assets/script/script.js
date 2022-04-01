var question1;
var question2;
var question3;


var timerP = document.querySelector(".time-P");

var questions = document.querySelector(".question");
var answers = document.querySelector(".answers");
var result = document.querySelector(".result");




// countdown 
var timeleft = 60;

var setTime = setInterval(function(){
    if () {
        timeleft = timeleft - 20;
    } 

    timeleft--;

    if (timeleft === 0) {
    clearInterval(setTime);
    endGame();
    }

}, 1000);

function endGame () {

}

//score

var score = 1;

if () {
    score++;
}


