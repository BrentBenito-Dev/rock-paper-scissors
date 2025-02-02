let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundCounter = 0;
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

const roundCounterBanner = document.querySelector("#round-counter");
const announcementBar = document.querySelector("#announcement-bar");

const humanScoreText = document.querySelector("#human-score");
const computerScoreText = document.querySelector("#computer-score");
const drawScoreText = document.querySelector("#draw-score");

const btnPlayAgain = document.querySelector("#btnPlayAgain");

function playRound(){
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
        // go to victory screen
        victoryScreen();

    }
    
}

function playAgain(){
    btnPlayAgain.style.visibility = "visible";

    btnPlayAgain.addEventListener("click", ()=>{
        humanScore = 0;
        computerScore = 0;
        drawScore = 0;
        roundCounter = 0; 
        roundCount = roundCounter + 1;

        announcementBar.textContent = "";
        roundCounterBanner.textContent = "Round Count: " + roundCount;
        announcementBar.style.color="#1985A1";

        humanScoreText.textContent = "Human: " + humanScore;
        computerScoreText.textContent = "Computer: " + computerScore;
        drawScoreText.textContent = "Draw: " + drawScore;

        btnRock.disabled = false;
        btnPaper.disabled = false;
        btnScissors.disabled = false;

        btnPlayAgain.style.visibility = "hidden";

    });
}

function victoryScreen(){
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    let winnerAnnouncement;

    if (humanScore > computerScore){
        announcementBar.style.color = "green";
        winnerAnnouncement = "Congratulations, You Win!";
    }else if(computerScore > humanScore){
        announcementBar.style.color = "red";
        winnerAnnouncement = "You Lost!";
    }else{
        winnerAnnouncement = "It's a Draw!"
    }

    announcementBar.textContent = winnerAnnouncement;
    playAgain();

}

function roundCounterDisplay(roundCount){
    roundCounterBanner.textContent = "Round Count: " + roundCount;
}

function displayRoundResult(roundWinner){
    announcementBar.textContent = roundWinner;
}

function displayScore(humanScore, computerScore, drawScore){
    humanScoreText.textContent = "Human: " + humanScore;
    computerScoreText.textContent = "Computer: " + computerScore;
    drawScoreText.textContent = "Draw: " + drawScore;
}

playRound();

