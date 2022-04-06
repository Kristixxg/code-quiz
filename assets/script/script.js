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
var resultEl = document.querySelector(".result");
var resetBtn = document.querySelector("#reset");

var set0 = {
  question: "Which one of these does not require a closing tag?",
  options: ["A. <hr> ", "B. <h1>", "C. <div>", "D. <main>"],
};

var set1 = {
  question: "What is one way to exit a loop",
  options: ["A. break", "B. console.log", "C. delete", "D. Command+Q"],
};

var set2 = { 
  question: "<span> is: ",
  options: ["An inline element", "A block element", "A function", "A call back function"],
};

var set3 = {
  question: "What is DOM stands for?",
  options: ["Document Object Model", "Document of Model", "Document of Method", "Documentation of Method"],
};

var set4 = {
  question: "What is APIs?",
  options: ["Application Programming Interface", "App Program Interface", "App Process Interface", "Application Process Interface"],
};

var set5 = {
  question: "Which of these increate margin-right?",
  options: ["margin: 0 20px 0 0;", "margin: 20px 0;", "margin: 0 20px;", "margin: 20px;"],
};

var poolOfQuestion = [set0, set1, set2, set3, set4, set5];

// var highestScore = 0;
var newScore = 0;
var i = 0;
var timeInterval;
var timeLeft = 20;

//get highest score record - complete
renderRegistered();

function renderRegistered() {
  newScore = localStorage.getItem("newScore");

  if (!newScore) {
    localStorage.setItem("newScore", 0);
    return;
  }

  scoreEl.textContent = newScore;
}

startBtn.addEventListener("click", function (event) {
  timer20s();
  displayQuestion(i);
});

// countdown - complete
function timer20s() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      renderRegistered();
      displayLostMsg();
      enterRecord();
    }
  }, 1000);
}

function displayQuestion(i) {
  console.log("display question", i);

  if (i === poolOfQuestion.length) {
    clearInterval(timeInterval);
    localStorage.setItem("newScore", newScore);
    return;
  }

  if (i > poolOfQuestion.length) {
    console.log("i is out of bound");
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

optionsEl.addEventListener("click", function (event) {
  var element = event.target;
  console.log("add event listener");

  if (element.matches("button") === true) {
    console.log("element clicked");
    var state = element.getAttribute("data-state");

    if (state === "correct") {
      newScore++;
      scoreEl.textContent = newScore;
      localStorage.setItem("newScore", newScore);
      displayResultMsg();
      console.log("correct");
    }

    if (state === "incorrect") {
      timeLeft = timeLeft - 5;
      timerEl.textContent = timeLeft;
      displayResultWrongMsg();
      console.log("incorrect");
    }

    //we dont want to display the next question when it gets to the last of question
    //defensive coding to make sure that invalid value does not get sent to displayQuestion().

    if (i >= poolOfQuestion.length - 1) {
      displayWonMsg();
      clearInterval(timeInterval);
      enterRecord();
      return;
    }

    displayQuestion(++i);
  } else {
    console.log("Not a button");
  }
});

function displayWonMsg() {
  alert("Congraulations! You won and your score is:" + newScore);

}

function displayResultMsg() {
  messageEl.textContent = "Correct!";
}

function displayLostMsg() {
  alert("Time is up. You lost. Your highest Score is: " + newScore);

}

function displayResultWrongMsg() {
  messageEl.textContent = "Incorrect!";
}



resetBtn.addEventListener("click", function () {
  localStorage.setItem("newScore", "0");
  localStorage.setItem("userName", "");
  scoreEl.textContent = 0;
  timeLeft = 20;
  timerEl.textContent = 20;
  displayQuestion(0);
});





function enterRecord() {
    var initials = prompt("Please enter your initials: ");

    // var recordArr = [] || JSON.parse(localStorage.getItem("data"));

    // recordArr.forEach(player => {
    //     var liTag = document.createElement("li");
    //     liTag.textContent = player.initials + " - " + player.score;

    //     var olEl = document.getElementById("highscores");
    //     olEl.appendChild(liTag);
    // });

    // var seedBtn = document.getElementById("seed");

    // seedBtn.addEventListener("click" ,function(){
    
        var newRecord = {
        newinitials: initials,
        newscore: newScore,
        }

        localStorage.setItem("data", JSON.stringify(newRecord));

    // recordArr.push(newRecord);

    
}

printScores;

function printScores() {
        var newdata = JSON.parse(localStorage.getItem("data"));

        var olEl = document.querySelector("#highscores");
        var liTag = document.createElement("li");
        liTag.textContent = newdata.newscore;
        olEl.appendChild(liTag);


        // console.log(newdata);
    
        // newdata.forEach(player => {
        //     var liTag = document.createElement("li");
        //     liTag.textContent = player.newinitials + " - " + player.newscore;
    
        //     var olEl = document.getElementById("highscores");
        //     olEl.appendChild(liTag);
        // });
}