---
sidebar_position: 2
---

# Run
A model run includes tracking the inputs, outputs, and latency of executing a trained machine learning model with specific data to generate predictions. 

## Why trace model run inputs and outputs?
Tracing every run input and output is crucial throughout the model lifecycle, from experimentation to production, for several reasons:
- **Debugging and Error Analysis**: Identifies where a model fails or produces unexpected results.
- **Performance monitoring**: Detects performance degradation, anomalies, or drift by analyzing real-time input and output data
- **Optimizing Model Performance**: Identifies patterns and trends for further optimizations
- **Handling Non-Deterministic Models**: Understands and quantifies variability in models that produce different outputs for the same input.

## Tracing a model run
BigHummingbird makes it simple to trace a model run input and output values.

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

**View runs and models on a dashboard**  
![run_table](../../static/img/run_table.png)
![model_detail_v1](../../static/img/model_detail_v1.png)

This will automatically track your model function signature, outputs, and the model definition. Any changes to these attributes will automatically trigger BigHummingbird to increment your model version. Read [Model](./model.md) for more information

### Putting it all together
```python title="model.py"
from bighummingbird import BigHummingbird
from bighummingbird.judge import Judge

bhb = BigHummingbird("Quick Start", API_KEY)

def scoring_rubric(outputs):
    # This is important. All necessary imports must be done here.
    import random
    return random.randint(1, 10)

def passing_criteria(score):
    return score > 5

judge = Judge(
    "random-judge",
    "This judge will return a random score between 1 to 10",
    scoring_rubric,
    passing_criteria,
)
judge_tag = bhb.add_judge(judge)

@bhb.assess(judge_tag)
def model(input_a, input_b):
  # Your model here
  # GPT-4 text generation
  # summarization
  # translation
  # sentiment analysis
  return input_a + input_b
```

## Evaluate model run performance