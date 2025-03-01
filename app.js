let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options= ["rock", "paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("The game is Draw")
    msg.innerText ="GAME DRAW!";
    msg.backgroundColor = "#03344f";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("YOU WIN");
        msg.innerText =`YOU WIN! Your ${userChoice} BEATS ${compChoice}`;
        msg.style.backgroundColor= "green";
    }else{
        console.log("YOU LOSS");
        msg.innerText =`YOU LOST ${compChoice} BEATS Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
        

};

const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp Choice =",compChoice)

    if(userChoice===compChoice){
        //Draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false :true;
        }else if(userChoice === "paper"){
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    
    });
});