
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

    console.log(player);
    console.log(computer);
    if (winner === "Player") {
        return result = `You win! ${player} beats ${computer}!`;
    } else if (winner === "Computer") {
        return result = `You lose! ${computer} beats ${player}!`;
    } else {
        return result = `Its's a draw!`;
    }
   
    return result;
} ;

//game 
//play 5 rounds
// reports the winner or loser

//1. call playround function
//2. do function expressions as its paramaters
//3. console.log the results
//4. for loop
//5. until i >= 5
//6. stop the function, returns results

//set counts
// make a new count variable with an initial value
// make a variable for computer wins
// make a variable for player wins
// increment the count value after each loop
// when the number reaches the desired amount, stop
// if player or comp value are greater or lesser, print out winner
// print out the winner with their scores

//PLAYS 5 ROUNDS
/** 
function game() {

    let rounds = 0;
    let computerWins = 0;
    let playerWins = 0;
    let finalResult;

    for (let i = 1; i < 6; i++) {
        let player = playerSelection();
        let computer = getComputerChoice();
        rounds +=1;
        playResult = playRound(player,computer);
        if (playResult.includes("You win!")) {
            playerWins += 1;
        } else if (playResult.includes("You lose!")){
            computerWins += 1;
        }
        console.log("Round " + i);
        console.log(playerWins + " :",computerWins);
     }
     
     if (computerWins > playerWins) {
        finalResult = "Computer Wins!"
     } else if (computerWins < playerWins) {
        finalResult = "Player WIns!"
     } else {
        finalResult = "It's a draw!"
     }

     console.log("Player Score:" + playerWins );
     console.log("Computer Score:" + computerWins);

     return finalResult;
}
**/



















