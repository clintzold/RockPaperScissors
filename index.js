//A Rock Paper Scissors game with a random string generator and 5 rounds of play.

//Global scope variables
let randNum;
let humanScore = 3;
let computerScore = 3;
const playButton = document.getElementById("playButton");
const resetButton = document.createElement("button");
resetButton.setAttribute("class", "resetButton");
resetButton.textContent = "Play Again";
let readyWeapon;
let humanChoice;
const weaponList = document.querySelectorAll("#weaponSelect");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const displayResult = document.getElementById("displayResult");

//Health Bars
playerHealth = document.getElementById("playerHealth");
computerHealth = document.getElementById("npcHealth");

//Creates BATTLE IMAGES for user and npc
const rockLeft = document.createElement("img");
rockLeft.setAttribute("src", "./img/rockUser.png");
rockLeft.setAttribute("class", "battleHand");

const rockRight = document.createElement("img");
rockRight.setAttribute("src", "./img/rockEnemy.png");
rockRight.setAttribute("class", "battleHand");

const paperLeft = document.createElement("img");
paperLeft.setAttribute("src", "./img/paperUser.png");
paperLeft.setAttribute("class", "battleHand");

const paperRight = document.createElement("img");
paperRight.setAttribute("src", "./img/paperEnemy.png");
paperRight.setAttribute("class", "battleHand");

const scissorsLeft = document.createElement("img");
scissorsLeft.setAttribute("src", "./img/scissorsUser.png");
scissorsLeft.setAttribute("class", "battleHand");

const scissorsRight = document.createElement("img");
scissorsRight.setAttribute("src", "./img/scissorsEnemy.png");
scissorsRight.setAttribute("class", "battleHand");

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
    
};

//GETS user choice of ROCK/PAPER/SCISSORS


//PLAY one round
function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
        playerDisplay.append(rockLeft);
        computerDisplay.append(scissorsRight);
        --computerScore;
        manageHealth(humanScore, computerScore);

    } else if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
        playerDisplay.append(rockLeft);
        computerDisplay.append(paperRight);
        --humanScore;
        manageHealth(humanScore, computerScore);

    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
        playerDisplay.append(paperLeft);
        computerDisplay.append(rockRight);
        --computerScore;
        manageHealth(humanScore, computerScore);
      
    } else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
        playerDisplay.append(paperLeft);
        computerDisplay.append(scissorsRight);
        --humanScore;
        manageHealth(humanScore, computerScore);

    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        playerDisplay.append(scissorsLeft);
        computerDisplay.append(paperRight);
        --computerScore;
        manageHealth(humanScore, computerScore);
        
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
        playerDisplay.append(scissorsLeft);
        computerDisplay.append(rockRight);
        --humanScore;
        manageHealth(humanScore, computerScore);
        
    } else if (humanChoice === computerChoice) {
        switch (humanChoice) {
            case "ROCK":
                playerDisplay.append(rockLeft);
                computerDisplay.append(rockRight);
                break;
            case "SCISSORS":
                playerDisplay.append(scissorsLeft);
                computerDisplay.append(scissorsRight);
                break;
            case "PAPER":
                playerDisplay.append(paperLeft);
                computerDisplay.append(paperRight);
                break;
        };
    }
    
};


function resetWeapon(remains) {
        switch (remains) {
            case "ROCK":
                document.getElementById("PAPER").classList.remove("selected");
                document.getElementById("SCISSORS").classList.remove("selected");
                break;
            case "PAPER":
                document.getElementById("ROCK").classList.remove("selected");
                document.getElementById("SCISSORS").classList.remove("selected");
                break;
            case "SCISSORS":
                document.getElementById("PAPER").classList.remove("selected");
                document.getElementById("ROCK").classList.remove("selected");
                break;
            case "GAMEOVER":
                document.getElementById("PAPER").classList.remove("selected");
                document.getElementById("ROCK").classList.remove("selected");
                document.getElementById("SCISSORS").classList.remove("selected");
                break;
        };
};

function selectWeapon(item) {
    readyWeapon = document.getElementById(item);
        readyWeapon.classList.add("selected");
        humanSelection = item;
        
};

function manageHealth(a, b) {
    if (b === 3) {
        computerHealth.setAttribute("src", "./img/bluePill.png");
    } else if (b === 2) {
        computerHealth.setAttribute("src", "./img/bluePill2.png");
    } else if (b === 1) {
        computerHealth.setAttribute("src", "./img/bluePill3.png");
    } else if (b === 0) {
        computerHealth.setAttribute("src", "./img/bluePill4.png");
        gameOver();
    }; 
    
    if (a == 3) {
        playerHealth.setAttribute("src", "./img/redPill.png");
    } else if (a == 2) {
        playerHealth.setAttribute("src", "./img/redPill2.png");
    } else if (a == 1) {
        playerHealth.setAttribute("src", "./img/redPill3.png");
    } else if (a == 0) {
        playerHealth.setAttribute("src", "./img/redPill4.png");
        gameOver();
    };
 

};

function gameOver() {
    humanChoice = "GAMEOVER";
    humanSelection = "GAMEOVER";
    // resetWeapon(humanChoice);
    // playerDisplay.replaceChildren();
    // computerDisplay.replaceChildren();
    playButton.replaceWith(resetButton);
    if (humanScore === 0) {
        
        displayResult.setAttribute("class", "gameOver");
        displayResult.textContent = "YOU LOSE";
        
    } else {
        displayResult.setAttribute("class", "gameOver");
        displayResult.textContent = "YOU WIN";
       
    };

};
//Listeners for clicking on weapons and play buttons

weaponList.forEach(e => {

    e.addEventListener("click", event => {
        humanChoice = event.target.id;
        
        resetWeapon(humanChoice);
        selectWeapon(humanChoice);
        
    }); 
    
});

playButton.addEventListener("click", () => {
    //Clears battlefield
    playerDisplay.replaceChildren();
    computerDisplay.replaceChildren();
    

    //Checks if weapon has been selected so game doesn't break
    if (humanSelection != undefined || humanSelection === "GAMEOVER") {
        getComputerChoice();
        playRound(humanSelection, computerSelection);
    } 
    
});

resetButton.addEventListener("click", () => {
<<<<<<< HEAD

=======
>>>>>>> parent of a478988 (Tidy up unused code and commenting)
    //Reset Gameplay values
    resetWeapon(humanChoice);
    resetButton.replaceWith(playButton);
    displayResult.replaceChildren();
    playerDisplay.replaceChildren();
    computerDisplay.replaceChildren();
    humanScore = 3;
    computerScore = 3;
    manageHealth(humanScore, computerScore);
    
});
const audio = new Audio();
audio.play();
//Execute Game
// playGame()