//A Rock Paper Scissors game with a random string generator and 5 rounds of play.

//Global scope variables
let randNum;
let humanScore = 0;
let computerScore = 0;
 
//Records the selection of the players (rock/paper/scissors)
let humanSelection;
let computerSelection; 


//Random number generator
//GETS computer choice of ROCK/PAPER/SCISSORS
function getComputerChoice() {
    
    randNum = Math.random();
    if (randNum <= 0.33) {
        computerSelection = 'ROCK';
    } else if (randNum > 0.33 && randNum <= 0.66) {
        computerSelection = 'PAPER';
    } else {
        computerSelection = 'SCISSORS';
    };
    return computerSelection;
    
};

//GETS user choice of ROCK/PAPER/SCISSORS
function getHumanChoice() {

    let humanString = prompt('Enter ROCK, PAPER or SCISSORS: ');
    humanSelection = humanString.toUpperCase();
    return humanSelection;
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
    
};

//Plays the game for 5 rounds
function playGame() {
    for (let i = 0; i <= 5; i++) {
        getComputerChoice();
        getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log('Congratulations! You win ' + humanScore +' to ' + computerScore + '!');
    } else if (humanScore < computerScore) {
        console.log('Sorry, you lose ' + computerScore +' to ' + humanScore + '!');
    };

    console.log('Thanks for playing!');
};


//Execute Game
playGame()