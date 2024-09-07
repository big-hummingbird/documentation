"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[976],{619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(4848),o=t(8453);const a={sidebar_position:1},r="What is BigHummingbird",s={id:"intro",title:"What is BigHummingbird",description:"BigHummingbird is a simple toolbox to help speed up your LLM projects during experimental phase so you can focus on the tweaking and not the tracking and get your models to production faster.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/documentation/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/documentation/docs/category/quick-start"}},d={},c=[{value:"5 minute quick start",id:"5-minute-quick-start",level:2},{value:"Next steps",id:"next-steps",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"what-is-bighummingbird",children:"What is BigHummingbird"}),"\n",(0,i.jsx)(n.p,{children:"BigHummingbird is a simple toolbox to help speed up your LLM projects during experimental phase so you can focus on the tweaking and not the tracking and get your models to production faster."}),"\n",(0,i.jsx)(n.h2,{id:"5-minute-quick-start",children:"5 minute quick start"}),"\n",(0,i.jsxs)(n.p,{children:["It takes just a couple lines to get started. Try it on your local machine or start with one of our\n",(0,i.jsx)(n.a,{href:"https://colab.research.google.com/drive/1A7v-opSGYT7nlTVX0LFNRcYKZekaRlV9?usp=sharing",children:"Google Colab Quickstart"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install bighummingbird python package"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install bighummingbird\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Initialize your project"})}),"\n",(0,i.jsx)(n.admonition,{title:"API Key",type:"tip",children:(0,i.jsxs)(n.p,{children:["You can get your API_KEY at ",(0,i.jsx)(n.a,{href:"http://www.bighummingbird.com/settings",children:"www.bighummingbird.com/settings"})]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from bighummingbird import BigHummingbird\nbhb = BigHummingbird(API_KEY)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Decorate whichever model you want to track"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="model.py"',children:"# Add the trace decorator\n@bhb.trace\ndef model(input_a, input_b):\n  # Your model here\n  # GPT-4 text generation\n  # summarization\n  # translation\n  # sentiment analysis\n  return input_a + input_b\n\nmodel(1, 2)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python model.py\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"View runs and models on a dashboard"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"run_table",src:t(6865).A+"",width:"1699",height:"462"}),"\n",(0,i.jsx)(n.img,{alt:"model_detail_v1",src:t(2372).A+"",width:"1088",height:"372"})]}),"\n",(0,i.jsx)(n.p,{children:"This will automatically track your model function signature, outputs, and the model definition. Any changes to these attributes will automatically trigger BigHummingbird to increment your model version."}),"\n",(0,i.jsx)(n.p,{children:"Let's take a look at an example and update our model."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Add the trace decorator\n@bhb.trace\ndef model(input_a, input_b):\n  return input_a - input_b # addition changed into subtraction\nmodel(1, 2)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"model_detail_v2",src:t(5583).A+"",width:"1077",height:"233"}),"\nNotice how the model is now updated to ",(0,i.jsx)(n.code,{children:"v2"}),". This is a model tag that you can reference at any time. This will come in handy when we want to pull out previous models and evaluate their performance before checking in our code."]}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Learn how to add a custom judge with your own test dataset to ",(0,i.jsx)(n.a,{href:"/documentation/docs/quick_start/evaluating_model",children:"evaluate your model performance"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Learn how to add ",(0,i.jsx)(n.a,{href:"/documentation/docs/quick_start/llm_as_a_judge",children:"LLM-as-a-judge with OpenAI"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2372:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/model_detail_v1-0311113f12a77b96250af893e2c896f3.png"},5583:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/model_detail_v2-e2f02cd6e3d5d5687d4e9a23ca185f74.png"},6865:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/run_table-3cf816043c4c1a4b90d71e3a50f89464.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(6540);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);