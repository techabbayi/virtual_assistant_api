const express = require('express');
const app = express();
const port = 3000;

// Route to greet the user based on their name and day of the week
app.get('/assistant/greet', (req, res) => {
    const userName = req.query.name || 'Guest';  // Default to 'Guest' if no name is provided

    // Get the current day of the week
    const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });  // e.g., "Monday"

    // Generate the personalized greeting message
    const greetingMessage = `Hello, ${userName}! Welcome to your virtual assistant.`;

    // Generate a cheerful message based on the day of the week
    let dayMessage;
    switch (currentDay) {
        case 'Monday':
            dayMessage = "Happy Monday! Let's start the week strong!";
            break;
        case 'Tuesday':
            dayMessage = "Tackle the day! It's Tuesday!";
            break;
        case 'Wednesday':
            dayMessage = "It's Hump Day! You're halfway through the week!";
            break;
        case 'Thursday':
            dayMessage = "Almost there! Happy Thursday!";
            break;
        case 'Friday':
            dayMessage = "Yay, it's Friday! The weekend is near!";
            break;
        case 'Saturday':
            dayMessage = "Enjoy your weekend! It's Saturday!";
            break;
        case 'Sunday':
            dayMessage = "Relax, it's Sunday! Take it easy.";
            break;
        default:
            dayMessage = "Have a great day!";
            break;
    }

    // Send the response
    res.json({
        greeting: greetingMessage,
        dayMessage: dayMessage
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Virtual Assistant API is running at http://localhost:${port}`);
});
