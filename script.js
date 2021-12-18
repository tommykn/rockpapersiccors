// First we created the variable num that will 
// pick a random number between 0 - 99 

let num = Math.floor(Math.random() * 100);

/* the functino computerPlay will use num to randomly return
rock, paper, or scissors */

function computerPlay() {
    num = Math.floor(Math.random() * 100);
    if (num <= 33) {
        return 'rock';
    } else if (num > 33 && num <= 66) {
        return 'paper';
    } else
    return 'scissors';
}
// Then we set a varible playerselection equal to ''

let playerSelection = ''

// fundtion getplayerselection asked the user for input then it makes sure its the 
// right input and then convents it to all lowercase and sets it equal to playerselection
// if they still didn't enter the right input it just repeats the function.

function getPlayerSelection() {
    let x = prompt("Please type in Rock, Paper, or Scissors.").toLowerCase();
    if (x != 'rock' && x != 'paper' && x != 'scissors') {
        x = prompt("You made a typo please enter in Rock, Paper, or Scissors").toLowerCase();
    }

    if (x === 'rock') {
        return 'rock';
    } else if (x === 'paper') {
        return 'paper';
    } else if (x === 'scissors') {
        return 'scissors';
    } else {
        return getPlayerSelection();
    }
}
let computerSelection = computerPlay();

/* we create the playround function with takes in playerselction and
computer selection then sets playerselction equal to the getPlayerSelection function
and computerSElection equeal to computerPlay. Next it will comapare all possible
outcome and return the conssidonding string that says who won with if statement. If 
there is a tie it will retuen playRound so they will play agian.*/

/* Create a var that keeps trace of wins for player and one for computer.*/

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerSelection();
    computerSelection = computerPlay();
    console.log("You choose:", playerSelection);
    console.log("Computer choose:", computerSelection);

    if (computerSelection === 'rock' && playerSelection === 'scissors') {
        computerWins++;
        console.log("Computer Wins! Rock beats scissors.");
        return "Computer Wins! Rock beats scissors.";
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        computerWins++;
        console.log("Computer Wins! Paper beats rock.");
        return "Computer Wins! Paper beats rock.";
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        computerWins++;
        console.log("Computer Wins! Scissors beats paper.");
        return "Computer Wins! Scissors beats paper.";
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerWins++;
        console.log("You Win! Rock beats scissors.");
        return "You Win! Rock beats scissors.";
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerWins++;
        console.log("You Win! Paper beats rock.");
        return "You Win! Paper beats rock.";
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        playerWins++;
        console.log("You win! Scissors beats paper.");
        return "You Win! Scissors beats paper.";
    } else {
        alert("It's a tie! Click ok to play again!");
        return playRound(playerSelection, computerSelection);
    }
}


/* create a game function that uses a for loop to run the playRound function 
five times then if playerWins >= 3 alert you win the best of five else alert 
computer wins the best of five*/

function game() {
    computerWins = 0;
    playerWins = 0;
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    console.log(playerWins);
    console.log(computerWins);

    if (playerWins >= 3) {
        alert(`Congratulations you won the best of five! The score was computer: ${computerWins} you: ${playerWins}`);
    } else {
        alert(`Sorry the computer won the best of five. The score was computer: ${computerWins} you: ${playerWins}`);
    }
}


