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

    FIRST ITERATION:
    receive input from buttons and print result in console.
    */


let scissors;

let paper; 

    if (document.getElementById("rock-button"))
        {
     console.log("rock")
}



/* RANDOM GENERATOR: */

function getComputerChoice() {

    let options = ["rock", "scissors", "paper"]
    
    const randomChoice = Math.floor(Math.random() * options.length)
    
    return options[randomChoice]
    
}

console.log(getComputerChoice())

/* OPTION BUTTONS: */

    let clickRock = document.getElementById("rockButton");

    clickRock.addEventListener("click", () => {
        return(clickRock == true)
    })

    let clickScissors = document.getElementById("scissorsButton");

    clickScissors.addEventListener("click", () => {
        console.log("scissors!")
    })

    let clickPaper = document.getElementById("paperButton");

    let paperPlay;

    paperButton.onclick = () => {
        console.log("paper selected");
        paperPlay = "1";
    }

    console.log(paperPlay)

 

/* GAME ENGINE */

if (clickRock) {console.log("rockzzz")}


/* if (getComputerChoice() == "rock") {
    console.log("Rock") 
    } else {console.log("not rock")
} */
