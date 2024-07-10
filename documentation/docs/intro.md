---
sidebar_position: 1
---

# What is BigHummingbird
BigHummingbird is a simple toolbox to help speed up your LLM projects during experimental phase so you can focus on the tweaking and not the tracking and get your models to production faster. 

## 5 minute quick start  
It takes just a couple lines to get started. Try it on your local machine or start with one of our
[Google Colab Quickstart](https://colab.research.google.com/drive/1bKd5OZdFtC5a1SpXvp1FxRdVsgdf9M26#scrollTo=xSAJTLv6GBGc)

**Install bighummingbird python package**
```bash
pip install bighummingbird
```

**Initialize your project**  
:::tip[API Key]
You can get your API_KEY at www.bighummingbird.com Workspace > Settings > Create New API Key
:::

```python
from bighummingbird import BigHummingbird
bhb = BigHummingbird("My awesome project", API_KEY)
```

**Decorate whichever model you want to track**  

```python
@bhb.trace
def model(input_a, input_b):
  # Your model here
  return output_x
```
This will automatically track your model function signature, outputs, and the model definition. Any changes to these attributes will automatically trigger BigHummingbird to increment your model version. 

**View runs and models on a dashboard**  


## Next steps  
- Learn how to add a custom judge with your own test dataset to evaluate your model performance. 
- Learn how to add LLM-as-a-judge with OpenAI