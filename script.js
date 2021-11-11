let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let randomIntegers = Math.floor(Math.random() * 10);
  return randomIntegers;
}

const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
}

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    //Alert to prompt users if input is out of range.
    return window.alert('Please enter a number between 0 and 9');
  } else {
    let userDifference = getAbsoluteDistance(userGuess, targetNumber);
    let computerDifference = getAbsoluteDistance(computerGuess, targetNumber);

    if (userDifference < computerDifference) {
      return true;
    } else if (computerDifference < userDifference) {
      return false;
    } else {
      return true;
    }
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => {
  return currentRoundNumber++;
}
