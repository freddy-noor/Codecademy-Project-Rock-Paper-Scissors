//Player choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return userInput;
  } 
  else if (userInput === 'paper') {
    return userInput;
  } 
  else if (userInput === 'scissors') {
    return userInput;
  } 
  else if (userInput === 'bomb') {
    return userInput;
  }
  else {
    return console.log('Error!');
  }
};
 
// Computer choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
     return 'Error!';
     break;
  }
};
 
// Determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game was tie';
  }
 
  if (userChoice === 'bomb') {
    return 'User Won!';
  }
 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }
 
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }
 
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }
};
 
// To play game
const playGame = () => {
  let userChoice = getUserChoice('scissors');  // Change value here
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();
