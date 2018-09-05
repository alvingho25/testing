function play(playerSelection, computerSelection){
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "win";
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        return "lose";
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "lose";
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        return "win";
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "lose";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "win";
    }
    else{
        return "draw";
    }
}

function random(){
    let rand = Math.floor(Math.random() * 3) + 1;
    console.log(rand);
    if(rand == 1){
        return "rock";
    }
    else if(rand == 2){
        return "paper";
    }
    else{
        return "scissors"
    }
}

var playerScore = 0;
var computerScore = 0;
for(var i = 0; i < 10; i++){
    playerSelection = prompt(`Round ${i+1} Choose rock or paper or scissors`).toLowerCase();
    computerSelection = random();
    let hasil = play(playerSelection, computerSelection);
    if(hasil == "win"){
        playerScore++
        console.log(`You Win! ${playerSelection} beat ${computerSelection}`)
    }
    else if(hasil == "lose"){
        computerScore++;
        console.log(`You Win! ${computerSelection} beat ${playerSelection}`)
    }
    else{
        console.log("Draw! Try Again");
        i--;
    }
}

console.log(`Player ${playerScore} against Computer ${computerScore}`)
if(playerScore > computerScore){
    console.log("Congratulations you win the game")
}
else if(playerScore < computerScore){
    console.log("BOOOOO you lose against computer? pathetic")
}
else{
    console.log("not bad you draw against computer")
}