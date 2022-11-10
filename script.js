let getComputerChoice = () => {
  choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*choices.length)];
}

let playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return `Tie - ${playerSelection} vs ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `Player wins - ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return `Computer wins - ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `Computer wins - ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `Player wins - ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `Player wins - ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `Computer wins - ${computerSelection} beats ${playerSelection}`;
  }
}

let game = () => {
  for(i = 1; i <= 5; i++) {
    let playerSelection = prompt("Rock paper scissors?", "");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
