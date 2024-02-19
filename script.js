function getRandomInt(max) {
  return Math.floor(Math.random() * max); //idk bout this one chief
}

let computerResponse, userResponse;

function getComputerResponse() {
  computerResponse = getRandomInt(3);
  if (computerResponse == 0) {
    computerResponse = "rock";
  } else if (computerResponse == 1) {
    computerResponse = "paper";
  } else {
    computerResponse = "scissors";
  }
  return(computerResponse);
}

let userWin;

function getRoundWinner(userResponse) {
  computerResponse = getComputerResponse();
  if (computerResponse == userResponse) {
    alert("Tie! Try again.");
    userWin = null;
    return userWin;
  } else if (computerResponse == "rock") {
    if (userResponse == "paper") {
      userWin = true; 
      alert("You Win! Paper beats Rock");
    } else {
      userWin = false;
      alert("You Lose! Rock beats Scissors"); 
    }
  } else if (computerResponse == "paper") {
    if (userResponse == "scissors") {
      userWin = true;
      alert("You Win! Scissors beats Paper");
    } else {
      userWin = false;
      alert("You Lose! Paper beats Rock");
    }
  } else {
    if (userResponse == "rock") {
      userWin = true;
      alert("You Win! Rock beats Scissors");
    } else {
      userWin = false;
      alert("You Lose! Scissors beats Paper");
    }
  }
  return userWin;
}

let body = document.querySelector("body");
let buttons = document.querySelector(".buttons");

let rock = document.createElement("button");
let paper = document.createElement("button");
let scissors = document.createElement("button");

rock.textContent = "rock!!!";
paper.textContent = "paper :33333";
scissors.textContent = "SCISSORS.";

buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);

let userPoints = 0;
let computerPoints = 0;
let userResults = document.createElement("p");
let computerResults = document.createElement("p");

let results = document.querySelector(".results");

function updatePoints () {
  userResults.textContent = "User Points: " + userPoints;
  computerResults.textContent = "Computer Points: " + computerPoints;
}

results.appendChild(userResults);
results.appendChild(computerResults);

let getWin;

buttons.addEventListener("click", function() {
  if(rock.click) {
    if(getWin = getRoundWinner("rock")) {
      userPoints++;
    }else if (getWin == null) {
      return;
    }else {
      computerPoints++;
    }
  }else if(paper.click) {
    if(getRoundWinner("paper")) {
      userPoints++;
    }else if (getWin == null) {
      return;
    }else {
      computerPoints++;
    }
  }else {
    if(getRoundWinner("scissors")) {
      userPoints++;
    }else if (getWin == null) {
      return;
    }else {
      computerPoints++;
    }
  }
  updatePoints();

  if(userPoints == 5 || computerPoints == 5) {
    if (userPoints > computerPoints) {
      alert("Congrats! You Won");
    } else {
      alert("You Lost");
    }
  }
});
  