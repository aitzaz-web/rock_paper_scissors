let humanScore = 0;
let computerScore = 0;
const results = document.querySelector(".results")
let roundsPlayed = 0;

const calcScore = document.querySelector("#container");
const score = document.createElement("h3")
calcScore.appendChild(score);

const rounds = document.createElement("h4");
calcScore.appendChild(rounds);



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
        const result1 = document.createElement("p")
        result1.textContent = `Tie game, both of you chose ${humanChoice}`
        results.appendChild(result1)

    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        const result2 = document.createElement("p")
        result2.textContent = `You win! ${humanChoice} beats ${computerChoice}`
        results.appendChild(result2)
        humanScore++;
    } else {

        const result3 = document.createElement("p")
        result3.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
        results.appendChild(result3)
        computerScore++;
    }
    updateScore();
    updateRounds();

    checkWin();
    
}



function checkWin() {
    if (roundsPlayed >= 5) {
        setTimeout(() => {
            let message;
            if (humanScore > computerScore) {
                message = "Congrats! You won";
            } else if (humanScore < computerScore) {
                message = "You lost";
            } else {
                message = "Draw";
            }
            alert(message);
            // Optionally, you can reset the game here
            resetGame();
        }, 100);  // Timeout duration can be adjusted as needed
        
    }
}




function updateScore() {
    score.textContent = `Your score is ${humanScore} and the computer's score is ${computerScore}`;
    
}

function updateRounds() {

    rounds.textContent = `Rounds played: ${roundsPlayed+1}`
    roundsPlayed++
    
}


function playGame() {

    score.textContent = `Your score is 0 and the computer's score is 0`;
    rounds.textContent = 'Rounds played: 0'

    const buttons = document.querySelectorAll("#container button");
    
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            playRound(btn.id, getComputerChoice());
            
        }) 
    });

    
}

function resetGame() {
    humanScore =0;
    computerScore = 0;
    roundsPlayed = 0;
    score.textContent = `Your score is 0 and the computer's score is 0`;
    rounds.textContent = 'Rounds played: 0'
    results.innerHTML = '';  // Clear previous results
}
console.log(playGame());