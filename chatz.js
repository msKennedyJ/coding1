        const chatbotResponses = {
            "hello": "Hi there! How can I assist you?",
            "how are you": "I'm just a computer program, but thanks for asking! How can I help you?",
            "bye": "Goodbye! If you have more questions, feel free to ask.",
            "default": "I'm not sure how to respond to that. Would you like some cheese?."
        };

        function handleUserInput(event) {
            if (event.key === 'Enter') {
                const userInput = document.getElementById("userInput").value;
                const chat = document.getElementById("chat");

                // Clear the input field
                document.getElementById("userInput").value = "";

                // Display user's message
                chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

                // Get the chatbot response
                const response = chatbotResponses[userInput.toLowerCase()] || chatbotResponses["default"];

                // Display chatbot response
                chat.innerHTML += `<p><strong>Cheese:</strong> ${response}</p>`;
            }
        }
