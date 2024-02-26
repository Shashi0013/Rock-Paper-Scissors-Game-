let userScore=0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice =() => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random()*3);
    return options[random];
}

const drawGame = () => {
    
    msg.innerText = "Game Was Draw! Play again.";
    msg.style.backgroundColor = "#081b131"
}

const showWinner = (userWin, choiceId, compChoice) => {
    if(userWin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compscorepara.innerText = compScore;
        msg.innerText = `Computer Win! ${compChoice} beats Your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
}
 
const playGame = (choiceId) => {
    console.log("user choice = ", choiceId);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(choiceId === compChoice) {
        drawGame();

    }else {
        let userWin = true ;
        if(choiceId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if(choiceId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, choiceId, compChoice);
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const choiceId = choice.getAttribute("id");
       playGame(choiceId)
    })
})