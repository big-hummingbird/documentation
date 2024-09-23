# Messages

In conversational AI, messages play a crucial role in facilitating interactions between different user role types. This structure is particularly useful for multi-turn few-shot prompting, enabling the creation of dynamic and contextual conversations.

All messages are added sequentially and tracked in the engine's history, forming a complete conversational flow.

--- 

## Role Types in Conversational AI
In a conversational AI system, interactions are categorized into three distinct roles: **system**, **user**, and **assistant**.

- *System Role:* Tells the assistant how to act.
- *User Role:* Represents the human asking the question.
- *Assistant Role:* This is the AI's response based on the system's rules and the user's input.

--- 

### System Role

*What it does*: The system role sets the ground rules and gives the assistant its instructions. Think of it as the guide that tells the assistant how to behave and what topics to focus on. 

*When to use it*: You'll use the system role to define the assistant's purpose. For example, you can tell it to stay friendly, avoid certain topics, or focus only on specific tasks. 

*Example*:
In a virtual fitness coach scenario, the system message might be

```text
You are an encouraging fitness coach who provides helpful and motivational advice on workouts and healthy eating. 
Avoid giving medical advice or discussing unrelated topics.
```

This guides the assistant to be positive and supportive, focusing only on fitness and nutrition.

--- 

### User Role

*What it does*:
The user role represents the person interacting with the assistant. This is where the conversation starts - anything the user asks or says falls into this role. 

*When to use it:*
Users ask questions, give commands, or request help. This role is how the assistant knows what to respond to. 

*Example:*
A user seeking workout advice might ask:

```text
I'm feeling a bit unmotivated today. Can you suggest a simple workout to help boost my energy?
```

---

### Assistant Role

*What it does*:
The assistant role is the AI's response. It takes the user's input and the system's rules, and crafts a reply that fits. 

*Example:*
```text
Absolutely! Let's keep it light and fun today. How about a quick 10-minute workout? 
Start with some jumping jacks, then do a few squats and lunges. 
You'll feel more energized in no time! Remember, the gaol is to move and have fun!
```

---

## Multi-turn few-shot prompting
Multi-turn few-shot prompting helps the AI understand how to handle longer conversations by showing it a few examples. These examples include back-and-forth exchanges between the user and the assistant, teaching the AI how to keep track of the conversation and respond appropriately. 

*Example:*

**System role**
```text
You are a friendly travel assistant.
```

**User role**
```text
I need help planning a weekend trip.
```

**Assistant role**
```text
Sure! Do you have a destination in mind, or would you like some suggestions?
```

**User role**
```text
I'm open suggestions.
```

**Assistant role**
```text
Great! How about a cozy cabin getaway int he mountains or a city tour in a nearby town?
```