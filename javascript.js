/* PSEUDOCODE 

let user choose betwee rock, scissors and paper
the program randomly selects rock, scissors or paper
RULES:
    if user has rock and the program has scissors, the user wins
    if user has rock and the program has paper, the user loses
    if user has rock and the program has rock, there is a draw
    
    if user has scissors and the program has paper, the user wins
    if user has scissors and the program has rock, the program wins
    if user has scissors and the program has scissors, there is a draw

    if user has paper and the program has rock, the user wins
    if user has paper and the program has scissors, the program wins
    if user has paper and the program has paper, there is a draw



/* RANDOM GENERATOR: */






function getComputerChoice() {

    let options = ["computer-rock", "computer-scissors", "computer-paper"]
    const randomChoice = Math.floor(Math.random() * options.length)
    return options[randomChoice]
    
}

/* GAME ENGINE: */

let playerChoice;
let ComputerChoice


let drawArray = [];
let humanWinArray = [];
let computerWinArray = [];

function winner() {

if (humanWinArray.length == 5) {console.log("YOU WON THE GAME")}

else  if (computerWinArray.length == 5) {console.log("YOU LOST THE GAME")}

else if (computerWinArray.length > 5 || humanWinArray.length > 5) {location.reload()}

}


console.log(`Human: ${humanWinArray.length}`);
console.log(`Computer: ${computerWinArray.length}`);

    /* IF PLAYER SELECTS ROCK: */

function storePlayerChoiceRock () {
    let playerChoice = "player-rock";
    console.log(playerChoice)

    ComputerChoice = getComputerChoice();
    console.log(ComputerChoice)

    if (ComputerChoice == "computer-rock" && playerChoice == "player-rock") {
        console.log("--> Draw!")
        drawArray.push("draw");
        console.log("STANDING:");
        console.log(`   Human: ${humanWinArray.length}`);
        console.log(`   Computer: ${computerWinArray.length}`);
        console.log("-----------");
        winner()
        return;
    } 
    
    else if (ComputerChoice == "computer-scissors" && playerChoice == "player-rock") {
        console.log("--> You win!");
        humanWinArray.push('humanWin')
        console.log("STANDING:");
        console.log(`   Human: ${humanWinArray.length}`);
        console.log(`   Computer: ${computerWinArray.length}`);
        console.log("-----------");
        winner()
        return;
    
    } 
    
    else 
        console.log("--> You lose!");
        computerWinArray.push('computerWin')
        console.log("STANDING:");
        console.log(`   Human: ${humanWinArray.length}`);
        console.log(`   Computer: ${computerWinArray.length}`);
        console.log("-----------");
        winner()
        return;

}

    /* IF PLAYER SELECTS SCISSORS: */

function storePlayerChoiceScissors () {
    let playerChoice = "player-scissors";
    console.log(playerChoice)

    ComputerChoice = getComputerChoice();
    console.log(ComputerChoice)

    if (ComputerChoice == "computer-rock" && playerChoice == "player-scissors") {
        console.log("--> You lose!");
        computerWinArray.push('computerWin');
        console.log("STANDING:");
        console.log(`   Human: ${humanWinArray.length}`);
        console.log(`   Computer: ${computerWinArray.length}`);
        console.log("-----------");
        winner();
        return;
    } 
    
    else if (ComputerChoice == "computer-scissors" && playerChoice == "player-scissors") {
        console.log("--> Draw!");
        drawArray.push("draw");
        console.log("STANDING:");
        console.log(`   Human: ${humanWinArray.length}`);
        console.log(`   Computer: ${computerWinArray.length}`);
        console.log("-----------");
        winner();
        return;
    } 
    
    else 
        console.log("--> You win!")
        humanWinArray.push('humanWin');
        console.log("STANDING:");
        console.log(`   Human: ${humanWinArray.length}`);
        console.log(`   Computer: ${computerWinArray.length}`);
        console.log("-----------");
        winner();
        return;

        
}

        /* IF PLAYER SELECTS PAPER: */

function storePlayerChoicePaper () {
    let playerChoice = "player-paper";
    console.log(playerChoice)

    ComputerChoice = getComputerChoice();
    console.log(ComputerChoice)

    if (ComputerChoice == "computer-rock" && playerChoice == "player-paper") {
        console.log("--> You win!")
        humanWinArray.push('humanWin');
        console.log("STANDING:");
        console.log(`   Human: ${humanWinArray.length}`);
        console.log(`   Computer: ${computerWinArray.length}`);
        console.log("-----------");
        winner();
        return;
    } 
    
    else if (ComputerChoice == "computer-scissors" && playerChoice == "player-paper") {
        console.log("--> You lose!");
        computerWinArray.push('computerWin');
        console.log("STANDING:");
        console.log(`   Human: ${humanWinArray.length}`);
        console.log(`   Computer: ${computerWinArray.length}`);
        console.log("-----------");
        winner();
        return;
    } 
    
    else 
        console.log("--> Draw!")
        drawArray.push("draw");
        console.log("STANDING:");
        console.log(`   Human: ${humanWinArray.length}`);
        console.log(`   Computer: ${computerWinArray.length}`);
        console.log("-----------");
        winner();
        return;
        
}

// RESULT UI:

/* 
- player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
- For now, remove the logic that plays exactly five rounds.
- Create three buttons, one for each selection. 
- Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
- Add a div for displaying results and change all of your console.logs into DOM methods.
- Display the running score, and announce a winner of the game once one player reaches 5 points.
- You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

*/ 

const humanPoints = document.createElement('p')
const computerPoints = document.createElement('p')
const resultContainer = document.querySelector('.resultUI')
const button = document.querySelector('.button-container')

humanPoints.classList.add('resultUI')   
computerPoints.classList.add('resultUI')

resultContainer.appendChild(humanPoints)
resultContainer.appendChild(computerPoints)

button.addEventListener('click', function () {
  
humanPoints.textContent = 'Human points: ' + `${humanWinArray.length}`;
computerPoints.textContent = 'Computer points: ' + `${computerWinArray.length}`;

})


// First draft of next iteration, where the winner is declared:
// (does not work yet)

let PlayerRoundWins = humanWinArray.length
let ComputerRoundWins = computerWinArray.length 
let totalRoundsPlayed = PlayerRoundWins + ComputerRoundWins
const clickEvent = button.addEventListener('click', function () {})



function declareWinner (PlayerRoundWins, ComputerRoundWins) {
    for (let i = 0; i<totalRoundsPlayed; i++) {

    if (PlayerRoundWins == 5) {console.log("declared winner: player!")}
    if (ComputerRoundWins == 5) {console.log("declared winner: computer!")}
}
}

// Score counter works, BUT:
// Fails to refresh properly, i.e. does not work for round 2 onwards. 
// Does not display clearly who won. 




