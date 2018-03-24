            let choices = ["rock", "paper", "scissors"]; //sets the possible choices for the computer to choose from
            let round = 0;
            function computerPlay() {
                return choices[Math.floor(Math.random() * choices.length)];
            } //randomizes the computers choice
            function playRound(player) {
                const computer = computerPlay()
                console.log(computer)
                showComChoice(computer)
                if (player == "rock") {
                    if (computer == "rock") {
                        return "Tie";
                    } else if (computer == "scissors") {
                        return "You Win!";
                    } else if (computer == "paper") {
                        return "You Lose!"
                    } else {
                        return "error"
                    }
                } else if (player == "scissors") {
                    if (computer == "rock") {
                        return "You Lose!";
                    } else if (computer == "scissors") {
                        return "Tie";
                    } else if (computer == "paper") {
                        return "You Win!"
                    } else {
                        return "error"
                    }
                } else if (player == "paper") {
                    if (computer == "rock") {
                        return "You Win!";
                    } else if (computer == "scissors") {
                        return "You Lose!";
                    } else if (computer == "paper") {
                        return "Tie"
                    }
                } else {
                    return "error"
                }
            }; //plays a round when called
            let resultP = document.getElementById('result')
            const rock = document.getElementById('rock');
            rock.addEventListener('click', function() {
                scoreGame('paper');
                declareWinner();
            }); //makes the rock button work including running the game

            const paper = document.getElementById('paper');
            paper.addEventListener('click', function() {
                scoreGame('paper')
                declareWinner()
            }); //makes the paper button work including running the game

            const scissors = document.getElementById('scissors');
            scissors.addEventListener('click', function() {
                scoreGame('scissors');
                declareWinner();
            }) //makes the scissors button work including running the game. has the score function attached which currently doesnt work
            function showComChoice(computer) {
                let comNode = document.createTextNode(computer);
                let comP = document.getElementById('computerChoice')
                while (comP.firstChild) {
                    comP.removeChild(comP.firstChild)
                }
                comP.appendChild(comNode)
            } //displays the computer choice in a text feild
            function scoreGame(player) {
            	let playerChoice = player;
            	let resultText = document.createTextNode(playRound(playerChoice));
            	let result = resultText.nodeValue;
                while (resultP.firstChild) {
                    resultP.removeChild(resultP.firstChild)
                };
                resultP.appendChild(resultText);
                document.getElementById('round').stepUp(1);
                if (result === "You Win!") {
                    document.getElementById('playerScore').stepUp(1);
                } else if (result === "You Lose!") {
                document.getElementById('comScore').stepUp(1)
                } else {
                    document.getElementById('round').stepUp(-1)
                };
                console.log(resultText);
                
            }
            function declareWinner() {
            	let playerScore = document.getElementById('playerScore').value;
            	let comScore = document.getElementById('comScore').value;
            	let round = document.getElementById('round').value;
            	if (round > 4 && playerScore > comScore) {
            		alert("Youre better than me! I give up.")
            	} else if (round > 4 && comScore > playerScore) {
            		alert('I can\'t keep beating you like. It make me feel too guilty' )
            	}
            }
             // shows the score and round number currently not working. this is what you need to fix            }
