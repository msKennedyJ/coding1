const computerChoiceDisplay = document.getElementByID('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementByID('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateComputerChoice()
}))

function generateComputerChoice() {
	const randomNumber=Math.floor(Math.random()*possibleChoices.length)
	console.log(randomNumber)
}
