
// function game() {
//     let score = {'player': 0, 'computer': 0};
//     let rounds = 0;
//     // while (rounds < 5) {
//         const playerSelection = 'rock'//prompt("Please enter selection");
//         const computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//         rounds++;
//     // }
//     return rounds;
// }

let rounds = 1;
let playerScore = 0;
let computerScore = 0;

function computeResult (result) {
    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }
    rounds++;
}

function checkWin() {
    if (playerScore === 5) {
        alert("You won!");
        location.reload();
    } else if (computerScore === 5) {
        alert("You lost!");
        location.reload();
    }
}
// Query all the buttons
const buttons = document.querySelectorAll('button');
//for each button listen to click event and then info
//about the click. use the event.target.id to find the id of
//of the button and set that as the value of player selection.
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playerSelection = e.target.parentNode.id;
        const computerSelection = computerPlay();

        let result = playRound(computerSelection, playerSelection);

        computeResult(result);

        let score = document.querySelector("body > div:nth-child(2) > p:nth-child(1)");
        score.innerText = `PLAYER [${playerScore}]  :  [${computerScore}] COMPUTER`;

        let r = document.querySelector("body > div:nth-child(2) > p:nth-child(2)")
        r.textContent = `Round: ${rounds}`;

        checkWin();
    });
});



//console.log(playerChoice);

// Get random choice from computer
function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let selection = Math.floor(Math.random() * options.length);
    //console.log(options[selection]);
    return options[selection];
}

// Play a round of the game
function playRound(playerSelection, computerSelection) {
    let result = "";
    let player = playerSelection.toLowerCase();
    while (player != "rock" && player != "paper" && player != "scissors") {
        console.log(player);
        player = prompt("Please enter only 'Rock', 'Paper' or 'Scissors'");
    }
    let computer = computerSelection.toLowerCase();

    if (player === computer) {
        result = "Draw"
    } else if ((player === "paper" && computer === "rock")
        || (player === "rock" && computer === "scissors")
        || (player === "scissors" && computer === "paper")) {
        result = "Player";
    } else {
        result = "Computer";
    }
    if (result === "Player") {
        return `You win! ${player} beats ${computer}`;
    } else if (result === "Computer") {
        return `You lose! ${computer} beats ${player}`;
    }
    return "Draw";
}


