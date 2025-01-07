//first interactive game

let playGame = confirm("shall we play rock, paper, or scissors?");

if (playGame) {

    //play

    let playerChoice = prompt("Please Enter rock, paper or scissors.");

    if(playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissors";

            let result =
            playerOne === computer
            ? "Tie Game"
            : playerOne === "rock" && computer === "paper"
            ?`playerOne: ${playerOne}\n computer: ${computer}\n Computer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `PlayerOne: ${playerOne}\n computer: ${computer}\n computer is winner`
            : playerOne == "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\n computer: ${computer}\n computer is winner`
            : `playerOne: ${playerOne}\n computer: ${computer}\n player one is winner`;
            alert(result);

            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, Lets play again!")

        } else {
            alert("you didnt enter any of them!");
        }
    }else {
        alert("I guss you change your main may be next time.")
    }

}else {
    alert("Ok, maybe next time.");
}

