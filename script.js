/*
pseudo code

no.3
generate random number from 0-2
if 0 rock, if 1 paper, if 2 scissors
var computerAnswer = whatever happened

no.4
let userWin  if user wins, set true, if user loses, set false
take user input
make userInput all lower case
if computerAnswer == userInput
  tie! return to beginning of function
else if computerAnswer == rock 
  if userInput = paper, user wins
  if userInput = scissors, user loses
else if computerAnswer = paper
  if userInput = rock, user loses
  if userInput = scissors, user wins
else // or when computerAnswer = scissors
  if userInput = rock, user wins
  if userInput = paper, user loses

//make sure to return results

no.6
make variables to represent the computer and user points; start at 0
for loop, go 5 times
if user win = true, add 1 to the user's score
else add 1 to computer's score
if computerPoints > userPoints
  computer wins
else
  user wins
*/

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
    getRoundWinner(); //ties are rlly weird cause the comptuer wont generate a new resposne even though the user can?? idk i should be balbe to call the computer resposne function multiple times so idkk
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
  playAgain = playAgain.toLowerCase(); // idk if this needs paranetheses
  if (playAgain == "yes") {
    game();
  }
}