---
sidebar_position: 3
---

# Key Concepts

Welcome to the Engine, your main workspace for managing prompts! It's designed to keep everything organized and accessible with four key sections: **Prompt, Model, Versions, Chat Sessions** and **Additional Configuration**. This guide will walk you through each section,

--- 

### The Engine's five main sections
- **Prompt**
- **Model**
- **Chat Sessions**
- **Versions**
- **Additional Configuration**
    - **Variables**

--- 

## 1. Prompt

The Prompt Section is where you create and manage prompts that guide the model's behavior. This section allows you to write and organize your prompts efficiently for reuse. You can also customize prompts by integrating variables that will adjust the model based on other sources of information.

### Features
- Create new prompts or edit existing ones. 
- View the history of prompt.

--- 

## 2. Model
The Model section allows you to select and configure the large language model (LLM) used to execute your prompts. You can choose from a range of models, each with different capabilities and configurations. Additionally, you can adjust the model's hyperparameters to refine how the model generates responses based on your prompts. 

### Options
- **Model Selection**: Choose the appropriate model for your task. 
- **Hyperparameters**: Adjust hyperparameters like temperature, max tokens, and more to fine-tune the model's behavior. 

### Further Reading
- [Prompt Engineering Best Practices](https://www.bighummingbird.com/blogs/prompt-engineering-best-practices)
- [A Visual Explanation of LLM Hyperparameters](https://www.bighummingbird.com/blogs/llm-hyperparameter)

---

## 3. Chat Sessions

A Chat Session is a distinct instance. To test out your prompt and model setup, click on `create new chat session". Check out [Chat Session](./chat_session.md) for more details.

---

## 4. Version
Versions int he engine refer to different iterations of your prompt and model setup. Each version includes updates to prompts, model and additional configurations like variables. By creating new versions, you can experiment with different prompt strategies without affecting previous setups. 

:::tip[prompt management]
Prompt management is all about keeping your prompts organized, versioned, and continuously improving to get the best results from your AI. While Git is great for tracking code, it doesn't cover everything - like the actual inputs, outputs, or how well your prompts are performing. With prompt management, you're not just managing code; you're tracking tweaks, evaluating results, and refining prompts based on real feedback. 
:::

### Further Reading
- [Why is Git not enough for prompt management?](https://www.bighummingbird.com/blogs/why-should-you-bother-with-prompt-versioning) 

---


## 5. Additional Configuration

### Variables
In the Variables Section, any placeholders (e.g., `{variable}`) used in your prompt will automatically appear. This allows you to quickly input or modify the values you want to be replaced during the prompt execution or chat session creation. Variables make prompts more dynamic and adaptable by allowing you to use different data without altering the core structure of the prompt. 

#### How to use
- Define variables inside the prompt using curly braces `{}`
- The system will recognize and list them in this section. 
- Input values for each variable, which will replace the placeholders during prompt execution. 

See [chat session](./chat_session.md) for examples on how variables can be used. 

---

## Engine State
Talk about EngineStates and how they are versioned. 
In the deployment section, talk about how each engineState is deployed