---
sidebar_position: 3
---

# Model
A model is a trained machine learning algorithm, and its model code, input types, and output types are tracked and versioned to ensure reproducibility, accountability, and systematic improvement overtime. 

## Why trace models in the experimental phase?
- **Maintain Clarity**: Tracing inputs, outputs, and model code helps track changes through multiple iterations
- **Facilitate Comparisons**: Detailed records allow accurate comparison of model performance and behavior, aiding in selecting the best model
- **Ensure Reproducibility**: Tracing ensures experiments can be recreated, providing a reliable reference for future work

## Tracking a new model
Tracking a new model is done automatically with [Run](./run.md) or [Evaluation](./evaluations.md) creation.

```python title="model.py"
from bighummingbird import BigHummingbird
bhb = BigHummingbird("Concept Project", API_KEY)

# Add the trace decorator
@bhb.trace
def model(input_a, input_b):
  # Your model here
  # GPT-4 text generation
  # summarization
  # translation
  # sentiment analysis
  return input_a + input_b

model(1, 2)
```

```bash
python model.py
```
![model_detail_v1](../../static/img/model_detail_v1.png)

## Model Detection
- **New Model**: If the model is new, BigHummingbird will automatically create it for you.
- **Existing Model**: If the model already exists, BigHummingbird will recognize it and won't create a duplicate.

## Model Tagging
- Each model is assigned a unique identifier called the **Model Tag**
- The format for a Model Tag is `{model_name}:{version}`
- Model tags are unique to each project, ensuring that each model can be distinctly identified within its respective project.
- If the `{model_name}` is updated, a new model tag will be created and start from version: `v1`

Let's take a look at an example and update our model. 
```python
# Add the trace decorator
@bhb.trace
def model(input_a, input_b):
  return input_a - input_b # addition changed into subtraction
model(1, 2)
```
![model_detail_v2](../../static/img/model_detail_v2.png)
Notice how the model is now updated to `v2`. This is a model tag that you can reference at any time. This will come in handy when we want to pull out previous models and evaluate their performance before checking in our code.