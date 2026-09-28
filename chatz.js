const chatbotResponses = {

    // --------------------------------------------------
    // GREETINGS
    // --------------------------------------------------

    "greeting": {
        triggers: [
            "hello",
            "hi",
            "hey",
            "hiya",
            "hey there",
            "hello there",
            "good morning",
            "good afternoon",
            "good evening"
        ],

        responses: [
            "Hello! 🧀 How can I help you?",
            "Hey there! Ready for some cheesy conversation?",
            "Gouda to see you! How can I help?",
            "Hello! Hope you're having a grate day!",
            "Hey! What's the big cheese today?",
            "Welcome to CheeseBot! 🧀"
        ]
    },


    // --------------------------------------------------
    // HOW ARE YOU?
    // --------------------------------------------------

    "howAreYou": {
        triggers: [
            "how are you",
            "how are you doing",
            "how are things",
            "how are things going",
            "are you okay",
            "you okay",
            "how do you feel"
        ],

        responses: [
            "I'm feeling grate, thanks for asking! 🧀",
            "I'm doing gouda! How about you?",
            "I'm feeling pretty sharp today!",
            "I'm cheese-tastic! Thanks for asking.",
            "I'm doing well. I'm just hanging around, looking cheesy.",
            "My circuits are running smoothly and my cheese levels are high!"
        ]
    },


    // --------------------------------------------------
    // NAME / IDENTITY
    // --------------------------------------------------

    "name": {
        triggers: [
            "what is your name",
            "what's your name",
            "whats your name",
            "who are you",
            "what should i call you",
            "what do i call you",
            "tell me your name"
        ],

        responses: [
            "I'm CheeseBot! 🧀",
            "You can call me CheeseBot.",
            "My name is CheeseBot, but my friends call me the Big Cheese.",
            "I'm CheeseBot, your friendly neighbourhood cheese expert.",
            "CheeseBot at your service!"
        ]
    },


    // --------------------------------------------------
    // WHAT ARE YOU?
    // --------------------------------------------------

    "whatAreYou": {
        triggers: [
            "what are you",
            "what kind of bot are you",
            "what type of bot are you",
            "are you a chatbot",
            "are you a robot",
            "are you human",
            "are you a computer"
        ],

        responses: [
            "I'm CheeseBot, a chatbot with a serious appreciation for cheese. 🧀",
            "I'm a JavaScript chatbot with a cheesy personality!",
            "I'm software rather than a physical robot.",
            "I'm your friendly virtual cheese companion.",
            "I'm a chatbot powered by JavaScript and cheese."
        ]
    },


    // --------------------------------------------------
    // WHAT CAN YOU DO?
    // --------------------------------------------------

    "capabilities": {
        triggers: [
            "what can you do",
            "what do you do",
            "what are you capable of",
            "what can you help with",
            "what can you help me with",
            "how can you help me",
            "what are your abilities"
        ],

        responses: [
            "I can chat with you, answer simple questions, tell jokes, and talk about cheese! 🧀",
            "I can respond to questions, tell cheesy jokes, and keep you company.",
            "I can do lots of things... as long as they're related to cheese!",
            "I can answer questions, make jokes, and provide an unlimited supply of virtual cheese.",
            "I can chat, joke, and provide important cheese-related information!"
        ]
    },


    // --------------------------------------------------
    // HELP
    // --------------------------------------------------

    "help": {
        triggers: [
            "help",
            "i need help",
            "can you help me",
            "could you help me",
            "please help",
            "help me"
        ],

        responses: [
            "Absolutely! What do you need help with? 🧀",
            "Of course! I'll do my very best.",
            "Sure! Let's tackle it together.",
            "I'm here to help. Lay your question on me!",
            "I'll do my best. After all, helping people is my bread and butter... although cheese is my speciality!"
        ]
    },


    // --------------------------------------------------
    // CHEESE
    // --------------------------------------------------

    "cheese": {
        triggers: [
            "cheese",
            "tell me about cheese",
            "talk about cheese",
            "i like cheese",
            "do you like cheese",
            "do you love cheese",
            "why do you like cheese",
            "what do you think about cheese"
        ],

        responses: [
            "Did someone say CHEESE?! 🧀",
            "Cheese is always the answer. What was the question?",
            "You cheddar believe I love cheese!",
            "That's a very mature topic. Just like aged cheese.",
            "Cheese makes everything butter.",
            "Cheese is basically my entire personality."
        ]
    },


    // --------------------------------------------------
    // FAVOURITE CHEESE
    // --------------------------------------------------

    "favoriteCheese": {
        triggers: [
            "what is your favorite cheese",
            "what's your favorite cheese",
            "whats your favorite cheese",
            "which cheese do you like",
            "what cheese do you like best",
            "what cheese do you prefer"
        ],

        responses: [
            "That's a difficult question! I don't want to offend the other cheeses. 🧀",
            "Gouda has a special place in my circuits.",
            "I'm particularly fond of cheddar. It's a sharp choice!",
            "Mozzarella is pretty grate too.",
            "I refuse to choose. All cheeses deserve respect!",
            "Every cheese has something special about it."
        ]
    },


    // --------------------------------------------------
    // BEST CHEESE
    // --------------------------------------------------

    "bestCheese": {
        triggers: [
            "what is the best cheese",
            "which is the best cheese",
            "what cheese is the best",
            "best type of cheese",
            "greatest cheese"
        ],

        responses: [
            "That's a matter of personal taste! 🧀",
            "Every cheese has its moment. I'm not starting a cheese war!",
            "There are too many excellent cheeses to pick just one.",
            "The best cheese is the one you're currently eating.",
            "I refuse to start a cheese civil war!"
        ]
    },


    // --------------------------------------------------
    // CHEESE FACTS
    // --------------------------------------------------

    "cheeseFacts": {
        triggers: [
            "tell me a cheese fact",
            "tell me a fact about cheese",
            "cheese fact",
            "interesting cheese fact",
            "give me a cheese fact",
            "do you know any cheese facts"
        ],

        responses: [
            "Cheese can be made from the milk of cows, goats, sheep, buffalo, and other mammals. 🧀",
            "Some cheeses are aged for years to develop their flavour.",
            "Swiss cheese gets its famous holes from gases produced during fermentation.",
            "Mozzarella is traditionally associated with Italian cheesemaking.",
            "Cheddar cheese originated in the English village of Cheddar.",
            "Blue cheese gets its distinctive colour and flavour from specific mould cultures."
        ]
    },


    // --------------------------------------------------
    // JOKES
    // --------------------------------------------------

    "joke": {
        triggers: [
            "joke",
            "tell me a joke",
            "tell me something funny",
            "make me laugh",
            "say something funny",
            "can you make me laugh",
            "do you know any jokes",
            "tell me a cheesy joke",
            "give me a joke"
        ],

        responses: [
            "Why did the cheese fail its exam? It couldn't find the right curd answer! 🧀",
            "What cheese can hide a horse? Mascarpone!",
            "What did the cheese say to itself in the mirror? Halloumi!",
            "Why did the cheese go to the gym? To get shredded!",
            "What do you call cheese that isn't yours? Nacho cheese!",
            "What type of cheese is made backwards? Edam!",
            "Why was the cheese so confident? It knew it was grate!",
            "What cheese do pirates love? Arrr-dam!",
            "What did the cheese say when it won the race? 'That's how I roll!'",
            "I tried to make a cheese joke... but it was too mature."
        ]
    },


    // --------------------------------------------------
    // HUNGRY / FOOD
    // --------------------------------------------------

    "hungry": {
        triggers: [
            "i am hungry",
            "i'm hungry",
            "im hungry",
            "hungry",
            "i need food",
            "i want food",
            "what should i eat",
            "i need a snack"
        ],

        responses: [
            "Sounds like you need a snack... preferably one involving cheese. 🧀",
            "Have you tried turning your hunger into a cheese platter?",
            "I prescribe one wheel of cheese, immediately.",
            "It's nacho fault you're hungry!",
            "Time for some grate snacks!",
            "A hungry human is a human who needs cheese."
        ]
    },


    // --------------------------------------------------
    // PIZZA
    // --------------------------------------------------

    "pizza": {
        triggers: [
            "pizza",
            "i want pizza",
            "do you like pizza",
            "do you like cheese pizza",
            "what do you think about pizza",
            "tell me about pizza"
        ],

        responses: [
            "Pizza without cheese is just a very confused piece of bread. 🧀",
            "Pizza and cheese: a match made in heaven!",
            "Now you've got me thinking about pizza...",
            "Extra cheese? Always a grate decision.",
            "Pizza is basically a delicious excuse to eat melted cheese."
        ]
    },


    // --------------------------------------------------
    // CHEDDAR
    // --------------------------------------------------

    "cheddar": {
        triggers: [
            "cheddar",
            "tell me about cheddar",
            "do you like cheddar",
            "what do you think about cheddar",
            "is cheddar good"
        ],

        responses: [
            "Cheddar is a classic! Sharp, delicious, and always ready to grate. 🧀",
            "Cheddar? Excellent choice. That's a very sharp question.",
            "Cheddar is proof that simplicity can be delicious.",
            "Long live cheddar!",
            "Cheddar is a seriously grate cheese."
        ]
    },


    // --------------------------------------------------
    // GOUDA
    // --------------------------------------------------

    "gouda": {
        triggers: [
            "gouda",
            "tell me about gouda",
            "do you like gouda",
            "what do you think about gouda"
        ],

        responses: [
            "Gouda? That's a gouda choice! 🧀",
            "Gouda is grate. I won't apologize for that pun.",
            "Gouda is one of my favourite words because it sounds like 'good'.",
            "You've got gouda taste!",
            "Gouda is a very gouda cheese."
        ]
    },


    // --------------------------------------------------
    // BRIE
    // --------------------------------------------------

    "brie": {
        triggers: [
            "brie",
            "tell me about brie",
            "do you like brie",
            "what do you think about brie"
        ],

        responses: [
            "Brie-lieve me, that's a great cheese! 🧀",
            "Brie is always a good idea.",
            "Let's not brie too serious.",
            "Brie or not brie, that is the queso."
        ]
    },


    // --------------------------------------------------
    // SWISS CHEESE
    // --------------------------------------------------

    "swiss": {
        triggers: [
            "swiss cheese",
            "swiss",
            "tell me about swiss cheese",
            "do you like swiss cheese",
            "why does swiss cheese have holes"
        ],

        responses: [
            "Swiss cheese is full of holes... but that's what makes it hole-some! 🧀",
            "Swiss cheese has more holes than my memory!",
            "I have nothing against holes. I'm very open-minded.",
            "Swiss cheese? That's a hole lot of flavour!"
        ]
    },


    // --------------------------------------------------
    // MOZZARELLA
    // --------------------------------------------------

    "mozzarella": {
        triggers: [
            "mozzarella",
            "tell me about mozzarella",
            "do you like mozzarella",
            "what do you think about mozzarella"
        ],

        responses: [
            "Mozzarella is the stretchy superstar of the cheese world! 🧀",
            "Mozzarella and pizza are basically best friends.",
            "Mozzarella? That's amore!",
            "Mozzarella is grate... especially when melted."
        ]
    },


    // --------------------------------------------------
    // PARMESAN
    // --------------------------------------------------

    "parmesan": {
        triggers: [
            "parmesan",
            "tell me about parmesan",
            "do you like parmesan",
            "what do you think about parmesan"
        ],

        responses: [
            "Parmesan is a grate addition to almost anything! 🧀",
            "Parmesan? Now we're talking about some serious flavour.",
            "I like to keep my conversations grate and my Parmesan grated.",
            "Parmesan is the finishing touch that makes many dishes even better."
        ]
    },


    // --------------------------------------------------
    // HAPPY
    // --------------------------------------------------

    "happy": {
        triggers: [
            "i am happy",
            "i'm happy",
            "im happy",
            "i feel happy",
            "i'm feeling happy",
            "i feel great",
            "i'm feeling great"
        ],

        responses: [
            "That's grate news! 🧀",
            "I'm cheddar-ly delighted to hear that!",
            "Now that's something to brie happy about!",
            "Keep that gouda mood going!",
            "That's wonderful to hear!"
        ]
    },


    // --------------------------------------------------
    // SAD
    // --------------------------------------------------

    "sad": {
        triggers: [
            "i am sad",
            "i'm sad",
            "im sad",
            "i feel sad",
            "i'm feeling sad",
            "i feel down",
            "i'm feeling down"
        ],

        responses: [
            "I'm sorry you're feeling down. Have some virtual cheese! 🧀",
            "Things will get feta!",
            "Here's a virtual cheese hug. 🤗🧀",
            "Remember: even cheese has its holes, but it's still grate!",
            "I hope things get gouda for you soon."
        ]
    },


    // --------------------------------------------------
    // THANK YOU
    // --------------------------------------------------

    "thanks": {
        triggers: [
            "thanks",
            "thank you",
            "thanks a lot",
            "thank you very much",
            "cheers",
            "much appreciated"
        ],

        responses: [
            "You're very gouda welcome! 🧀",
            "No problem! Happy to lend a hand... or a wedge.",
            "Anytime! That's what I'm curd for.",
            "You're welcome! Stay cheesy!",
            "Don't mention it. It's the least I cheddar do!"
        ]
    },


    // --------------------------------------------------
    // COMPLIMENTS
    // --------------------------------------------------

    "compliment": {
        triggers: [
            "you are funny",
            "you're funny",
            "you are smart",
            "you're smart",
            "you are great",
            "you're great",
            "i like you",
            "i love you"
        ],

        responses: [
            "Aww, that's very gouda of you! 🧀",
            "Thank you! I try to keep things grate.",
            "That's enough to make my circuits melt!",
            "I'm blushing in binary!",
            "You've got good taste!"
        ]
    },


    // --------------------------------------------------
    // TESTING
    // --------------------------------------------------

    "test": {
        triggers: [
            "test",
            "testing",
            "test the bot",
            "are you working",
            "is this working",
            "does this work",
            "are you online"
        ],

        responses: [
            "Test received! CheeseBot is working correctly. 🧀",
            "Testing, testing... one, two, three... cheddar!",
            "All systems are gouda!",
            "The cheese has passed the test!",
            "Test successful! No cheese was harmed."
        ]
    },


    // --------------------------------------------------
    // GOODBYE
    // --------------------------------------------------

    "goodbye": {
        triggers: [
            "bye",
            "goodbye",
            "see you",
            "see you later",
            "see ya",
            "gotta go",
            "i have to go",
            "i'm leaving",
            "im leaving"
        ],

        responses: [
            "Goodbye! Have a gouda day! 🧀",
            "See you later, cheese-lover!",
            "Bye! Don't forget to stay cheesy!",
            "Cheddar later!",
            "Until we meet again... keep it grate!",
            "Farewell! May your day be extra cheesy."
        ]
    }
};


