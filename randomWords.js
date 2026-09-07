
const words = ["You make me sick","You Smell", "I can not look at your face", "I heard that you have no teeth", "Is it true that you were born in a barn?", "Where did you get that hideous outfit?", "I find it hard to be in the same room as you", "Don't speak to me ever again.","Are you part chicken?","What on earth is that smell?","You make me want to self-isolate","I do not approve of your face.","You look like a massive horse","You remind me of a dead horse","You look like a squashed insect","I can not stand you","You look like a mashed potato","You are a massive donut", "I hope you get squashed by a falling tree"];

function generateRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length);

    const randomWord = words[randomIndex];

    document.getElementById("wordDisplay").innerText = randomWord;
}
