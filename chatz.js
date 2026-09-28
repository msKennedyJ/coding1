const chatbotResponses = {
    "hello": [
        "Hi there! How can I assist you? 🧀",
        "Hello! Ready for some cheesy conversation?",
        "Gouda to see you! How can I help?",
        "Hey there! Hope you're having a grate day!",
        "Hello! What's the big cheese today?"
    ],

    "how are you": [
        "I'm just a computer program, but I'm feeling grate! 🧀",
        "I'm doing gouda! How about you?",
        "I'm feeling pretty sharp today!",
        "I'm cheese-tastic! Thanks for asking.",
        "I'm doing well. I'm just hanging around, looking cheesy."
    ],

    "bye": [
        "Goodbye! Have a gouda day! 🧀",
        "See you later, cheese-lover!",
        "Bye! Don't forget to stay cheesy!",
        "Cheddar later!",
        "Until we meet again... keep it grate!"
    ],

    "cheese": [
        "Did someone say CHEESE?! 🧀",
        "Cheese is always the answer. What was the question?",
        "You cheddar believe I love cheese!",
        "That's a very mature topic. Just like aged cheese.",
        "Cheese makes everything butter."
    ],

    "joke": [
        "Why did the cheese fail its exam? It couldn't find the right curd answer! 🧀",
        "What cheese can hide a horse? Mascarpone!",
        "What did the cheese say to itself in the mirror? Halloumi!",
        "Why did the cheese go to the gym? To get shredded!",
        "What do you call cheese that isn't yours? Nacho cheese!",
        "What type of cheese is made backwards? Edam!",
        "Why was the cheese so confident? It knew it was grate!",
        "What cheese do pirates love? Arrr-dam!"
    ],

    "hungry": [
        "Sounds like you need a snack... preferably one involving cheese. 🧀",
        "Have you tried turning your hunger into a cheese platter?",
        "I prescribe one wheel of cheese, immediately.",
        "It's nacho fault you're hungry!",
        "Time for some grate snacks!"
    ],

    "thanks": [
        "You're very gouda welcome! 🧀",
        "No problem! Happy to lend a hand... or a wedge.",
        "Anytime! That's what I'm curd for.",
        "You're welcome! Stay cheesy!",
        "Don't mention it. It's the least I cheddar do!"
    ],

    "love": [
        "That's amore... and also a little bit of mozzarella. ❤️🧀",
        "Love is like cheese: better when shared!",
        "You've got me feeling all melted inside.",
        "That's pretty gouda!",
        "Cheese believes in love at first bite."
    ],

    "sad": [
        "Don't be blue! Unless you're talking about blue cheese. 🧀",
        "I'm sorry you're feeling down. Have some virtual cheese!",
        "Things will get feta!",
        "Here's a virtual cheese hug. 🤗🧀",
        "Remember: even cheese has its holes, but it's still grate!"
    ],

    "happy": [
        "That's grate news! 🧀",
        "I'm cheddar-ly delighted to hear that!",
        "Now that's something to brie happy about!",
        "You just made my day extra cheesy!",
        "Keep that gouda mood going!"
    ],

    "default": [
        "I'm not sure how to respond to that. Would you like some cheese? 🧀",
        "Hmm... that's a little outside my cheese-tpertise.",
        "I'm drawing a blank... perhaps a cheese break is in order.",
        "That's a tough one. Let me think about it while I age gracefully.",
        "I don't have an answer, but I do have cheese!",
        "My brain has sprung a leak... like Swiss cheese.",
        "I'm not sure, but I'm willing to queso further!",
        "That's a real puzzler. Time to bring out the big cheese.",
        "I think we need to have a serious de-brie-f about this.",
        "I'm stumped. And slightly grated.",
        "I don't know about that one, but it sounds pretty cheesy."
    ]
};


// Pick a random response from an array
function getRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}


function handleUserInput(event) {
    // Only respond when the user presses Enter
    if (event.key === 'Enter') {

        const userInputElement = document.getElementById("userInput");
        const chat = document.getElementById("chat");

        const userInput = userInputElement.value.trim();

        // Don't respond to an empty message
        if (userInput === "") {
            return;
        }

        // Clear the input field
        userInputElement.value = "";

        // Display user's message
        chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

        // Convert input to lowercase
        const input = userInput.toLowerCase();

        // Find the appropriate response category
        const responses = chatbotResponses[input] || chatbotResponses["default"];

        // Pick a random response
        const response = getRandomResponse(responses);

        // Display chatbot response
        chat.innerHTML += `<p><strong>Cheese:</strong> ${response}</p>`;

        // Automatically scroll to the newest message
        chat.scrollTop = chat.scrollHeight;
    }
}
