let playerScore = 0;
let computerScore = 0;
let round = 0;
const moves = ['rock', 'paper', 'scissors'];
const winningConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}
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
        alert(`You drawed, your move: ${playerMove}, computer move: ${computerMove}`);
    }
    else if(winningConditions[playerMove] === computerMove){
      alert(`you win! ${playerMove} beats ${computerMove}`)
      result= 'win'
    }
    else {
      alert(`you lose! ${computerMove} beats ${playerMove}`);
      result = 'lose'
    }
    handleRound(result);
};
function playGame() {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice);
}
function handleRound (result) {
    round += 1;
    if(result === 'win'){
        playerScore +=1;
        localStorage.setItem('playerScore', playerScore);
    }else if(result === 'lose'){
        computerScore +=1;
        localStorage.setItem('computer', computerScore);
    }
}
while(round<=4){
    console.log({playerScore, computerScore, round});
    playGame();
}