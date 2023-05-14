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

let PlayerRoundWins = 0;
let ComputerRoundWins = 0;
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




