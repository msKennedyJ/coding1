const words=["Elsie",
             "Francisco",
             "Gustaw",
             "Alex",
             "Dragos",
             "Hakan",
             "Fransico",
             "Andres",
             "Chicken",
             "Monkey",
             "Badger",
             "I hate your wonky face",
             "Please go away, you make me feel sick",
             "Were you dropped on your face as a child?",
             "Are you part monkey?",
             "What time is it?",
             "Where did I leave my chicken",
             "Please, not the face.",
             "I have come to steal your SOUL",
             "You remind me of a feral dog"]

function generateRandomWord() {
  const randomIndex = Math.floor(Math.random()*words.length);
  const randomWord = words[randomIndex];
  document.getElementById("wordDisplay").innerText=randomWord;
}
