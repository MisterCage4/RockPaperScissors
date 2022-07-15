let computerChoice;
function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    let randomChoice;
    randomChoice = Math.floor(Math.random()*100);
    while(randomChoice>2){
        randomChoice = Math.floor(Math.random()*100);
    }
    console.log(randomChoice);
    computerChoice = choice[randomChoice];
    return computerChoice;
}

function playRound(playerselection, computerselection){
    if(playerselection == "rock"){
        if(computerselection == "rock"){
                document.getElementById('result').innerHTML += "Draw!";
                document.getElementById('VsMatch').innerHTML += "Rock vs Rock";
        }else if(computerselection == "paper"){
            document.getElementById('result').innerHTML += "Paper beats Rock, Computer wins!";
            document.getElementById('VsMatch').innerHTML += "Rock vs Paper";
        }else if(computerselection == "scissors"){
            document.getElementById('result').innerHTML += "Rock beats Scissors, Player wins!";
            document.getElementById('VsMatch').innerHTML += "Rock vs Scissors";
        }
    }
    if(playerselection == "paper"){
        if(computerselection == "rock"){
                document.getElementById('result').innerHTML += "Paper beats Rock, Player wins!";
                document.getElementById('VsMatch').innerHTML += "Paper vs Rock";
        }else if(computerselection == "paper"){
            document.getElementById('result').innerHTML += "Draw!";
            document.getElementById('VsMatch').innerHTML += "Paper vs Paper";
        }else if(computerselection == "scissors"){
            document.getElementById('result').innerHTML += "Scissors beats Paper, Computer wins!";
            document.getElementById('VsMatch').innerHTML += "Paper vs Scissors";
        }
    }
    if(playerselection == "scissors"){
        if(computerselection == "rock"){
                document.getElementById('result').innerHTML += "Rock beats Scissors, Computer Wins!";
                document.getElementById('VsMatch').innerHTML += "Scissors vs Rock";
        }else if(computerselection == "paper"){
            document.getElementById('result').innerHTML += "Scissors beats Paper, Player wins!";
            document.getElementById('VsMatch').innerHTML += "Scissors vs Paper";
        }else if(computerselection == "scissors"){
            document.getElementById('result').innerHTML += "Draw!";
            document.getElementById('VsMatch').innerHTML += "Scissors vs Scissors";
        }
    }
}

let playerchoice = prompt("Pick Rock, Paper, or Scissors: ");