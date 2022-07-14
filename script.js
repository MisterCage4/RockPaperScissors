function compuerPlay(){
    let computerChoice;
    let choice = ('rock', 'paper', 'scissors');
    let randomChoice;
    while(randomChoice<2){
        randomChoice = Math.floor(Math.random()*100);
    }
    computerChoice = choice[randomChoice];
    return computerChoice;
}
compuerPlay();
console.log(computerChoice);