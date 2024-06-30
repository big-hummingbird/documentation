---
sidebar_position: 2
---
# LLM as a judge

In [Evaluating your model](./create_a_random_judge.md), we created a judge that gives a random score from 1 to 10. Now, we want to create a real automated judge that can tell us the performance of our model. 

## Load the dataset
In this tutorial, we will reuse the dataset created in [Evaluating your model](./create_a_random_judge.md)

## Create a new LLM-as-a-judge
In this tutorial, we're going to use OpenAI `gpt-3.5-turbo-instruct` as our LLM. To use the LLM, visit [OpenAI API Keys](https://platform.openai.com/api-keys) and generate a new key. 

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
bhb.add_judge(judge)
```

## Let's test out our new LLM-as-a-judge
Now we have a new LLM-as-a-judge, let's do some sanity checks. 
In the model that we generate support response, let's start with something simple and return a hard-coded response and see if our LLM-as-a-judge will able to score it properly.
```python title="rude_model.py"
def model(question):
    return {
        "question": question,
        "answer": "This is your problem. Stop asking me. " # rude!
    }    
```
Oh wow, this is super rude! Please don't every say this! Let's see if our LLM-as-a-judge can detect this as a rude response. 

Let's add our `@assess` decorator to the model
TODO: Add how we know it's smart_judge:v1 and test_dataset:v1 here
```python title="rude_model.py"
# add @assess decorator here
@assess("smart_judge:v1", "test_dataset:v1")
def model(question):
    return {
        "question": question,
        "answer": "This is your problem. Stop asking me. " # rude!
    }
```
Run your model: 
```bash
python rude_model.py
```
Yep! Our LLM-as-a-judge can perfectly tell that this is a bad response. 

## How does the judge perform in the real world? 
Okay. Now for something more fun. Let's update our model to return high quality customer support responses. 
```python title="model.py"
@bhb.assess("random-judge:v1", "test_dataset:v1")
def model(question):
    import requests

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
python model.py
```

## Putting everything together
```python
bhb = BigHummingbird("LLM as a judge", API_KEY)

customer_questions = [
    'I recently bought a blender from your store, but it stopped working within a week. Can I get a refund?',
    'I\'m having trouble installing the software I purchased. Can you help?',
    'My order was supposed to arrive last week but I haven\'t received it yet. What\'s happening?',
    'I\'m locked out of my account and can\'t reset my password. What should I do?',
    'The air purifier I received last week is making a strange noise when it\'s on the highest setting. Should I be concerned or is this normal?'
]

test_dataset = Dataset("test_dataset", data=customer_questions, description="Customer questions")
test_dataset_tag = bhb.upload_dataset(test_dataset)

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

def passing_criteria(score):
    return score > 5

smart_judge = Judge(
    "smart_judge",
    "This LLM-as-a-judge will return a score from 1 to 10",
    scoring_rubric,
    passing_criteria,
)
bhb.add_judge(smart_judge)
```