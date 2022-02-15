// Create a function that will return a random value from the list: rock, paper, scissors
function computerplay() {
    let gameoptions = ['Rock', 'Paper', 'Scissors'];
    return gameoptions[Math.floor(Math.random()*gameoptions.length)];
}

function playRound() {
    if (playerselection.toLowerCase() === "rock" && computerselection === "Paper") 
    {return "You lose. Paper beats Rock!"}
    else if (playerselection.toLowerCase() ==="rock" && computerselection === "Scissors") 
    {return "You win. Rock beats Scissors!"}
    else if (playerselection.toLowerCase() ==="scissors" && computerselection === "Paper")
    {return "You win. Scissors beat Paper."}
    else if (playerselection.toLowerCase() ==="scissors" && computerselection === "Rock")
    {return "You lose. Rock beats Scissors."}
    else if (playerselection.toLowerCase() ==="paper" && computerselection === "Rock")
    {return "You win. Paper beats Rock."}
    else if (playerselection.toLowerCase() ==="paper" && computerselection === "Scissors")
    {return "You lose. Scissors beat Paper."}
    else {return "Tie!"}
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerselection = prompt("Pick Rock, Paper or Scissors!");
        computerselection = computerplay();
        playRound()
        console.log(playRound())
    }
}