function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    index = Math.floor(Math.random() * 3);
    return choices[index]
}

function getHumanChoice(){
    choice = prompt("Enter your choice: ");
    return choice;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) console.log("Tie! Try again.");

    if (computerChoice === "rock" && humanChoice === "paper" || 
        computerChoice === "scissors" && humanChoice === "rock" || 
        computerChoice === "paper" && humanChoice === "scissors") {

            console.log("You win!");
            humanScore += 1;
        }

    if (humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "scissors" && computerChoice === "rock" || 
        humanChoice === "paper" && computerChoice === "scissors") {

            console.log("You lose!");
            computerScore += 1;
        }
}

function playGame() {
    
    let i = 0;
    while(i < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        ++i;
    }

    if(humanScore > computerScore) console.log("You are the winner!");
    if(humanScore < computerScore) console.log("You are the loser!");
    if(humanScore === computerScore) console.log("It's a tie!");
}

playGame();