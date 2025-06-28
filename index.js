//A Rock Paper Scissors game with a random string generator and 5 rounds of play.

//Global scope variables
let randNum;
let humanScore = 0;
let computerScore = 0;
const playButton = document.getElementById("playButton");
const rWeapon = document.getElementById("rWeapon");
const pWeapon = document.getElementById("pWeapon");
const sWeapon = document.getElementById("sWeapon");
 
//Records the selection of the players (rock/paper/scissors)
let humanSelection;
let computerSelection; 


//Random number generator
//GETS computer choice of ROCK/PAPER/SCISSORS
function getComputerChoice() {
    
    randNum = Math.floor(Math.random() * 10);
    if (randNum <= 3) {
        computerSelection = 'ROCK';
    } else if (randNum > 3 && randNum <= 6) {
        computerSelection = 'PAPER';
    } else {
        computerSelection = 'SCISSORS';
    };
    return computerSelection;
    
};

//GETS user choice of ROCK/PAPER/SCISSORS
function getHumanChoice() {

    let weapon = document.get;
    humanSelection = humanString.toUpperCase();
    return humanSelection;
};

//PLAY one round
function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'ROCK' && computerChoice == 'SCISSORS') {
        humanScore++;
        
    } else if (humanChoice == 'ROCK' && computerChoice == 'PAPER') {
        computerScore++;
      
    } else if (humanChoice == 'PAPER' && computerChoice == 'ROCK') {
        humanScore++;
      
    } else if (humanChoice == 'PAPER' && computerChoice == 'SCISSORS') {
        computerScore++;
        
    } else if (humanChoice == 'SCISSORS' && computerChoice == 'PAPER') {
        humanScore++;
        
    } else if (humanChoice == 'SCISSORS' && computerChoice == 'ROCK') {
        computerScore++;
        
    };
    
};

//Plays the game for 5 rounds
function playGame() {
    // for (let i = 0; i <= 5; i++) {
    //     getComputerChoice();
    //     getHumanChoice();
    //     playRound(humanSelection, computerSelection);
    // }
    if (humanScore > computerScore) {
        console.log('Congratulations! You win ' + humanScore +' to ' + computerScore + '!');
    } else if (humanScore < computerScore) {
        console.log('Sorry, you lose ' + computerScore +' to ' + humanScore + '!');
    };

    console.log('Thanks for playing!');
};

document.addEventListener("click")

//Execute Game
playGame()