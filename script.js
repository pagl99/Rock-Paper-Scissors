// Create a function that will return a random value from the list: rock, paper, scissors
function computerplay() {
    let gameoptions = ['Rock', 'Paper', 'Scissors'];
    return gameoptions[Math.floor(Math.random()*gameoptions.length)];
}


let playerscore = 0
let computerscore = 0
let roundresult = ''
function playRound() { 
    if (playerselection.toLowerCase() === "rock" && computerselection === "Paper") 
    {let roundresult = "You lose. Paper beats Rock!";
    computerscore++;
    const results = document.createElement('p');
    results.textContent = `${roundresult}`;
    container.appendChild(results)}
    else if (playerselection.toLowerCase() ==="rock" && computerselection === "Scissors")
    {let roundresult = "You win. Rock beats Scissors!";
    playerscore++
    const results = document.createElement('p');
    results.textContent = `${roundresult}`;
    container.appendChild(results)}
    else if (playerselection.toLowerCase() ==="scissors" && computerselection === "Paper")
    {let roundresult = "You win. Scissors beat Paper."
    playerscore++
    const results = document.createElement('p');
    results.textContent = `${roundresult}`;
    container.appendChild(results)}
    else if (playerselection.toLowerCase() ==="scissors" && computerselection === "Rock")
    {let roundresult = "You lose. Rock beats Scissors."
    computerscore++
    const results = document.createElement('p');
    results.textContent = `${roundresult}`;
    container.appendChild(results)}
    else if (playerselection.toLowerCase() ==="paper" && computerselection === "Rock")
    {let roundresult = "You win. Paper beats Rock."
    playerscore++
    const results = document.createElement('p');
    results.textContent = `${roundresult}`;
    container.appendChild(results)}
    else if (playerselection.toLowerCase() ==="paper" && computerselection === "Scissors")
    {let roundresult = "You lose. Scissors beat Paper."
    computerscore++
    const results = document.createElement('p');
    results.textContent = `${roundresult}`;
    container.appendChild(results)}
    else {let roundresult = "Tie!"
    const results = document.createElement('p');
    results.textContent = `${roundresult}`;
    container.appendChild(results)}
}

function game() {
    {   computerselection = computerplay();
        playRound()
        updatescore()
        victorycheck()
    }
}

const buttonrock = document.querySelector('#rockbutton');
buttonrock.addEventListener('click', () => {
    playerselection="rock";
    game()
} )

const buttonpaper = document.querySelector('#paperbutton');
buttonpaper.addEventListener('click', () => {
    playerselection="paper";
    game()
} )

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerselection="scissors";
    game()
} )

function updatescore() {
    computerscoredisplay.textContent = `The computer's current score is: ${computerscore}`
    playerscoredisplay.textContent = `Your current score is: ${playerscore}`
}


const container = document.querySelector('#container')

const playerscoredisplay = document.createElement('p')
playerscoredisplay.textContent = `Your current score is: ${playerscore}`

const computerscoredisplay = document.createElement('p')
computerscoredisplay.textContent = `The computer's current score is: ${computerscore}`

container.appendChild(playerscoredisplay)
container.appendChild(computerscoredisplay)

const victorymessage = document.createElement('h1');
victorymessage.textContent=('YOU WIN!');

const defeatmessage = document.createElement('h1');
defeatmessage.textContent=('YOU LOSE!');

function victorycheck() {
    if (playerscore == 5) {
        container.appendChild(victorymessage)
    }
    else if (computerscore == 5) {
        container.appendChild(defeatmessage)
    }
}
