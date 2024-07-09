console.log("Hello World")

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = ['rock','scissors', 'paper'];
    let x = Math.random()*3;
    return choice[Math.floor(x)];
}

function getHumanChoice() {
    let userChoice = prompt("input choice");
    if (userChoice == "rock"){
        return userChoice
    }
    if (userChoice == "scissors"){
        return userChoice
    }
    if (userChoice == "paper"){
        return userChoice
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Tie game, both of you chose ${humanChoice}`);
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {

    for (let i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        return "Congrats! You won"
    }

    if (humanScore < computerScore){
        return "You lost"
    }

    else {
        return "Draw"
    }
 
}

console.log(playGame());