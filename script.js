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

let playerSelection = ''