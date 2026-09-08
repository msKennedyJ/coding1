const words=["Elsie","Francisco","Gustaw","Alex","Dragos","Hakan"]

function generateRandomWord() {
  const randomIndex = Math.floor(Math.random()*words.length);
  const randomWord = words[randomIndex];
  document.getElementByID("wordDisplay").innerText=randomWord;
}
