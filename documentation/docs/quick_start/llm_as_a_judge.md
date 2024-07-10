---
sidebar_position: 2
---
# LLM as a judge

In [Evaluating your model](./evaluating_model.md), we created a judge that gives a random score from 1 to 10. Now, we want to create a real automated judge that can tell us the performance of our model. 

## Load the dataset
In this tutorial, we will reuse the dataset created in [Evaluating your model](./evaluating_model.md)

## Create a new LLM-as-a-judge
In this tutorial, we're going to use OpenAI `gpt-3.5-turbo-instruct` as our LLM. To use the LLM, visit [OpenAI API Keys](https://platform.openai.com/api-keys) and generate a new key. Let's re-write our `scoring_rubric` function.

```python
def scoring_rubric(outputs):
    # Notice how we're importing all packages here.
    # This is important because we track the entire function definition 
    # and run it against the model later on. 
    # If you have any dependencies, you must import it within the function. 
    import requests
    import re
    import os
    url = 'https://api.openai.com/v1/completions'
    prompt = 'You are an expert in customer relations. '\
            + 'Your task is to provide a \'total rating\' scoring how well the system_answer answers the user concerns expressed in the user_question.'\
            + 'Give your answer as a float on a scale of 0 to 10, where 0 means that the system_answer is not helpful at all, and 10 means that the answer completely and helpfully addresses the question.' \
            + 'The user_question is ===' + outputs["question"] + "===" \
            + 'The system_answer is ===' + outputs["answer"] + "===" \
            + 'Provide your score in the format of ===Total score: ' \
            + 'If you cannot provide a score, provide ===Total score: None'


    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {os.getenv("OPENAI_API_KEY")}',
    }

    data = {
        'model': 'gpt-3.5-turbo-instruct',
        'prompt': prompt,
        'max_tokens': 20,
        'temperature': 0,
    }

    response = requests.post(url, headers=headers, json=data)

    if response.status_code == 200:
        result = response.json()
        generated_text = result['choices'][0]['text'].strip()
        score = int(re.search(r'\d+', generated_text).group())
        return score
    else:
        print(f"Error: {response.status_code} - {response.text}")
```
:::tip[API Key]
Beware of directly passing your OpenAI keys. For more information on how to set up environment variables, check out [Best practices with setting up environment variables](../further_topics/env_var.md)
:::
Our passing criteria function can be the same for now.

```python
def passing_criteria(score):
    return score > 5
```
Now, we construct our new smart judge
```python
smart_judge = Judge(
    "smart_judge",
    "This LLM-as-a-judge will return a score from 1 to 10",
    scoring_rubric,
    passing_criteria,
)
```

Remember to add the new judge to your `BigHummingbird` project.
```python
smart_judge_tag = bhb.add_judge(smart_judge)
```

## Let's test out our new LLM-as-a-judge
Now we have a new LLM-as-a-judge, let's do some sanity checks. 
Let's use the same sample model from [Evaluating your model](./evaluating_model.md)
```python title="sample_model.py"
def sample_model(question):
    return {
        "question": question,
        "answer": "What do you mean?"
    }
```
Let's see if our LLM-as-a-judge can detect this as a bad response.

Let's add our `@bhb.assess` decorator to the model

```python title="sample_model.py"
# smart_judge_tag = "smart_judge:v1"
# dataset_tag = "test_dataset:v1"
@bhb.assess(smart_judge_tag, dataset_tag)
def sample_model(question):
    return {
        "question": question,
        "answer": "What do you mean?"
    }
sample_model("This is a test question.")
```
Run your model: 
```bash
python sample_model.py
```

```bash
=== Start of Evaluation ===

✖ sample-test-dataset[0] score: 0
✖ sample-test-dataset[1] score: 0
✖ sample-test-dataset[2] score: 0
✖ sample-test-dataset[3] score: 0
✖ sample-test-dataset[4] score: 0

✖ 5 out of 5 failed.

=== End of Evaluation ===
```
Yep! Our LLM-as-a-judge can perfectly tell that this is a bad response. 

