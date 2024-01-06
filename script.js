function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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

function getUserResponse() {
  userResponse = prompt("Rock, paper, or scissors?");
  userResponse = userResponse.toLowerCase();
  if (userResponse == "rock" || userResponse == "paper" || userResponse == "scissors") {
  } else {
    alert("Please choose one of the following:");
    getUserResponse();
  }
  return(userResponse);
}

let userWin;

function getRoundWinner(computerResponse, userResponse) {
  computerResponse = getComputerResponse();
  userResponse = getUserResponse();
  if (computerResponse == userResponse) {
    alert("Tie! Try again.");
    getRoundWinner(); 
  } else if (computerResponse == "rock") {
    if (userResponse == "paper") {
      userWin = true; 
      alert("You Win! Paper beats Rock")
    }
    else {
      userWin = false;
      alert("You Lose! Rock beats Scissors") 
    }
  } else if (computerResponse == "paper") {
    if (userResponse == "scissors") {
      userWin = true;
      alert("You Win! Scissors beats Paper")
    } else {
      userWin = false;
      alert("You Lose! Paper beats Rock")
    }
  } else {
    if (userResponse == "rock") {
      userWin = true;
      alert("You Win! Rock beats Scissors")
    } else {
      userWin = false;
      alert("You Lose! Scissors beats Paper")
    }
  }
  return userWin;
}

function game() {
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
}