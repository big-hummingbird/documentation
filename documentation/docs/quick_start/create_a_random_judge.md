---
sidebar_position: 2
---

# Evaluating your model 
Imagine that you're creating a model that crafts responses for customer support and you want to know how your model performs against a fixed set of data points. 

## Define your own dataset
### Initialize your project
If you haven't already installed the python package from [Quick Start](../intro.md), install it now with 
```bash
pip install bighummingbird
```
In your python code, create an instance of `Bighummingbird`. 

:::tip[API Key]
You can get your API_KEY at www.bighummingbird.com Workspace > Settings > Create New API Key
:::
:::tip[Don't want to expose your API_KEYs?]
You can store your API_KEYs in your local `.env` file for security. See securely store your API_KEYs for more information.
:::

```python
from bighummingbird import BigHummingbird
bhb = BigHummingbird("Customer support project", API_KEY)
```

### Create your dataset

`Dataset` is a collection of only input data points, arranged in an array.

```python
import bighummingbird.dataset import Dataset
customer_questions = [
    'I recently bought a blender from your store, but it stopped working within a week. Can I get a refund?',
    'I\'m having trouble installing the software I purchased. Can you help?',
    'My order was supposed to arrive last week but I haven\'t received it yet. What\'s happening?',
    'I\'m locked out of my account and can\'t reset my password. What should I do?',
    'The air purifier I received last week is making a strange noise when it\'s on the highest setting. Should I be concerned or is this normal?'
]

test_dataset = Dataset("test_dataset", data=customer_questions, description="Customer questions")
test_dataset_tag = bighummingbird.upload_dataset(test_dataset)
```

### Upload your dataset
```python
test_dataset_tag = bhb.upload_dataset(test_dataset)
```

### View your dataset on the dashboard. 
insert image here. 
The value in `test_dataset_tag` will be how you reference this particular dataset. 

### How the dataset is versioned?
Any changes to the inputs, whether the value or the structure will automatically trigger a version update. 

## Create your own judge
A `Judge` consists of a scoring function that assigns a numeric score to the outputs. 

### Define your scoring function
A `scoring_function` is a function that takes your model outputs, and give them a numeric score. 
```python
def scoring_rubric(output):
    import random
    return random.randint(1, 10)
```
:::tip[Tip]
Notice how `import random` is added within a function. This is important because we track the entire function definition and run it against the model later on. If you have any dependencies, you must import it within the function. 
:::

In this example, the scoring rubric simply gives out a score between 1 to 5. Not very helpful in evaluating our model, but this fine for our demo purpose. To see how we could use LLM-as-a-judge to evaluate our model, see [LLM-as-a-judge with OpenAI](./llm_as_a_judge.md)

### Define your passing criteria (optional)

Taken the score from `scoring_rubric`, you can define a passing or failing threshold so that you can visually see your model's performance on the dashboard. 
```python
def passing_criteria(score):
    return score > 5
```

You can also define `passing_criteria` as a range like. Just make sure that the output is a `bool` type.

```python
def passing_criteria(score):
    return 5 < score and score < 9
```

### Put scoring function and passing criteria together
```python
judge = Judge(
    "random_judge",
    "This judge will return a random score between 1 to 5",
    scoring_rubric,
    passing_criteria,
)
```
and add upload the judge to bighummingbird
```python
bhb.add_judge(judge)
```

## Perfect!
Now you can run your model and view the evaluation score on bighummingbird dashboard!
:::tip[Remove assessment for production]
Remember to remove the assessment decorator for production. Because bighummingbird will run the model against each data on your dataset, it might cause un-necessary computation and slow things down in production. 
:::

## Putting everything together
```python
from bighummingbird import BigHummingbird
from bighummingbird.judge import Judge
from bighummingbird.dataset import Dataset

bhb = BigHummingbird("From local", API_KEY)

customer_questions = [
    'I recently bought a blender from your store, but it stopped working within a week. Can I get a refund?',
    'I\'m having trouble installing the software I purchased. Can you help?',
    'My order was supposed to arrive last week but I haven\'t received it yet. What\'s happening?',
    'I\'m locked out of my account and can\'t reset my password. What should I do?',
    'The air purifier I received last week is making a strange noise when it\'s on the highest setting. Should I be concerned or is this normal?'
]

test_dataset = Dataset("test_dataset", data=customer_questions, description="Customer questions")
test_dataset_tag = bighummingbird.upload_dataset(test_dataset)

def scoring_rubric(outputs):
    import random
    return random.randint(1, 10)

def passing_criteria(score):
    return score > 5

judge = Judge(
    "random_judge",
    "This judge will return a random score between 1 to 10",
    scoring_rubric,
    passing_criteria,
)
bhb.add_judge(judge)
```
## Next steps
- Learn how to add [LLM-as-a-judge with OpenAI](./llm_as_a_judge.md)