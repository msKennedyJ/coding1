const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    computerChoice = possibleChoices[randomNumber].id

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        resultDisplay.innerHTML = "It's a draw!"
    }

    else if (computerChoice === 'rock' && userChoice === 'paper') {
        resultDisplay.innerHTML = "You win!"
    }

    else if (computerChoice === 'rock' && userChoice === 'scissor') {
        resultDisplay.innerHTML = "Computer wins!"
    }

    else if (computerChoice === 'paper' && userChoice === 'rock') {
        resultDisplay.innerHTML = "Computer wins!"
    }

    else if (computerChoice === 'paper' && userChoice === 'scissor') {
        resultDisplay.innerHTML = "You win!"
    }

    else if (computerChoice === 'scissor' && userChoice === 'rock') {
        resultDisplay.innerHTML = "You win!"
    }

    else if (computerChoice === 'scissor' && userChoice === 'paper') {
        resultDisplay.innerHTML = "Computer wins!"
    }
}
