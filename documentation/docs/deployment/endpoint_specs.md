# Deployment Endpoint Specs

## Base Url
The base URL for all endpoints is available when you create a deployment. 

## Create Chat Session
Creates a new chat session with optional initial variables.

- **URL**: `/create-chat-session`
- **Method**: `POST`
- **Request Body**:
    - **Type**: JSON Array of objects
    - **Format**:
        ```json
        [
            {
                "key": "country",
                "value": "France",
            }
        ]
        ```
- **Response**:
    - **Success (200)**: Returns the `chat_session_id` for the newly created session.
        ```json
        {
            "chat_session_id": "chatSessionId123"
        }
        ```

## Invoke Chat Session 
Send a user message to an existing chat session and receive a response from the chat model.

- **URL**: `/invoke`
- **Method**: `POST`
- **Request Body**:
    - **Type**: JSON Object
    - **Format**:
        ```json
        {
            "user_message": "Help me plan a trip."
            "chat_session_id": "chatSessionId123",
        }
        ```
- **Response**:
    - **Success (200)**: Returns the assistant's response
        ```json
        {
            "message": "For your trip to Paris, I can help with hotels, 
            must-see attractions like the Eiffel Tower and the Louvre, and dining spots. 
            Just let me know your travel dates and any preferences, 
            and we'll start planning your perfect itinerary!"
        }
        ```

## Get Chat Session
Retrieve the details of a specific chat session by its ID.

- **URL**: `/chat-session/{chat_session_id}`
- **Method**: `GET`
- **Path Parameter**:
    - `chat_session_id` (string): The ID of the chat session to retrieve.
- **Response**:
    - **Success (200)**: Returns the data fo the chat session.
        ```json
        {
            "data": {
                "engineStateId": "state_id",
                "messages": [
                    {
                        "role": "user",
                        "content": "Help me plan a trip."
                    },
                    {
                        "role": "assistant",
                        "content": "For your trip to Paris, I can help with hotels, must-see attractions like the Eiffel Tower and the Louvre, and dining spots. Just let me know your travel dates and any preferences, and we'll start planning your perfect itinerary!",
                    }
                ]
            }
        }
        ```

## Delete Chat Session
