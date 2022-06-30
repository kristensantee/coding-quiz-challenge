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
var timeLeft = 100;
// var timeLeftSpan = document.querySelector("#timeLeft");
var timerCountdown = document.querySelector("#timeLeft");
var winSpan = document.querySelector("#winSpan");
var isPlaying = false;
// var wins = local.Storage.getItem("savedWins")||0;
var currentQuestion = 0;
var buttons = document.querySelector(".answers");
var answerCheck = document.querySelector("#validCheck");
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
        answers: [
            "petrichor",
            "odoragua",
            "mizzle",
            "cumulus aroma"
        ],
        correctAnswer: "petrichor"
    },
    {
        question: "Which organization boasts the largest civilian vehicle fleet in the world?",
        answers: [
            "Maersk",
            "US Postal Service",
            "Amazon",
            "FedEx"
    ],
        correctAnswer: "US Postal Service"
    },
    {
        question: "Who is Canada's Head of State?",
        answers: [
            "Justin Trudeau",
            "Justprim Brieber",
            "Florence Machina",
            "Queen Elizabeth II"
        ],
        correctAnswer: "Queen Elizabeth II"
    },
    {
        question: "Which of the following Canadian Junior Hockey teams are fictional?",
        answers: [
            "Fin Flon Bombers",
            "Waywayseecappo Wolverines",
            "Bonnyville Pontiacs",
            "Tsawwassen Tugboats",
        ],
        correctAnswer: "Tsawwassen Tugboats"
    },
    {
        question: "Which planet in the Solar System is the most dense?",
        answers: [
            "Venus",
            "Earth",
            "Mars",
            "Jupiter"
        ],
        correctAnswer: "Earth"
    },
    {
        question: "Derived from the Latin word for 'cake,' what is the name of the organ pregant people develop during every pregnancy?",
        answers: [
            "Axilla",
            "Condyle",
            "Placenta",
            "Glabella"
        ],
        correctAnswer: "Placenta"
    },
];
// console.log(questions[0].answers[1])

//TODO: Start game when Start button is clicked
startBtn.addEventListener("click", startGame)

function startGame(){
    countdown();
    if (currentQuestion == 0) {
    questionEl.textContent = questions[0].question;
    btn1El.textContent = questions[0].answers[0];
    btn2El.textContent = questions[0].answers[1];
    btn3El.textContent = questions[0].answers[2];
    btn4El.textContent = questions[0].answers[3];
    }
}

buttons.addEventListener("click", checkAnswer)

function checkAnswer(e){
    // console.log(e.target.textContent);
    if(e.target.textContent === questions[0].correctAnswer){
        answerCheck.textContent="Correct!";
        nextQuestion();
    } else {
        answerCheck.textContent="Incorrect - 10 seconds off the clock!";
        timeLeft = (timeLeft - 10);
        nextQuestion();
    }
}

function nextQuestion(){
    answerCheck.textContent="";
   if (currentQuestion < 6) {
    currentQuestion++;
    console.log(currentQuestion)
    questionEl.textContent = questions[currentQuestion].question;
    btn1El.textContent = questions[currentQuestion].answers[0];
    btn2El.textContent = questions[currentQuestion].answers[1];
    btn3El.textContent = questions[currentQuestion].answers[2];
    btn4El.textContent = questions[currentQuestion].answers[3];
    answerCheck();
   } else {
     endGame();
   }
}



//TODO: Timer function counting down
function countdown() {
    
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
            //TODO: move to function for displaying score
        }
    }, 1000);
}

// function scoreTabulation() {
//     console.log("correct");
//     // clearInterval(timer);
//     // wins++;
//     winSpan.textContent=wins;
//     localStorage.setItem("savedWins", wins);
// }

resetBtn.addEventListener("click", function() {
    wins = 0;
    localStorage.setItem("savedWins",0);
    winSpan.textContent = 0;
    location.reload();
})

function endGame() {
    console.log("endGame")
}

