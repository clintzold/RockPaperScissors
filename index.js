//A Rock Paper Scissors game with a random string generator and 5 rounds of play.

//Global scope variables
let randNum;
let computerChoice;

//GETS computer choice of ROCK/PAPER/SCISSORS
function getComputerChoice() {
    randNum = Math.random();

    if (randNum <= 0.33) {
        computerChoice = 'ROCK';
    } else if (randNum > 0.33 && randNum <= 0.66) {
        computerChoice = 'PAPER';
    } else {
        computerChoice = 'SCISSORS';
    };
    console.log(computerChoice);
};

getComputerChoice();