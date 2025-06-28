//A Rock Paper Scissors game with a random string generator and 5 rounds of play.

//Global scope variables
let randNum;
let humanScore = 3;
let computerScore = 3;
const playButton = document.getElementById("playButton");
let readyWeapon;
let humanChoice;
const weaponList = document.querySelectorAll("#weaponSelect");
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");

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
    console.log(humanChoice, computerChoice);
    if (humanChoice == 'ROCK' && computerChoice == 'SCISSORS') {
        playerDisplay.append(rockLeft);
        computerDisplay.append(scissorsRight);
        --computerScore;
        manageHealth();

    } else if (humanChoice == 'ROCK' && computerChoice == 'PAPER') {
        playerDisplay.append(rockLeft);
        computerDisplay.append(paperRight);
        --humanScore;
        manageHealth();

    } else if (humanChoice == 'PAPER' && computerChoice == 'ROCK') {
        playerDisplay.append(paperLeft);
        computerDisplay.append(rockRight);
        --computerScore;
        manageHealth();
      
    } else if (humanChoice == 'PAPER' && computerChoice == 'SCISSORS') {
        playerDisplay.append(paperLeft);
        computerDisplay.append(scissorsRight);
        --humanScore;
        manageHealth();

    } else if (humanChoice == 'SCISSORS' && computerChoice == 'PAPER') {
        playerDisplay.append(scissorsLeft);
        computerDisplay.append(paperRight);
        --computerScore;
        manageHealth();
        
    } else if (humanChoice == 'SCISSORS' && computerChoice == 'ROCK') {
        playerDisplay.append(scissorsLeft);
        computerDisplay.append(rockRight);
        --humanScore;
        manageHealth();
        
    } else if (humanChoice == computerChoice) {
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
        };
};

function selectWeapon(item) {
    readyWeapon = document.getElementById(item);
        readyWeapon.classList.add("selected");
        humanSelection = item;
        
};

function manageHealth() {
    if (computerScore === 2) {
        computerHealth.setAttribute("src", "./img/bluePill2.png");
    } else if (computerScore === 1) {
        computerHealth.setAttribute("src", "./img/bluePill3.png");
    } else if (computerScore === 0) {
        computerHealth.setAttribute("src", "./img/bluePill4.png");
        gameOver();
    } else if (humanScore === 2) {
        playerHealth.setAttribute("src", "./img/redPill2.png");
    } else if (humanScore === 1) {
        playerHealth.setAttribute("src", "./img/redPill3.png");
    } else if (humanScore === 0) {
        playerHealth.setAttribute("src", "./img/redPill4.png");
        gameOver();
    };
 

};

function gameOver() {

    // if (humanScore === 0) {
    //     document.getElementById(humanSelection).classList.add("losingHand");
    // } else {
    //     computerDisplay.children.classList.add("losingHand");
    // }

}
//Listeners for clicking on weapons and play buttons

weaponList.forEach(e => {

    e.addEventListener("click", event => {
        humanChoice = event.target.id;
        console.log(humanChoice);
        resetWeapon(humanChoice);
        selectWeapon(humanChoice);
        
    }); 
    
});

playButton.addEventListener("click", () => {
    //Clears battlefield
    playerDisplay.replaceChildren();
    computerDisplay.replaceChildren();
    resetWeapon();

    //Checks if weapon has been selected so game doesn't break
    if (humanSelection != undefined) {
        getComputerChoice();
        playRound(humanSelection, computerSelection);
    } else {
        alert("No Weapon Chosen!");
    }
    
})

//Execute Game
// playGame()