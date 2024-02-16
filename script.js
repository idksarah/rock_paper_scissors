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

function getRoundWinner(userResponse, computerResponse/* not needed?*/) {
  computerResponse = getComputerResponse();
  userResponse = userResponse.toLowerCase(); //unnecessary
  if (computerResponse == userResponse) { //strictly equal?
    alert("Tie! Try again.");
    return; //does this end the function??
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

/*function game() {
  let userPoints = 0;
  let computerPoints = 0;

  for (let i = 0; i < 5; i++){
    getRoundWinner();
    if (userWin) {
      userPoints ++;
    } else {
      computerPoints ++;
    }
    console.log("User:" + userPoints + " Computer:" + computerPoints);
  }

  if (userPoints > computerPoints) {
    console.log("Congrats! You Won");
  } else {
    console.log("Aw! You Lost");
  }

  let playAgain = prompt("Play again? Enter 'Yes' or 'No'");
  playAgain = playAgain.toLowerCase();
  if (playAgain == "yes") {
    game();
  }
}*/

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

buttons.addEventListener("click", function() {
  if(rock.click) {
    if(getRoundWinner("rock")) {
      userPoints++;
    }else {
      computerPoints++;
    }
  }else if(paper.click) {
    if(getRoundWinner("paper")) {
      userPoints++;
    }else {
      computerPoints++;
    }
  }else {
    if(getRoundWinner("scissors")) {
      userPoints++;
    }else {
      computerPoints++;
    }
  }
  updatePoints();
});
