// var userName = localStorage.getItem("userName");
// var userScore = localStorage.getItem("highestscore");

// document.querySelector("#score").textContent = userScore;
// document.querySelector("#name").textContent = userName;


// function printScores() {
//     var highscores = JSON.parse(window.localStorage.getItem("newScore")) || [];

//     highscores.forEach(player => {
//         var liTag = document.createElement("li");
//         liTag.textContent = player.initials + " - " + player.score;

//         var olEl = document.getElementById("highscores");
//         olEl.appendChild(liTag);
//     });
// }

// printScores();


// var seedBtn = document.getElementById("seed");

// seedBtn.addEventListener("click" ,function(){
//     var seed = [

//         {   
//         initial: initials,
//         newScore: newScore
//         }

//         // {
//         //     initials: "FN",
//         //     score: 5
//         // },
//         // {
//         //     initials: "ZD",
//         //     score: 4
//         // },
//         // {
//         //     initials: "GT",
//         //     score: 7
//         // }
//     ];

//     window.localStorage.setItem("newScore", JSON.stringify(seed));
// })





function printScores() {
        var dataArr = JSON.parse(localStorage.getItem("data"));

        dataArr.forEach(element => {
                var olEl = document.querySelector("#highscores");
                var liTag = document.createElement("li");
                liTag.textContent = element.newinitials + " - " + element.newscore;
                olEl.appendChild(liTag);
        });
};

printScores();
        


        // console.log(newdata);
    
        // newdata.forEach(player => {
        //     var liTag = document.createElement("li");
        //     liTag.textContent = player.newinitials + " - " + player.newscore;
    
        //     var olEl = document.getElementById("highscores");
        //     olEl.appendChild(liTag);
        // });

