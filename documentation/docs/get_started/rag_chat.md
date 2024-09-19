# Build a RAG Chat

## How it works
Brief introduction to vector database and embedding models

## Prep your vector database (with Pinecone)
### 1. Set up your environment

Obtain the following keys: 
- A Pinecone API Key for retrieval
- An OpenAI API Key for embeddings

### 2. Store knowledge in Pinecone
#### a. Create a Pinecone serverless index
```python
from pinecone.grpc import PineconeGRPC as Pinecone
from pinecone import ServerlessSpec

pc = Pinecone(api_key="YOUR_API_KEY")

pc.create_index(
  name="example-index",
  dimension=1536,
  metric="cosine",
  spec=ServerlessSpec(
    cloud="aws",
    region="us-east-1"
  ),
  deletion_protection="disabled"
) 
```
See [Pinecone: Create an index](https://docs.pinecone.io/guides/indexes/create-an-index#create-a-serverless-index) for other types of indexes.

#### b. Embed data
```python
data = [
    {"id": "vec1", "text": "LumiAI's reduces energy consumption by 30% using motion sensors to turn off lights in empty rooms and adjusts brightness based on ambient light, maintaining optimal illumination at 300 lux."},
    {"id": "vec1", "text": "LumiAI integrates with Alexa and Google Home, offering scheduling, voice control, and preset modes (e.g., 'Relx' dims lights to 40%, 'Focus' increases to 80%). Users can adjust remotely via the app."},
]

embeddings = pc.inference.embed(
    "multilingual-e5-large",
    inputs=[d['text'] for d in data],
    parameters={
        "input_type": "passage"
    }
)

vectors = []
for d, e in zip(data, embeddings):
    vectors.append({
        "id": d['id'],
        "values": e['values'],
        "metadata": {'text': d['text']}
    })
```
#### c. Upsert data
```python
index = pc.Index(index_name)
index.upsert(
    vectors=vectors,
    namespace="ns1"
)
```

### 3. Connect Big Hummingbird to Pinecone

Add screenshots on how to connect to Pinecone

#### TopK
#### Text

:::tip
Don't see your vector database? Contact us to get your vector database to our roadmap :)
:::

## Chatbot

### 1. Add system prompt

```text
You are the EcoLight Assistant, an expert in EcoLight smart lighting. 
Provide clear, concise answers about features, energy-saving benefits, installation, 
and smart home integration. 
Use specific data and examples, maintaining a friendly and professional tone.
```

### 2. Create a chat session

### 3. Deploy

Once you're happy with your setup? Deploy your chatbot as a RESTful endpoint and integrate into your application. 
Check [Deployment](../deployment/intro.md) for endpoint specs
