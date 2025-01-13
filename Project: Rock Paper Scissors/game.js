let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundCounter = 0;

function playRound(){
    const btnRock = document.querySelector("#btnRock");
    const btnPaper = document.querySelector("#btnPaper");
    const btnScissors = document.querySelector("#btnScissors");

    let userChoice = null; 

    btnRock.addEventListener("click", ()=>{
        userChoice = "Rock";
        playGame(userChoice, getComputerChoice());
    });

    btnPaper.addEventListener("click", ()=>{
        userChoice = "Paper";
        playGame(userChoice, getComputerChoice());
    });

    btnScissors.addEventListener("click", ()=>{
        userChoice = "Scissors";
        playGame(userChoice, getComputerChoice());
    });

    console.log("Game Begin");
}

function getComputerChoice(){
    let choiceDeterminer = Math.random();
    // console.log(choiceDeterminer); 
    if (choiceDeterminer >= 0.66){
        return "Rock";
    }else if (choiceDeterminer >= 0.33){
        return "Paper";
    }else{
        return "Scissors";
    }
    /* Logic was changed to represent each thirds of the math random range
       Math random doesn't return 0 as often leading to Scissors 
       to be almost non existent
    */
}

function playGame(humanChoice, computerChoice){
    roundCounterDisplay();
    if (humanChoice === computerChoice){
        drawScore++;
        displayRoundResult("Draw");
    }else if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")){
        humanScore++;
        displayRoundResult("Human Wins This Round");
    }else{
        computerScore++;
        displayRoundResult("Computer Wins This Round")
    }
    roundCounterDisplay(roundCounter + 1);

    console.log("Computer: "+ computerChoice);
    console.log("Human: "+ humanChoice);


    displayScore(humanScore, computerScore, drawScore);
    console.log("Human: "+ humanScore); 
    console.log("Computer: "+ computerScore);    
    console.log("Draw: "+ drawScore);
    roundCounter++
    
    if (roundCounter == 6){
        if(humanScore > computerScore){
            console.log("\nHuman Wins!");
        }else if (computerScore > humanScore){
            console.log("\nComputer Wins!");
        }else {
            console.log("\nThe Game is Draw!");
        }
        roundCounter = 0;
        humanScore, computerScore, drawScore = 0;

        // go to victory screen
    }
}

function playAgain(){

}

function victoryScreen(){
    
}

function roundCounterDisplay(roundCount){
    const roundCounterBanner = document.querySelector("#round-counter");
    roundCounterBanner.textContent = "Round Count: " + roundCount;
}

function displayRoundResult(roundWinner){
    const announcementBar = document.querySelector("#announcement-bar");
    announcementBar.textContent = roundWinner;
}

function displayScore(humanScore, computerScore, drawScore){
    const humanScoreText = document.querySelector("#human-score");
    const computerScoreText = document.querySelector("#computer-score");
    const drawScoreText = document.querySelector("#draw-score");

    humanScoreText.textContent = "Human: " + humanScore;
    computerScoreText.textContent = "Computer: " + computerScore;
    drawScoreText.textContent = "Draw: " + drawScore;

}

playRound();

