// Global variables to identify locations on html for dynamic performance and fixed variables for the timer, scorekeeping, and moving through the questions array objects
var startBtn = document.querySelector("#startButton");
var resetBtn = document.querySelector("#resetButton");
var questionEl = document.querySelector("#questionDisplay");
var btn1El = document.querySelector("#button1");
var btn2El = document.querySelector("#button2");
var btn3El = document.querySelector("#button3");
var btn4El = document.querySelector("#button4");
var timeLeft = 100;
var timerCountdown = document.querySelector("#timeLeft");
var winSpan = document.querySelector("#winSpan");
var currentQuestion = 0;
var scoreUp = 0;
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
// Start the quiz with the start button here
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
    localStorage.getItem("score");
}

// Timer function counting down
function countdown() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerCountdown.textContent = timeLeft + ' seconds remaining';
        if(timeLeft > 1) {
            if(currentQuestion > 7 && timeLeft > 0) {
                clearInterval(timeInterval);
                endGame();
            }
        } else {
            timerCountdown.textContent = "Time's up!";
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}

// eventListener for user's answer choice. Logic includes grading validity of choice to increase score and incorrect answer deducting 10 seconds from countdown timer.
buttons.addEventListener("click", nextQuestion)
function nextQuestion(event){
    if(event.target.textContent===questions[currentQuestion].correctAnswer){
        console.log(questions[currentQuestion].correctAnswer);
        scoreUp++;
        winSpan.textContent = scoreUp
    } else {
        timeLeft = (timeLeft - 10);
    }

   if (currentQuestion < 6) {
    currentQuestion++;
    answerCheck.textContent="";
    questionEl.textContent = questions[currentQuestion].question;
    btn1El.textContent = questions[currentQuestion].answers[0];
    btn2El.textContent = questions[currentQuestion].answers[1];
    btn3El.textContent = questions[currentQuestion].answers[2];
    btn4El.textContent = questions[currentQuestion].answers[3];
    return;
    } else {
        endGame();
    }
}

// Resets page to reload position
resetBtn.addEventListener("click", function() {
    wins = 0;
    location.reload();
})

// endGame function clears some elements from the display and prompts user to provide initials to be stored in localStorage with quiz score
function endGame() {
    var initials = prompt("Please type your initials below to save your score!");
    questionEl.textContent = "High score for " + initials + " is: " + scoreUp;
    questionEl.setAttribute("style", "font-size:70px");
    answerCheck.textContent = "Great job!"
    startBtn.style.display = "none";
    buttons.style.display = "none";
    document.getElementById("timeLeft").style.display = "none";
    document.getElementById("results").style.display = "none";
    localStorage.setItem("score", scoreUp);
    localStorage.setItem("initials", initials);
}
