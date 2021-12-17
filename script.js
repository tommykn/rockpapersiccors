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
        playerSelection = 'rock';
    } else if (x === 'paper') {
        playerSelection = 'paper';
    } else if (x === 'scissors') {
        playerSelection = 'scissors';
    } else {
        getPlayerSelection();
    }
}
