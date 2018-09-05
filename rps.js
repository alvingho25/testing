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

var score = 0;

for(var i = 0; i < 5; i++){
    playerSelection = prompt(`Round ${i+1} Choose rock or paper or scissors`).toLowerCase();
    computerSelection = random();
    let hasil = play(playerSelection, computerSelection);
    if(hasil == "win"){
        score++
        console.log(`You Win! ${playerSelection} beat ${computerSelection}`)
    }
    else if(hasil == "lose"){
        console.log(`You Win! ${computerSelection} beat ${playerSelection}`)
    }
    else{
        console.log("Draw! Try Again");
        i--;
    }
}
console.log(`Round End! Your Score: ${score}`)