
//1. make a new variable and store the value of choices
//2. get a random number between 1 to 3
//3. make a new variable that selects it from the array


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()  * 3);
    return choices[randomNumber]; 
};

//playround takes playerSelection and computerSelection as
//arguments, declares winner, case insensitive

//function expression getComputerChoice to var computerselection
 let computerSelection = getComputerChoice();

 //playerSelection
 //1. ask for user input and store it in a variable
 //2. use regular expressions to make the input case insensitive
 //3. check if the input is in the array
 //4. return error if not included 
 //5. store value in a new variable
 

// if it doesnt contain valid input, prompt again

 function playerSelection() {
    let input  = prompt("Enter 'Rock' , 'Paper' or 'Scissors'");
    let finalInput;

    const rockPattern = /rock/i;
    const paperPattern = /paper/i;
    const scissorsPattern = /scissors/i;

    if (rockPattern.test(input)) {
        finalInput = "Rock";
    } else if (paperPattern.test(input)) {
        finalInput = "Paper";
    } else if (scissorsPattern.test(input)) {
        finalInput = "Scissors";
    } else {
        finalInput = false;
    }

    if (!finalInput) {
        alert("Input was invalid, please enter again");
        return playerSelection();
    }

    return finalInput;
 };

//playround
// takes 2 arguments 
// creates conditions
// if theyre the same, draw
// if one of them wins, declares winner


/**Things You Should Know

Rock beats scissors, scissors beat paper, and paper beats rock.
Agree ahead of time whether you’ll count off “rock, paper, scissors, shoot” or just “rock, paper, scissors.”
 Use rock, paper, scissors to settle minor decisions or simply play to pass the time.
**/

function playRound(player,computer) {

    let winner;
    let result;
    
    if (player === "Rock" && computer === "Scissors" || 
    player === "Scissors" && computer === "Paper" ||
    player === "Paper" && computer === "Rock") {
        winner = "Player";
    } else if (computer === "Rock" && player === "Scissors" || 
    computer === "Scissors" && player === "Paper" ||
    computer === "Paper" && player === "Rock") {
        winner = "Computer";
    }

    if (winner === "Player") {
        return result = `You win! ${player} beats ${computer}!`;
    } else if (winner === "Computer") {
        return result = `You lose! ${computer} beats ${player}!`;
    } else {
        return result = `Its's a draw!`;
    }
    return result;
} ; playRound("Paper" , "Scissors");


