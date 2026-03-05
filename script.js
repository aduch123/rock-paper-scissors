function getComputerChoice() {
    choices = ["rock", "paper", "scissor"];
    index = Math.floor(Math.random() * 3);
    return choices[index]
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) console.log("Tie! Try again.");

    if (computerChoice === "rock" && humanChoice === "paper" || 
        computerChoice === "scissor" && humanChoice === "rock" || 
        computerChoice === "paper" && humanChoice === "scissor") {

            console.log("You win!");
            humanScore += 1;
        }

    if (humanChoice === "rock" && computerChoice === "paper" || 
        humanChoice === "scissor" && computerChoice === "rock" || 
        humanChoice === "paper" && computerChoice === "scissor") {

            console.log("You lose!");
            computerScore += 1;
        }
}

function cont() {
    const buttons = document.querySelector(".btns");
    const compChoiceImg = document.createElement("img");
    const compChoiceContainer = document.getElementById("comp-choice");
    const contBtn = document.getElementById("cont-btn");
    
    compChoiceImg.src = "dot.png";
    compChoiceContainer.children[0].remove();
    compChoiceContainer.appendChild(compChoiceImg);
    compChoiceContainer.style.cssText = "width: 50px; height: 40px;";

    for(let btn of buttons.children) {
        btn.style.display = "block"
        btn.style.cssText = "width: 50px; height: 50px;";
    }

    contBtn.remove();    
}

function reset() {
    const score = document.getElementById("score");

    cont();

    for(let s of score.children) {
        s.children[0].children[0].textContent = 0;
    }

    humanScore = 0;
    computerScore = 0;

}

function endGame(winner) {
    const winnerPopUP = document.getElementById("winner-pop-up");
    const gameWindow = document.getElementById("game-window");

    winnerPopUP.children[2].addEventListener("click", event => {
        reset();

        winnerPopUP.style.display = "none";
        gameWindow.style.display = "block";
    });

    switch(winner) {
        case "user":
            winnerPopUP.children[0].innerHTML = "Congrats&#127881;&#127881;&#127881;";
            winnerPopUP.children[1].textContent = "You are the winner!";
            break;
        case "computer":
            winnerPopUP.children[0].innerHTML = "Sorry&#128532;";
            winnerPopUP.children[1].textContent = "Computer is the winner!";
            break;
        case "tie":
            winnerPopUP.children[0].innerHTML = "Sorry&#128529;";
            winnerPopUP.children[1].textContent = "There is no a winner!";
            break;
    }

    winnerPopUP.style.display = "block";
    gameWindow.style.display = "none";
}

function playGame() {
    const buttons = document.querySelector(".btns");

    buttons.addEventListener("click", event => {
        const humanChoice = event.target.alt;
        const computerChoice = getComputerChoice();
        const compChoiceContainer = document.getElementById("comp-choice");
        const compChoiceImg = document.createElement("img");
        const score = document.getElementById("score");
        const contBtn = document.createElement("div");
        const vs = document.getElementById("vs");

        compChoiceImg.src = computerChoice + ".jpg";
        contBtn.id = "cont-btn";
        contBtn.innerText = "Continue";
        contBtn.addEventListener("click", cont);

        for(let btn of buttons.children) {
            if(btn.classList[0] != humanChoice.toLowerCase())btn.style.display = "none"
            else btn.style.cssText = "width: 100px; height: 100px;";
        }
    
        compChoiceContainer.children[0].remove();
        compChoiceContainer.appendChild(compChoiceImg);
        compChoiceContainer.style.cssText = "width: 100px; height: 100px;";

        playRound(humanChoice, computerChoice);
        for(let s of score.children) {
            switch(s.id) {
                case "user-score":
                    s.children[0].children[0].textContent = humanScore;
                    break;
                case "comp-score":
                    s.children[0].children[0].textContent = computerScore;
                    break;
            }
        }
        if (humanScore >= 5 || computerScore >= 5) {
            if(humanScore > computerScore) endGame("user");
            if(humanScore < computerScore) endGame("computer");
            if(humanScore === computerScore) endGame("tie");
        };
        vs.appendChild(contBtn);
    });
}

playGame();
