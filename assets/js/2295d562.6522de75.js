"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[688],{1367:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(4848),a=t(8453);const s={},r="Build a RAG Chat",o={id:"get_started/rag_chat",title:"Build a RAG Chat",description:"rag chat bot",source:"@site/docs/get_started/rag_chat.md",sourceDirName:"get_started",slug:"/get_started/rag_chat",permalink:"/llm/docs/get_started/rag_chat",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/llm/docs/get_started/intro"},next:{title:"Key Concepts",permalink:"/llm/docs/engine/intro"}},d={},c=[{value:"How does it work",id:"how-does-it-work",level:2},{value:"Let&#39;s Get Started!",id:"lets-get-started",level:2},{value:"Prep your vector database (with Pinecone)",id:"prep-your-vector-database-with-pinecone",level:2},{value:"1. Set up your environment",id:"1-set-up-your-environment",level:3},{value:"2. Store knowledge in Pinecone",id:"2-store-knowledge-in-pinecone",level:3},{value:"a. Create a Pinecone serverless index",id:"a-create-a-pinecone-serverless-index",level:4},{value:"b. Embed data",id:"b-embed-data",level:4},{value:"c. Upsert data",id:"c-upsert-data",level:4},{value:"Create an Engine",id:"create-an-engine",level:2},{value:"1. Add system prompt",id:"1-add-system-prompt",level:3},{value:"2. Connect Big Hummingbird to Pinecone",id:"2-connect-big-hummingbird-to-pinecone",level:3},{value:"Index",id:"index",level:4},{value:"Namespace",id:"namespace",level:4},{value:"TopK",id:"topk",level:4},{value:"Score Threshold",id:"score-threshold",level:4},{value:"3. Create a chat session",id:"3-create-a-chat-session",level:3},{value:"4. Deploy",id:"4-deploy",level:3},{value:"Debugging Tips",id:"debugging-tips",level:2},{value:"There is an error when creating a chat session with RAG enabled",id:"there-is-an-error-when-creating-a-chat-session-with-rag-enabled",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"build-a-rag-chat",children:"Build a RAG Chat"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"rag chat bot",src:t(939).A+"",width:"1716",height:"1291"})}),"\n",(0,i.jsx)(n.h2,{id:"how-does-it-work",children:"How does it work"}),"\n",(0,i.jsx)(n.p,{children:"Retrieval-Augmented Generation (RAG) is a method that boosts language models by combining them with an external knowledge base, making responses more accurate and relevant."}),"\n",(0,i.jsx)(n.p,{children:"To illustrate how this works, let's imagine we're building a chatbot for a fictional product called LumiAI. Even though LumiAI doesn't exist in the model's training data, we can make our chatbot respond effectively by adding specific information about it."}),"\n",(0,i.jsx)(n.p,{children:"Here's how RAG makes it possible:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Retriever"}),": The retriever fetches useful information from a knowledge base or document storage. For our LumiAI example, we add records that describe the product's features and capabilities. A vector database stores this information as embeddings\u2014numerical representations that capture the essence of the content. The embeddings are created using an embedding model and allow the retriever to quickly find information that matches a user's query, like \"What are LumiAI's main features?\"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Generator"}),": Once the relevant information about LumiAI is retrieved, the generator (a language model) uses it to create a detailed response. This means if someone asks about LumiAI, the chatbot grounds its answer in the added context, resulting in accurate and informative replies\u2014even for a product that wasn't originally in its training data."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"lets-get-started",children:"Let's Get Started!"}),"\n",(0,i.jsx)(n.p,{children:"Now that you understand how RAG works, we'll guide you through creating the sample records for LumiAI and setting up the retriever and generator components. By the end of this tutorial, you'll have a working chatbot that can handle questions about LumiAI, showcasing the power of Retrieval-Augmented Generation in action."}),"\n",(0,i.jsxs)(n.p,{children:["First, ",(0,i.jsx)(n.a,{href:"https://www.bighummingbird.com",children:"sign in"})," or ",(0,i.jsx)(n.a,{href:"https://www.bighummingbird.com",children:"create a new account"})," if you haven't already."]}),"\n",(0,i.jsx)(n.p,{children:"Once you're logged in, it's time to set up a new engine. The engine will serve as your workspace, where you'll iterate on prompts and manage deployments for your projects."}),"\n",(0,i.jsx)(n.h2,{id:"prep-your-vector-database-with-pinecone",children:"Prep your vector database (with Pinecone)"}),"\n",(0,i.jsx)(n.h3,{id:"1-set-up-your-environment",children:"1. Set up your environment"}),"\n",(0,i.jsxs)(n.p,{children:["Obtain a ",(0,i.jsx)(n.a,{href:"https://docs.pinecone.io/guides/get-started/quickstart",children:"Pinecone API key"})," for index creation"]}),"\n",(0,i.jsx)(n.h3,{id:"2-store-knowledge-in-pinecone",children:"2. Store knowledge in Pinecone"}),"\n",(0,i.jsx)(n.h4,{id:"a-create-a-pinecone-serverless-index",children:"a. Create a Pinecone serverless index"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from pinecone.grpc import PineconeGRPC as Pinecone\nfrom pinecone import ServerlessSpec\n\npc = Pinecone(api_key="YOUR_API_KEY")\n\npc.create_index(\n  name="product-specs", # This can be any name you want.\n  dimension=1536,\n  metric="cosine",\n  spec=ServerlessSpec(\n    cloud="aws",\n    region="us-east-1"\n  ),\n  deletion_protection="disabled"\n) \n'})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://docs.pinecone.io/guides/indexes/create-an-index#create-a-serverless-index",children:"Pinecone: Create an index"})," for other types of indexes."]}),"\n",(0,i.jsx)(n.h4,{id:"b-embed-data",children:"b. Embed data"}),"\n",(0,i.jsx)(n.p,{children:"In this tutorial, we'll create two sample records for a fictional product called LumiAI. This example will demonstrate how the chatbot can effectively answer questions about LumiAI, even though it wasn't part of the original training data."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'data = [\n    {"id": "vec1", "text": "LumiAI\'s reduces energy consumption by 30% using motion sensors to turn off lights in empty rooms and adjusts brightness based on ambient light, maintaining optimal illumination at 300 lux."},\n    {"id": "vec2", "text": "LumiAI integrates with Alexa and Google Home, offering scheduling, voice control, and preset modes (e.g., \'Relx\' dims lights to 40%, \'Focus\' increases to 80%). Users can adjust remotely via the app."},\n]\n\nembeddings = pc.inference.embed(\n    "multilingual-e5-large",\n    inputs=[d[\'text\'] for d in data],\n    parameters={\n        "input_type": "passage"\n    }\n)\n\nvectors = []\nfor d, e in zip(data, embeddings):\n    vectors.append({\n        "id": d[\'id\'],\n        "values": e[\'values\'],\n        "metadata": {\'text\': d[\'text\']}\n    })\n'})}),"\n",(0,i.jsx)(n.h4,{id:"c-upsert-data",children:"c. Upsert data"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'index = pc.Index(index_name)\nindex.upsert(\n    vectors=vectors,\n    namespace="ns1" # This can be anything you want. Let\'s just put ns1 short for namespace1 for now.\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["And that's it! You should now see the records added to the namespace on Pinecone's dashboard.\n",(0,i.jsx)(n.img,{alt:"Pinecone dashboard with 2 records",src:t(3516).A+"",width:"1472",height:"1120"})]}),"\n",(0,i.jsx)(n.h2,{id:"create-an-engine",children:"Create an Engine"}),"\n",(0,i.jsx)(n.h3,{id:"1-add-system-prompt",children:"1. Add system prompt"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"You are the LumiAI product Assistant, an expert in LumiAI smart lighting. \nProvide clear, concise answers about features, energy-saving benefits, installation, \nand smart home integration. \nUse specific data and examples, maintaining a friendly and professional tone.\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-connect-big-hummingbird-to-pinecone",children:"2. Connect Big Hummingbird to Pinecone"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Connect to Pinecone",src:t(181).A+"",width:"1223",height:"199"}),"\nConnect to your Pinecone vector database via Pinecone API key. The API key identifies the specific project you wish to access."]}),"\n",(0,i.jsx)(n.p,{children:"Once you're connected, set up your query configuration."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pinecone query configuration",src:t(8571).A+"",width:"326",height:"394"})}),"\n",(0,i.jsx)(n.h4,{id:"index",children:"Index"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An index in Pinecone is where data is stored and organized for efficient similarity search."}),"\n",(0,i.jsx)(n.li,{children:"We can think of an index as a dedicated database designed to manage and quickly find relevant information using vector-based queries."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"namespace",children:"Namespace"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A namespace is a logical grouping within an index that acts like a sub-index or category."}),"\n",(0,i.jsx)(n.li,{children:'It allows us to segment data logically without creating separate indexes. For example, you could store vectors representing different data types (e.g. "product department" and "marketing department") in separate namespaces.'}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"topk",children:"TopK"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The TopK parameter refers to the number of nearest neighbor vectors that should be returned by the retrieval system for each query."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"score-threshold",children:"Score Threshold"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The score threshold is a cutoff value that determines whether a similarity score between the query vector and a candidate vector is significant enough to be included in the results."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['Once we have our configuration set up, we can test our retrieval system by giving a test user query and observe the records retrieved. Each record has a "score" associated with it to help with tweaking the score threshold.\n',(0,i.jsx)(n.img,{alt:"Testing retrieval",src:t(8471).A+"",width:"1244",height:"434"})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Don't see your vector database? Leave us a message to get your vector database added to our roadmap :)"})}),"\n",(0,i.jsx)(n.h3,{id:"3-create-a-chat-session",children:"3. Create a chat session"}),"\n",(0,i.jsxs)(n.p,{children:["Click on ",(0,i.jsx)(n.code,{children:"Create a new chat session"})," and start chatting with your chatbot! Your chatbot is now configured with your prompt, records, and model."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"rag chat bot",src:t(939).A+"",width:"1716",height:"1291"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For high-accuracy scenarios, such as medical or legal applications, consider including reference links in your records. To do this, add ",(0,i.jsx)(n.code,{children:"title"})," and ",(0,i.jsx)(n.code,{children:"link"})," fields to the record metadata, allowing references to appear directly in the chat session for review."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"retrieve doc links for medical applications",src:t(1058).A+"",width:"666",height:"1093"})}),"\n",(0,i.jsx)(n.h3,{id:"4-deploy",children:"4. Deploy"}),"\n",(0,i.jsxs)(n.p,{children:["Once you're happy with your setup? Deploy your chatbot as a RESTful endpoint and integrate into your application.\nCheck ",(0,i.jsx)(n.a,{href:"/llm/docs/deployment/intro",children:"Deployment"})," for endpoint specs"]}),"\n",(0,i.jsx)(n.h2,{id:"debugging-tips",children:"Debugging Tips"}),"\n",(0,i.jsx)(n.h3,{id:"there-is-an-error-when-creating-a-chat-session-with-rag-enabled",children:"There is an error when creating a chat session with RAG enabled"}),"\n",(0,i.jsxs)(n.p,{children:["Big Hummingbird retrieves content from individual records from the ",(0,i.jsx)(n.code,{children:"text"})," field. This is also the default key Pinecone provides. Verify on Pinecone's dashboard that you have the text you want to embed under the ",(0,i.jsx)(n.code,{children:"text"})," field."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pinecone metadata text",src:t(9175).A+"",width:"1412",height:"422"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1058:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/chat-retrieves-docs-64e57745cd431ad30ad442de329a9743.png"},8571:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/configure-pinecone-query-0e8bdd8e1efd09ddca29fb0e96038e15.png"},181:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connect_pinecone_api_key-41b6c570c977f6fd9817b9a8e153b3c7.png"},3516:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/pinecone_dashboard-985fa69fc7b9277706315ba659a9725d.png"},9175:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/pinecone_metadata_text-6bf888b35a28411fe409d3c48d6316e3.png"},939:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/rag_chat_bot-c763bf6e3760d9d20ac7febecc025ff6.png"},8471:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/test-rag-7feaad96dcf90ce329f352aa277c587f.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);