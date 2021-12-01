const game = () => {
    let PlayerScore = 0;
    let ComputerScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add('fadeIn');
        });
    };
    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        // computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener('click', function () {
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // here where we call compare hands
                compareHands(this.textContent, computerChoice);
                // update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = PlayerScore;
        computerScore.textContent = ComputerScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        // update text
        const winner = document.querySelector('.winner');
        // checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }
        // checking for a rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Wins";
                PlayerScore++;
                console.log(PlayerScore);
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                ComputerScore++;
                updateScore();
                return;
            }
        }
        // check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer Wins";
                ComputerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "player Wins";
                PlayerScore++;
                updateScore();
                return;
            }
        }
        // check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer Wins";
                ScoreComputer++;
                ComputerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                PlayerScore++;
                updateScore();
                return;
            }
        }
    }

    // start the startGame function.
    startGame();
    playMatch();
}

// start the game function.
game();
