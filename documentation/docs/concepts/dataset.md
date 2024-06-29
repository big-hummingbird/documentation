---
sidebar_position: 4
---

# Dataset

A "dataset" is a collection of input data points, arranged in an array, used to evaluate and test the performance and accuracy of a model. Think of it as a set of different test scenarios to see how well your model performs with various inputs. 

## Creating a new dataset
```python title="dataset.py"
bhb = BigHummingbird("My customer support project", API_KEY)
customer_questions = [
    'I recently bought a blender from your store, but it stopped working within a week. Can I get a refund?',
    'I\'m having trouble installing the software I purchased. Can you help?',
    'My order was supposed to arrive last week but I haven\'t received it yet. What\'s happening?',
    'I\'m locked out of my account and can\'t reset my password. What should I do?',
    'The air purifier I received last week is making a strange noise when it\'s on the highest setting. Should I be concerned or is this normal?'
]
test_dataset = Dataset("test_dataset", description="Customer questions", data=customer_questions)
```
Upload the dataset by calling `upload_dataset`
```python title="dataset.py"
bhb.upload_dataset(test_dataset)
```
run the file
```bash
python dataset.py
✔ Project set to: My customer support project
✔ Dataset test_dataset:v1 created.
```

Awesome! Whenever you see this message, it means that your dataset has been uploaded to BigHummingbird successfully and you can view it in Project > Dataset. 
In this example, `test_dataset:v1` is called the dataset tag and it is a unique identifier to your dataset. 

## Automatic dataset tracking
Any changes to your dataset will trigger a version update so you can easily organize and keep track. 

