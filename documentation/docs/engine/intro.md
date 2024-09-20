---
sidebar_position: 3
---

# Engine
Welcome to the Engine, your main workspace for managing prompts! It’s designed to keep everything organized and accessible with four key sections: prompts, inputs, model configuration, and outputs.

The engine contains 4 main sections:
- prompts
- inputs
- model configuration
- outputs

## Prompt Section


See best practices with crafting prompts here. 


## Inputs Section
Variables that are entered in the prompt message section with `{variable}` will show up in this section. 

## Model Configuration
You can choose the model that you want and set the model hyperparameters. Check [A visual explanation of LLM hyperparameters] to understand how to refine your prompt. 

![select model](../../static/img/selectmodel.png)
![hyperparaterms](../../static/img/hyperparameters.png)


## Output Section
Click on `Run` to run your prompt messages against the selected model and model hyperparameters. 
![output section](../../static/img/run.png)

## Version Section
Every `Run` is versioned and will show up on the left side of the bar. Big Hummingbird automatically tracks the prompt, model, and model hyperparameters so you can revert your changes and know what worked and what didn't work. 

![Version section](../../static/img/versionSection.png)

All changes made without clicking on `Run` will also be saved as draft. You can use the hash code to keep track of version your draft is based on.

:::tip[prompt management]
Prompt management is all about keeping your prompts organized, versioned, and continuously improving to get the best results from your AI. While Git is great for tracking code, it doesn't cover everything - like the actual inputs, outputs, or how well your prompts are performing. With prompt management, you're not just managing code; you're tracking tweaks, evaluating results, and refining prompts based on real feedback. See blog post for more details. 
:::

---

Talk about EngineStates and how they are versioned. 
In the deployment section, talk about how each engineState is deployed