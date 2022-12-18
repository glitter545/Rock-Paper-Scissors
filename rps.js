
//1. make a new variable and store the value of choices
//2. get a random number between 1 to 3
//3. make a new variable that selects it from the array


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()  * 3);
    return choices[randomNumber]; 
};