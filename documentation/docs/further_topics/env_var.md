---
sidebar_position: 2
---
# Best practices with setting up environment variables
Environment variables are key for keeping your app's settings flexible and secure. They help you manage things like API keys and database passwords without hardcoding them, making it easy to switch between development, testing, and production environments.

## Create a `.env` file
Start with creating an `.env` file in your root directory. This is where you can store all the secret keys. In the `.env` file, add your secret key value pairs. 
```bash title=".env"
BIG_HUMMINGBIRD_API_KEY=the-api-key-that-you-got-from-big-hummingbird
# some other keys
OPENAI_KEY=the-api-key-that-you-got-from-openai
```

## Retrieving the environment variable
To retrieve the environment variable, import the following module: 
```python
import os
big_hummingbird_api_key = os.getenv('BIG_HUMMINGBIRD_API_KEY')
openai_api_key = os.getenv('OPENAI_KEY')
```
