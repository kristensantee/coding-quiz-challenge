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
var resetBtn = document.querySelector("#resetButton")
var timeLeftSpan = document.querySelector("#timeLeft");
var timerCountdown = document.querySelector("#timeLeft");
var winSpan = 0;
var isPlaying = false;

var questionsList = [
    {
        question: "Which continent has the shortest coastline?",
        answers: {
            a: "Australia",
            b: "Africa",
            c: "Europe",
            d: "Antarctica"
        },
        correctAnswer: "b"
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

//TODO: Start game when Start button is clicked
startBtn.addEventListener("click", startGame)

function startGame(){
    console.log("started");
    nextQuestion();
    countdown();
}

function nextQuestion(){

}

function selectAnswer(){

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

}

resetBtn.addEventListener("click", resetGame)

function resetGame() {
    console.log("reset")
    // Needs to stop timer
    var timeLeft = 10;
    // Needs to clear scores

}