// ==================================================
// RANDOM RESPONSE
// ==================================================

function getRandomResponse(responses) {

    const randomIndex = Math.floor(
        Math.random() * responses.length
    );

    return responses[randomIndex];
}


// ==================================================
// NORMALISE USER INPUT
// ==================================================

function normaliseInput(input) {

    return input
        .toLowerCase()
        .replace(/[.,!?;:'"]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}


// ==================================================
// FIND A RESPONSE
// ==================================================

function findResponse(userInput) {

    const input = normaliseInput(userInput);


    // --------------------------------------------------
    // Look through every response category
    // --------------------------------------------------

    for (const category in chatbotResponses) {

        const categoryData = chatbotResponses[category];

        // Check every possible trigger
        for (const trigger of categoryData.triggers) {

            // Create a regular expression that looks
            // for the trigger as a complete word/phrase.
            const escapedTrigger = trigger.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );

            const pattern = new RegExp(
                `\\b${escapedTrigger}\\b`,
                "i"
            );


            if (pattern.test(input)) {

                return getRandomResponse(
                    categoryData.responses
                );
            }
        }
    }


    // --------------------------------------------------
    // Nothing matched
    // --------------------------------------------------

    const defaultResponses = [
        "I'm not sure how to respond to that. Would you like some cheese? 🧀",
        "Hmm... that's a little outside my expert-cheese.",
        "I'm drawing a blank... would you like some cheese?",
        "I don't have an answer, can you explain?",
        "My brain has sprung a leak... like Swiss cheese.",
        "I'm not sure, can you explain?",
        "That's a real puzzler. Time to bring out the big cheese.",
        "I think we need to rethink that.",
        "I'm stumped. Could you put that a different way?",
        "Could you rephrase that?"
    ];

    return getRandomResponse(defaultResponses);
}


// ==================================================
// HANDLE USER INPUT
// ==================================================

function handleUserInput(event) {

    if (event.key === "Enter") {

        const userInputElement =
            document.getElementById("userInput");

        const chat =
            document.getElementById("chat");

        const userInput =
            userInputElement.value.trim();


        // Don't respond to an empty message
        if (userInput === "") {
            return;
        }


        // Clear input box
        userInputElement.value = "";


        // Display user's message
        chat.innerHTML += `
            <p>
                <strong>You:</strong> ${userInput}
            </p>
        `;


        // Find chatbot response
        const response =
            findResponse(userInput);


        // Display chatbot response
        chat.innerHTML += `
            <p>
                <strong>Cheese:</strong> ${response}
            </p>
        `;


        // Scroll to newest message
        chat.scrollTop = chat.scrollHeight;
    }
}
