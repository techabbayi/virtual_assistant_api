# Virtual Assistant API

A simple and fun API that generates personalized greetings and cheerful messages based on the current day of the week. This API accepts a user's name and returns a greeting along with a unique message based on the day.

## Features

- Accepts a user's name as a query parameter (`name`).
- Returns a personalized greeting.
- Sends a cheerful message depending on the current day of the week.

## API Endpoint

### `GET /assistant/greet?name=<user_name>`

**Parameters:**
- `name` (required): The name of the user. If no name is provided, it defaults to "Guest".

**Response:**
A JSON object with the following structure:
```json
{
  "greeting": "Hello, <user_name>! Welcome to your virtual assistant.",
  "dayMessage": "<cheerful_message_based_on_day>"
}

