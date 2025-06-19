//A Rock Paper Scissors game with a random string generator and 5 rounds of play.

//Global scope variables
let randNum;
let humanScore = 0;
let computerScore = 0;

//GETS computer choice of ROCK/PAPER/SCISSORS
function getComputerChoice() {
    let computerString;
    randNum = Math.random();

    if (randNum <= 0.33) {
        computerString = 'ROCK';
    } else if (randNum > 0.33 && randNum <= 0.66) {
        computerString = 'PAPER';
    } else {
        computerString = 'SCISSORS';
    };
    return computerString;
};

//GETS user choice of ROCK/PAPER/SCISSORS
function getHumanChoice() {

    let humanString = prompt('Enter ROCK, PAPER or SCISSORS: ');
    capString = humanString.toUpperCase();
    return capString;
};

//PLAY one round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'ROCK' && computerChoice == 'SCISSORS') {
        humanScore++;
        console.log('You win. Rock beats Scissors.');
    } else if (humanChoice == 'ROCK' && computerChoice == 'PAPER') {
        computerScore++;
        console.log('You lose. Paper beats Rock.');
    } else if (humanChoice == 'PAPER' && computerChoice == 'ROCK') {
        humanScore++;
        console.log('You win. Paper beats Rock.');
    } else if (humanChoice == 'PAPER' && computerChoice == 'SCISSORS') {
        computerScore++;
        console.log('You lose. Scissors beats Paper.');
    } else if (humanChoice == 'SCISSORS' && computerChoice == 'PAPER') {
        humanScore++;
        console.log('You win. Scissors beats Paper.');
    } else if (humanChoice == 'SCISSORS' && computerChoice == 'ROCK') {
        computerScore++;
        console.log('You lose. Rock beats Scissors.');
    };
    
    if (computerScore > humanScore) {
        console.log('Computer Wins');
    } else if (computerScore < humanScore) {
        console.log('You win');
    };
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

