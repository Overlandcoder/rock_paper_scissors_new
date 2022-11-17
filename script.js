let getComputerChoice = () => {
  choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*choices.length)];
}

let playerScore = 0;
let computerScore = 0;
let updateScore = () => score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
let roundOver = () => (playerScore >= 5 || computerScore >= 5);

let playRound = (playerSelection) => {
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    roundWinner.textContent = `Tie - ${playerSelection} vs ${computerSelection}`;
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")) {
    playerScore += 1;
    roundWinner.textContent = `Player wins - ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore += 1;
    roundWinner.textContent = `Computer wins - ${computerSelection} beats ${playerSelection}`;
  }
  updateScore();
  if (roundOver()) declareWinner();
}

function declareWinner() {
  if (playerScore === 5) {
    gameWinner.textContent = "Player wins the game!";
  } else if (computerScore === 5) {
    gameWinner.textContent = "Computer wins the game!";
  }
}

const playButtons = document.querySelectorAll('.player-selection');
const roundWinner = document.querySelector('.round-winner');
const gameWinner = document.querySelector('.game-winner');
const score = document.querySelector('.score');

playButtons.forEach(btn => btn.addEventListener('click', () => {
  let playerSelection = btn.textContent.toLowerCase();
  playRound(playerSelection);
}))
