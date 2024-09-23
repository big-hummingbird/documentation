# RAG
Retrieval-Augmented Generation (RAG) enhances language models by retrieving relevant documents from a database to provide more accurate and context-rich responses. It combines the strengths of LLMs with external information retrieval to answer queries with up-to-date or specialized information.

## How does it work?
1. **Retrieval**: The system retrieves relevant documents from a vector database based on the user query.
2. **Generation**: These documents are then used by the LLM to generate a response, adding accuracy and context.

### High level diagram

### Document Integration

The retrieved documents are combined with the user's query and fed into the LLM. This process allows the model to generate responses that are more informed and contextually accurate by leveraging both its pre-trained knowledge and the specific information from the documents. 

## Connecting to a Vector Database

Vector databases store document embeddings, enabling fast retrieval of relevant documents.

### Pinecone

Pinecone offers a managed vector database service.
See [Get started with Pinecone](https://docs.pinecone.io/guides/get-started/quickstart) for more information.
[Build a RAG Chat](../get_started/rag_chat.md) with Big Hummingbird.

### Qdrant
Coming soon!

:::tip
Don't see your vector database? Contact us to add it to our roadmap :) 
:::

## Construct query to vector database 

### Pinecone

#### Top K
#### Index
#### Namespace
#### Embedding Model