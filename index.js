let playerScore = 0;
let computerScore = 0;
let round = 0;
const moves = ['rock', 'paper', 'scissors'];
const winningConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}
const resultContainer = document.getElementById("result-container")
function getComputerChoice() {
    const randomValue = Math.floor(Math.random() * moves.length);
    console.log({randomValue})
    return moves[randomValue];
}
function getUserChoice() {
    return prompt('Rock, Paper or Scissors?');
};
function playRound(humanChoice, computerChoice) {
    let result = 'draw';
    const playerMove = humanChoice.toLowerCase();
    const computerMove = computerChoice.toLowerCase();
    if(playerMove === computerMove){
        console.log(`You drawed, your move: ${playerMove}, computer move: ${computerMove}`);
    }
    else if(winningConditions[playerMove] === computerMove){
      console.log(`you win! ${playerMove} beats ${computerMove}`)
      result= 'win'
    }
    else {
      console.log(`you lose! ${computerMove} beats ${playerMove}`);
      result = 'lose'
    }
    handleRound(result);
};
function playGame(e) {
    const userChoice = this.innerText;
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
}
function resetScores () {
    localStorage.setItem('playerScore', 0)
    localStorage.setItem('computer', 0)
    localStorage.setItem('round', 0)

    round = 0;
    playerScore = 0;
    computerScore = 0;
}
function handleRound (result) {

    const resultContainer = document.getElementById('result-container');
    
    if(round == 5){
        resultContainer.innerHTML = playerScore == computerScore ? 'drawed :)' : playerScore > computerScore ? 'player wins!!' : 'computer wins';
        resetScores();
        return;
    }
    round += 1;
    if(result === 'win'){
        playerScore +=1;
        localStorage.setItem('playerScore', playerScore);
    }else if(result === 'lose'){
        computerScore +=1;
        localStorage.setItem('computer', computerScore);
    }
    localStorage.setItem('round', round);
    resultContainer.innerText = `player: ${playerScore}, computer: ${computerScore}`
}

//create buttons
const buttonContainer = document.getElementById('buttons-container')
buttonContainer.setAttribute('style', 'display: flex; gap: 10px;');
for(let i=0; i < moves.length; i++){
    const button = document.createElement('button')
    button.innerText = moves[i];
    button.addEventListener('click', playGame)
    buttonContainer.appendChild(button)
}
const button = document.createElement('button')
