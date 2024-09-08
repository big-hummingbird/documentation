"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[255],{4881:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(4848),i=n(8453);const o={sidebar_position:1},r="Engine",a={id:"concepts/engine",title:"Engine",description:"Welcome to the Engine, your main workspace for managing prompts! It\u2019s designed to keep everything organized and accessible with four key sections: prompts, inputs, model configuration, and outputs.",source:"@site/docs/concepts/engine.md",sourceDirName:"concepts",slug:"/concepts/engine",permalink:"/llm/docs/concepts/engine",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/llm/docs/category/concepts"},next:{title:"Deployment",permalink:"/llm/docs/concepts/deployment"}},l={},c=[{value:"Prompt Section",id:"prompt-section",level:2},{value:"Role Types in Conversational AI",id:"role-types-in-conversational-ai",level:3},{value:"Variables",id:"variables",level:3},{value:"Inputs Section",id:"inputs-section",level:2},{value:"Model Configuration",id:"model-configuration",level:2},{value:"Output Section",id:"output-section",level:2},{value:"Version Section",id:"version-section",level:2}];function d(e){const s={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"engine",children:"Engine"}),"\n",(0,t.jsx)(s.p,{children:"Welcome to the Engine, your main workspace for managing prompts! It\u2019s designed to keep everything organized and accessible with four key sections: prompts, inputs, model configuration, and outputs."}),"\n",(0,t.jsx)(s.p,{children:"The engine contains 4 main sections:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"prompts"}),"\n",(0,t.jsx)(s.li,{children:"inputs"}),"\n",(0,t.jsx)(s.li,{children:"model configuration"}),"\n",(0,t.jsx)(s.li,{children:"outputs"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Engine",src:n(3153).A+"",width:"1720",height:"878"})}),"\n",(0,t.jsx)(s.h2,{id:"prompt-section",children:"Prompt Section"}),"\n",(0,t.jsx)(s.h3,{id:"role-types-in-conversational-ai",children:"Role Types in Conversational AI"}),"\n",(0,t.jsxs)(s.p,{children:["In a conversational AI system, interactions are categorized into three distinct roles: ",(0,t.jsx)(s.strong,{children:"system"}),", ",(0,t.jsx)(s.strong,{children:"user"}),", and ",(0,t.jsx)(s.strong,{children:"assistant"}),"."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"System Role:"})," Tells the assistant how to act."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"User Role:"})," Represents the human asking the question."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Assistant Role:"})," This is the AI's response based on the system's rules and the user's input.\n",(0,t.jsx)(s.img,{alt:"role types",src:n(7157).A+"",width:"461",height:"331"})]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"System Role"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"What it does"}),": The system role sets the ground rules and gives the assistant its instructions. Think of it as the guide that tells the assistant how to behave and what topics to focus on."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"When to use it"}),": You'll use the system role to define the assistant's purpose. For example, you can tell it to stay friendly, avoid certain topics, or focus only on specific tasks."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Example"}),":\nIn a customer support bot, the system might say:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"You are a helpful assistant that answers questions about software. Avoid hardware topics. \n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"System Prompt",src:n(8586).A+"",width:"832",height:"258"})}),"\n",(0,t.jsx)(s.p,{children:"In this case, the system role has already instructed the assistant to only help with software-related questions, so it won't stray off-topic."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"User Role"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"What it does"}),":\nThe user role represents the person interacting with the assistant. This is where the conversation starts - anything the user asks or says falls into this role."]}),"\n",(0,t.jsx)(s.admonition,{title:"user role",type:"tip",children:(0,t.jsx)(s.p,{children:"User role is especially helpful when performing few-shot prompting. In few-shot prompting, the goal is to provide the AI with a few examples of how you want it to respond, helping it learn from the pattern and apply to similar inputs."})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"When to use it:"}),"\nUsers ask questions, give commands, or request help. This role is how the assistant knows what to respond to."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Example:"}),"\nIf the user wants to reset their password, they might say:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"Can you help me reset my password?\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Assistant Role"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"What it does"}),":\nThe assistant role is the AI's response. It takes the user's input and the system's rules, and crafts a reply that fits."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Example:"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"Sure! To reset your password, go to the login page, click 'Forgot Password,' and follow the instructions.\n"})}),"\n",(0,t.jsx)(s.p,{children:"Check out real world use cases."}),"\n",(0,t.jsx)(s.h3,{id:"variables",children:"Variables"}),"\n",(0,t.jsx)(s.p,{children:"You can also parameterize the content that you're placing in the prompt messages. Start by typing:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-text",children:"{ variable }\n"})}),"\n",(0,t.jsxs)(s.p,{children:["in the prompt message section.\n",(0,t.jsx)(s.img,{alt:"variables",src:n(1212).A+"",width:"1493",height:"690"}),"\nand the variable will then show up on the left Inputs Section. Variables can help with:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Reusability"}),": Save time by using the same prompt with variable inputs."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Dynamic Content"}),": Tailor responses based on real-time data or user preferences. This comes in handy when performing evaluations(./evaluations.md)"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"See best practices with crafting prompts here."}),"\n",(0,t.jsx)(s.h2,{id:"inputs-section",children:"Inputs Section"}),"\n",(0,t.jsxs)(s.p,{children:["Variables that are entered in the prompt message section with ",(0,t.jsx)(s.code,{children:"{variable}"})," will show up in this section."]}),"\n",(0,t.jsx)(s.h2,{id:"model-configuration",children:"Model Configuration"}),"\n",(0,t.jsx)(s.p,{children:"You can choose the model that you want and set the model hyperparameters. Check [A visual explanation of LLM hyperparameters] to understand how to refine your prompt."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.img,{alt:"select model",src:n(8296).A+"",width:"399",height:"210"}),"\n",(0,t.jsx)(s.img,{alt:"hyperparaterms",src:n(2273).A+"",width:"287",height:"400"})]}),"\n",(0,t.jsx)(s.h2,{id:"output-section",children:"Output Section"}),"\n",(0,t.jsxs)(s.p,{children:["Click on ",(0,t.jsx)(s.code,{children:"Run"})," to run your prompt messages against the selected model and model hyperparameters.\n",(0,t.jsx)(s.img,{alt:"output section",src:n(3848).A+"",width:"725",height:"633"})]}),"\n",(0,t.jsx)(s.h2,{id:"version-section",children:"Version Section"}),"\n",(0,t.jsxs)(s.p,{children:["Every ",(0,t.jsx)(s.code,{children:"Run"})," is versioned and will show up on the left side of the bar. Big Hummingbird automatically tracks the prompt, model, and model hyperparameters so you can revert your changes and know what worked and what didn't work."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Version section",src:n(1494).A+"",width:"783",height:"754"})}),"\n",(0,t.jsxs)(s.p,{children:["All changes made without clicking on ",(0,t.jsx)(s.code,{children:"Run"})," will also be saved as draft. You can use the hash code to keep track of version your draft is based on."]}),"\n",(0,t.jsx)(s.admonition,{title:"prompt management",type:"tip",children:(0,t.jsx)(s.p,{children:"Prompt management is all about keeping your prompts organized, versioned, and continuously improving to get the best results from your AI. While Git is great for tracking code, it doesn't cover everything - like the actual inputs, outputs, or how well your prompts are performing. With prompt management, you're not just managing code; you're tracking tweaks, evaluating results, and refining prompts based on real feedback. See blog post for more details."})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3153:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/engine-1ed769395c77dd17e3fc64b76852d5d5.png"},2273:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/hyperparameters-0f6d00535c5afc82f0b69a6530ac5aff.png"},3848:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/run-1a4e457ce860534e7f14fd513119e70e.png"},8296:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/selectmodel-551919adab40ea346c257cc5e4f8045c.png"},8586:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/systemPrompt-0153cfe016421f43c4d211a2d5b324a4.png"},7157:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/userprompts-7a4d5c317601f8b3e830b5e539db99fd.png"},1212:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/variables-c696b3ea09447a6c855bb2dc0a7061cc.png"},1494:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/versionSection-45714e1dae0251e0d0dbc45bf5e77e55.png"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);