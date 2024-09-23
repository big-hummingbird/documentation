"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[238],{3074:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(4848),i=t(8453);const r={},a="RAG",s={id:"engine/rag",title:"RAG",description:"Retrieval-Augmented Generation (RAG) enhances language models by retrieving relevant documents from a database to provide more accurate and context-rich responses. It combines the strengths of LLMs with external information retrieval to answer queries with up-to-date or specialized information.",source:"@site/docs/engine/rag.md",sourceDirName:"engine",slug:"/engine/rag",permalink:"/llm/docs/engine/rag",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},d={},c=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"High level diagram",id:"high-level-diagram",level:3},{value:"Document Integration",id:"document-integration",level:3},{value:"Connecting to a Vector Database",id:"connecting-to-a-vector-database",level:2},{value:"Pinecone",id:"pinecone",level:3},{value:"Qdrant",id:"qdrant",level:3},{value:"Construct query to vector database",id:"construct-query-to-vector-database",level:2},{value:"Pinecone",id:"pinecone-1",level:3},{value:"Top K",id:"top-k",level:4},{value:"Index",id:"index",level:4},{value:"Namespace",id:"namespace",level:4},{value:"Embedding Model",id:"embedding-model",level:4}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"rag",children:"RAG"}),"\n",(0,o.jsx)(n.p,{children:"Retrieval-Augmented Generation (RAG) enhances language models by retrieving relevant documents from a database to provide more accurate and context-rich responses. It combines the strengths of LLMs with external information retrieval to answer queries with up-to-date or specialized information."}),"\n",(0,o.jsx)(n.h2,{id:"how-does-it-work",children:"How does it work?"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Retrieval"}),": The system retrieves relevant documents from a vector database based on the user query."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Generation"}),": These documents are then used by the LLM to generate a response, adding accuracy and context."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"high-level-diagram",children:"High level diagram"}),"\n",(0,o.jsx)(n.h3,{id:"document-integration",children:"Document Integration"}),"\n",(0,o.jsx)(n.p,{children:"The retrieved documents are combined with the user's query and fed into the LLM. This process allows the model to generate responses that are more informed and contextually accurate by leveraging both its pre-trained knowledge and the specific information from the documents."}),"\n",(0,o.jsx)(n.h2,{id:"connecting-to-a-vector-database",children:"Connecting to a Vector Database"}),"\n",(0,o.jsx)(n.p,{children:"Vector databases store document embeddings, enabling fast retrieval of relevant documents."}),"\n",(0,o.jsx)(n.h3,{id:"pinecone",children:"Pinecone"}),"\n",(0,o.jsxs)(n.p,{children:["Pinecone offers a managed vector database service.\nSee ",(0,o.jsx)(n.a,{href:"https://docs.pinecone.io/guides/get-started/quickstart",children:"Get started with Pinecone"})," for more information.\n",(0,o.jsx)(n.a,{href:"/llm/docs/get_started/rag_chat",children:"Build a RAG Chat"})," with Big Hummingbird."]}),"\n",(0,o.jsx)(n.h3,{id:"qdrant",children:"Qdrant"}),"\n",(0,o.jsx)(n.p,{children:"Coming soon!"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Don't see your vector database? Contact us to add it to our roadmap :)"})}),"\n",(0,o.jsx)(n.h2,{id:"construct-query-to-vector-database",children:"Construct query to vector database"}),"\n",(0,o.jsx)(n.h3,{id:"pinecone-1",children:"Pinecone"}),"\n",(0,o.jsx)(n.h4,{id:"top-k",children:"Top K"}),"\n",(0,o.jsx)(n.h4,{id:"index",children:"Index"}),"\n",(0,o.jsx)(n.h4,{id:"namespace",children:"Namespace"}),"\n",(0,o.jsx)(n.h4,{id:"embedding-model",children:"Embedding Model"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(6540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);