## How does the judge perform in the real world? 
Okay. Now for something more fun. Let's update our model to return high quality customer support responses. 
```python title="sample_model.py"
@bhb.assess("random-judge:v1", "test_dataset:v1")
def model(question):
    import requests
    import os
    api_key = os.getenv("OPENAI_API_KEY")
    url = 'https://api.openai.com/v1/completions'
    prompt = 'You are an expert in customer relations. '\
            + 'Your task is to provide a great support response to the given customer question.'\
            + 'Give your response as a sentence and it should be in a supportive and helpful tone.' \
            + 'The user_question is ===' + question + "==="


    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {api_key}',
    }

    data = {
        'model': 'gpt-3.5-turbo-instruct',
        'prompt': prompt,
        'max_tokens': 20,
        'temperature': 0,
    }

    response = requests.post(url, headers=headers, json=data)

    if response.status_code == 200:
        result = response.json()
        generated_text = result['choices'][0]['text'].strip()
        return {"question": question, "answer": generated_text}
    else:
        print(f"Error: {response.status_code} - {response.text}")
```
Run the new model
```bash
python sample_model.py
```
```bash
=== Start of Evaluation ===

✔ sample-test-dataset[0] score: 9
✔ sample-test-dataset[1] score: 9
✔ sample-test-dataset[2] score: 9
✔ sample-test-dataset[3] score: 8
✔ sample-test-dataset[4] score: 8
✔ All cases in dataset passed.

=== End of Evaluation ===
```
Yay! We're now generating high quality responses. 

## Putting everything together
```python title="sample_model.py"
from bighummingbird import BigHummingbird
from bighummingbird.judge import Judge
from bighummingbird.dataset import Dataset

bhb = BigHummingbird("LLM as a judge", "5ad3633cf0ced0a896137544beb93c56")

# Create a dataset
customer_questions = [
    'I recently bought a blender from your store, but it stopped working within a week.',
    'I\'m having trouble installing the software I purchased. Can you help?',
    'My order was supposed to arrive last week but I haven\'t received it yet. What\'s happening?',
    'I\'m locked out of my account and can\'t reset my password. What should I do?',
    'The air purifier I received last week is making a strange noise when it\'s on the highest setting. Should I be concerned or is this normal?'
]

dataset = Dataset("sample-test-dataset", data=customer_questions, description="Customer questions")
dataset_tag = bhb.upload_dataset(dataset)

# Create a smart judge
def scoring_rubric(outputs):
    import requests
    import re
    from dotenv import load_dotenv
    import os
    load_dotenv()
    url = 'https://api.openai.com/v1/completions'
    prompt = 'You are an expert in customer relations. '\
            + 'Your task is to provide a \'total rating\' scoring how well the system_answer answers the user concerns expressed in the user_question.'\
            + 'Give your answer as a float on a scale of 0 to 10, where 0 means that the system_answer is not helpful at all, and 10 means that the answer completely and helpfully addresses the question.' \
            + 'The user_question is ===' + outputs["question"] + "===" \
            + 'The system_answer is ===' + outputs["answer"] + "===" \
            + 'Provide your score in the format of ===Total score: ' \
            + 'If you cannot provide a score, provide ===Total score: None'


    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {os.getenv("OPENAI_API_KEY")}',
    }

    data = {
        'model': 'gpt-3.5-turbo-instruct',
        'prompt': prompt,
        'max_tokens': 50,
        'temperature': 0,
    }

    response = requests.post(url, headers=headers, json=data)

    if response.status_code == 200:
        result = response.json()
        generated_text = result['choices'][0]['text'].strip()
        score = int(re.search(r'\d+', generated_text).group())
        return score
    else:
        print(f"Error: {response.status_code} - {response.text}")

def passing_criteria(score):
    return score > 5

smart_judge = Judge(
    "smart_judge",
    "This LLM-as-a-judge will return a score from 1 to 10",
    scoring_rubric,
    passing_criteria,
)

smart_judge_tag = bhb.add_judge(smart_judge)

# Run assessment
@bhb.assess(smart_judge_tag, dataset_tag)
def sample_model(question):
    return {
        "question": question,
        "answer": "What do you mean?"
    }
sample_model("This is a test question")
```