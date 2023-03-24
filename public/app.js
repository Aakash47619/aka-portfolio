const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const compRock = document.getElementById("comp-rock");
const compPaper = document.getElementById("comp-paper");
const compScissors = document.getElementById("comp-scissors");

const result = document.getElementById("result");

const options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function updateGame(playerSelection) {
  const computerSelection = computerPlay();
  switch (computerSelection) {
    case "Rock":
      compRock.style.display = "block";
      compPaper.style.display = "none";
      compScissors.style.display = "none";
      break;
    case "Paper":
      compRock.style.display = "none";
      compPaper.style.display = "block";
      compScissors.style.display = "none";
      break;
    case "Scissors":
      compRock.style.display = "none";
      compPaper.style.display = "none";
      compScissors.style.display = "block";
      break;
  }
  const roundResult = playRound(playerSelection, computerSelection);
  result.textContent = roundResult;
  result.classList.remove("win", "lose", "tie");
  if (roundResult === "You win!") {
    result.classList.add("win");
  } else if (roundResult === "Computer wins!") {
    result.classList.add("lose");
  } else {
    result.classList.add("tie");
  }
}

rock.addEventListener("click", () => {
  updateGame("Rock");
});

paper.addEventListener("click", () => {
  updateGame("Paper");
});

scissors.addEventListener("click", () => {
  updateGame("Scissors");
});
