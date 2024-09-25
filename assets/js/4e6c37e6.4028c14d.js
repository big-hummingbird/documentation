"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[336],{7314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const r={sidebar_position:1},o="Quick Start",a={id:"get_started/intro",title:"Quick Start",description:"Big Hummingbird is a LLM platform born from the need to help software engineers develop LLM applications with best practices in mind. It streamlines everything from prompt management and engineering to evaluating and deploying LLM applications.",source:"@site/docs/get_started/intro.mdx",sourceDirName:"get_started",slug:"/get_started/intro",permalink:"/llm/docs/get_started/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Key Concepts",permalink:"/llm/docs/engine/intro"}},l={},d=[{value:"Step-by-Step",id:"step-by-step",level:3},{value:"1. Create Prompt",id:"1-create-prompt",level:2},{value:"2. Configure model (optional)",id:"2-configure-model-optional",level:2},{value:"3. Create a new chat session",id:"3-create-a-new-chat-session",level:2},{value:"4. Manage prompts",id:"4-manage-prompts",level:2},{value:"5. Deploying",id:"5-deploying",level:2},{value:"Select a run for deployment",id:"select-a-run-for-deployment",level:3},{value:"Sending POST requests",id:"sending-post-requests",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(n.p,{children:"Big Hummingbird is a LLM platform born from the need to help software engineers develop LLM applications with best practices in mind. It streamlines everything from prompt management and engineering to evaluating and deploying LLM applications."}),"\n",(0,s.jsxs)(n.p,{children:["First, ",(0,s.jsx)(n.a,{href:"https://www.bighummingbird.com/signin",children:"sign in"})," or ",(0,s.jsx)(n.a,{href:"https://www.bighummingbird.com/signin",children:"create a new account"})," if you haven't already."]}),"\n",(0,s.jsx)(n.p,{children:"Once you're logged in, it's time to set up a new engine. The engine will serve as your workspace, where you'll iterate on prompts and manage deployments for your projects."}),"\n",(0,s.jsx)(n.p,{children:"In this engine, we'll craft a prompt for an AI email marketing assistant. Here's how to set it up:"}),"\n",(0,s.jsx)(n.h3,{id:"step-by-step",children:"Step-by-Step"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Create Prompt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Configure Model"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Create New Chat Session"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Manage Prompts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Deploying"})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("iframe",{allow:"fullscreen",src:"https://player.vimeo.com/video/1007795676?badge=0&transparent=1&autopause=0&player_id=0&app_id=58479&controls=0&autoplay=1&loop=1&muted=1",className:"h-[400px] w-full",title:"Develop Segment Video"}),"\n",(0,s.jsx)(n.h2,{id:"1-create-prompt",children:"1. Create Prompt"}),"\n",(0,s.jsx)(n.p,{children:"Create a new engine on your dashboard and in the engine area, create the following prompt messages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Role"}),": System"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Message"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"\nYou are a virtual wellness coach, providing users with mindfulness tips and motivational encouragement. You have access to the following information, your responses are based on general wellness principles.\n\nUser name: {user_name}\nPreferred exercise: {preferred_exercise}\n\nAddress the user's name with a calming and supportive tone in your responses. Your goal is to help users feel better and encourage them in their wellness journey. \n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Notice how we've used ",(0,s.jsx)(n.code,{children:"{user_name}"})," and ",(0,s.jsx)(n.code,{children:"{preferred_exercies}"})," in the message itself. These variables are optional and are designed to help you parameterize your messages for greater flexibility and reusability."]}),"\n",(0,s.jsx)(n.admonition,{title:"message roles",type:"tip",children:(0,s.jsxs)(n.p,{children:["For more information on how to choose ",(0,s.jsx)(n.code,{children:"role"}),"s, see ",(0,s.jsx)(n.a,{href:"/llm/docs/engine/intro#prompt-section",children:"message roles"})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"2-configure-model-optional",children:"2. Configure model (optional)"}),"\n",(0,s.jsx)(n.p,{children:"At this stage, you can also configure the model's parameters to fine-tune its behavior."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"model choice",src:t(8296).A+"",width:"399",height:"210"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"model hyperparameters",src:t(2273).A+"",width:"287",height:"400"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"3-create-a-new-chat-session",children:"3. Create a new chat session"}),"\n",(0,s.jsxs)(n.p,{children:["Click on ",(0,s.jsx)(n.code,{children:"Create a new chat session"})," and start chatting with your chatbot! Your chatbot is now configured with your prompt and model."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"4-manage-prompts",children:"4. Manage prompts"}),"\n",(0,s.jsx)(n.p,{children:"In Big Hummingbird, managing prompts is simple and designed to help you stay organized while experimenting and iterating."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Edit Existing Prompts"}),": You can easily update your prompts as you iterate. All ",(0,s.jsx)(n.em,{children:"runs"})," (whenever you click on run) are versioned. Each version contains the prompt message, selected model, and corresponding model hyperparamters so you can easily track what worked and what didn't work."]}),"\n",(0,s.jsx)(n.p,{children:'Big Hummingbird also automatically tracks the lineage of your draft engine state if you haven\'t "run" the model yet.'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"version",src:t(1494).A+"",width:"783",height:"754"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"5-deploying",children:"5. Deploying"}),"\n",(0,s.jsx)(n.p,{children:"Once you've fine-tuned your prompt and it's performing to your satisfaction, the next step is to deploy it, making your language model available via a REST API. Big Hummingbird streamlines the deployment process, allowing you to turn your prompts into production-ready endpoints in just a few step."}),"\n",(0,s.jsx)(n.h3,{id:"select-a-run-for-deployment",children:"Select a run for deployment"}),"\n",(0,s.jsx)(n.p,{children:"A run includes the prompt messages and model configurations (model + model hyperparameter)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"deployment select run",src:t(1233).A+"",width:"1077",height:"260"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you've selected a run, click on ",(0,s.jsx)(n.code,{children:"Launch"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Once your deployment succeeds, you can see your service up and running."}),"\n",(0,s.jsx)(n.h3,{id:"sending-post-requests",children:"Sending POST requests"}),"\n",(0,s.jsxs)(n.p,{children:["And that's it! Your prompt messages along with model configurations are available at the service url. Check out ",(0,s.jsx)(n.a,{href:"/llm/docs/deployment/endpoint_specs",children:"Deployment Endpoint Specs"})," for how to initialize your chat session and invoking the LLM."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1233:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/deployment_select_run-c3f0091e5dd6c2715d7cb8c6ce00951f.png"},2273:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/hyperparameters-0f6d00535c5afc82f0b69a6530ac5aff.png"},8296:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/selectmodel-551919adab40ea346c257cc5e4f8045c.png"},1494:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/versionSection-45714e1dae0251e0d0dbc45bf5e77e55.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);