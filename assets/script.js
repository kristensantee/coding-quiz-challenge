    //TODO: edgecase: user clicks start while game is running
//TODO: Corresponding question one answer options display
//TODO: When answered correctly, move on to next question
    //TODO: alert/push that answer was correct
    //TODO: Add a point to the scoreboard
//TODO: When answered incorrectly, move on to next question
    //TODO: alert/push that answer was incorrect
    //TODO: Time subtracted from running time
//TODO: When time is up or all questions answered, game is over, user enters initials
//TODO: Option to try game again or clear high scores
//TODO: Score & initials stored locally

var startBtn = document.querySelector("#startButton");
var resetBtn = document.querySelector("#resetButton");
var questionEl = document.querySelector("#questionDisplay");
var btn1El = document.querySelector("#button1");
var btn2El = document.querySelector("#button2");
var btn3El = document.querySelector("#button3");
var btn4El = document.querySelector("#button4");
// var timeLeftSpan = document.querySelector("#timeLeft");
var timerCountdown = document.querySelector("#timeLeft");
var winSpan = document.querySelector("#winSpan");
var isPlaying = false;
// var wins = local.Storage.getItem("savedWins")||0;
var currentQuestion = 0
var questions = [
    {
        question: "Which continent has the shortest coastline?",
        answers: [
            "Australia",
            "Africa",
            "Europe",
            "Antarctica"
        ],
        correctAnswer: "Africa"
    },
    {
        question: "What is the word for the smell of rain?",
        answers: {
            a: "petrichor",
            b: "odoragua",
            c: "mizzle",
            d: "cumulus aroma"
        },
        correctAnswer: "a"
    },
    {
        question: "Which organization boasts the largest civilian vehicle fleet in the world?",
        answers: {
            a: "Maersk",
            b: "US Postal Service",
            c: "Amazon",
            d: "FedEx"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is Canada's Head of State?",
        answers: {
            a: "Justin Trudeau",
            b: "Justprim Brieber",
            c: "Florence Machina",
            d: "Queen Elizabeth II"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following Canadian Junior Hockey teams are fictional?",
        answers: {
            a: "Fin Flon Bombers",
            b: "Waywayseecappo Wolverines",
            c: "Bonnyville Pontiacs",
            d: "Tsawwassen Tugboats",
        },
        correctAnswer: "d"
    },
    {
        question: "Which planet in the Solar System is the most dense?",
        answers: {
            a: "Venus",
            b: "Earth",
            c: "Mars",
            d: "Jupiter"
        },
        correctAnswer: "b"
    },
    {
        question: "Derived from the Latin word for 'cake,' what is the name of the organ pregant people develop during every pregnancy?",
        answers: {
            a: "Axilla",
            b: "Condyle",
            c: "Placenta",
            d: "Glabella"
        },
        correctAnswer: "c"
    },
];
console.log(questions[0].answers[1])

//TODO: Start game when Start button is clicked
startBtn.addEventListener("click", startGame)

function startGame(){
    console.log("started");
    countdown();
    questionEl.textContent = questions[0].question;
    btn1El.textContent = questions[0].answers[0];
    console.log(btn1El)
    btn2El.textContent = questions[0].answers[1];
    btn3El.textContent = questions[0].answers[2];
    btn4El.textContent = questions[0].answers[3];
    //user selects answer
    var userChoice = document.querySelectorAll(".button")
    console.log(userChoice);
    //check the answer
    //logic for if this then run next question
    nextQuestion();
}

function nextQuestion(){
   if (currentQuestion < 6) {
    currentQuestion++;
    questionEl.textContent = questions[currentQuestion].question;
   } else {
    scoreTabulation();
   }

    // for (var i = 0; i < questions.length; i++) {
    //     var question = questions[i].question;
    //     console.log(question)
    //     var options = questions[i].choices;
        // for (var opt in options) {
        //     for (var radios in userChoices) {
        //     userChoices[radios].value = options[opt];
        //     }
        // }
    // }
}

function checkAnswer(){

}

//TODO: Timer function counting down
function countdown() {
    console.log("timer going")
    var timeLeft = 10;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerCountdown.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerCountdown.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerCountdown.textContent = "Time's up!";
            clearInterval(timeInterval);
            console.log("Game over!");
            //TODO: move to function for displaying score
        }
    }, 1000);
}

function scoreTabulation() {
    console.log("correct");
    clearInterval(timer);
    wins++;
    winSpan.textContent=wins;
    localStorage.setItem("savedWins", wins);
}

resetBtn.addEventListener("click", function() {
    wins = 0;
    localStorage.setItem("savedWins",0);
    winSpan.textContent = 0;
    location.reload();
})

// function resetGame() {
//     console.log("reset")
//     // Needs to stop timer
//     return;
//     // Needs to clear scores

// }

