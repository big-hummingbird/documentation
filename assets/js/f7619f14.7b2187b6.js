"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[691],{7290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(4848),r=t(8453);const o={sidebar_position:2},a="Run",d={id:"concepts/run",title:"Run",description:"Why do we want to trace model inference inputs and outputs?",source:"@site/docs/concepts/run.md",sourceDirName:"concepts",slug:"/concepts/run",permalink:"/documentation/docs/concepts/run",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/concepts/run.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/documentation/docs/category/concepts"},next:{title:"Model",permalink:"/documentation/docs/concepts/model"}},s={},l=[{value:"Why do we want to trace model inference inputs and outputs?",id:"why-do-we-want-to-trace-model-inference-inputs-and-outputs",level:2},{value:"Tracing a model inference",id:"tracing-a-model-inference",level:2},{value:"Model Detection",id:"model-detection",level:3},{value:"Model Tagging",id:"model-tagging",level:3},{value:"Evaluate model run performance",id:"evaluate-model-run-performance",level:2}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"run",children:"Run"}),"\n",(0,i.jsx)(n.h2,{id:"why-do-we-want-to-trace-model-inference-inputs-and-outputs",children:"Why do we want to trace model inference inputs and outputs?"}),"\n",(0,i.jsx)(n.p,{children:"In the lifecycle of model development and deployment, tracing every single inference input and output value is essential for several reasons. Whether you're int he experimental phase or deploying a production model, detailed tracing provides:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Debugging and Error Analysis"}),": Tracing inputs and outputs allows you to pinpoint exactly where a model might be failing or producing unexpected results."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Performance monitoring"}),": Continuous tracing helps monitor the model's performance in real-time. By analyzing the input and output data, you can detect performance degradation, anomalies, or drift, ensuring your model remains reliable over time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Optimizing Model Performance"}),": By analyzing the traced inputs and outputs, you can identify patterns and trends that inform further optimizations."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Handling Non-Deterministic Models"}),": Some models, particularly those that are non-deterministic, produce different outputs for the same input due to inherent randomness. Tracing every input and output is crucial for these models as it allows you to understand and quantify the variability in their behavior."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tracing-a-model-inference",children:"Tracing a model inference"}),"\n",(0,i.jsx)(n.p,{children:"BigHummingbird makes it simple to trace a model inference input and output values."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="model.py"',children:'from bighummingbird import BigHummingbird\nbhb = BigHummingbird("Concept Project", API_KEY)\n@bhb.trace\ndef model(input_a, input_b):\n  # Your model here\n  # GPT-4 text generation\n  # summarization\n  # translation\n  # sentiment analysis\n  return input_a + input_b\n\nmodel(1, 2)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python model.py\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"View runs and models on a dashboard"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"run_table",src:t(6865).A+"",width:"1699",height:"462"}),"\n",(0,i.jsx)(n.img,{alt:"model_detail_v1",src:t(2372).A+"",width:"1088",height:"372"})]}),"\n",(0,i.jsx)(n.p,{children:"This will automatically track your model function signature, outputs, and the model definition. Any changes to these attributes will automatically trigger BigHummingbird to increment your model version."}),"\n",(0,i.jsx)(n.h3,{id:"model-detection",children:"Model Detection"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"New Model"}),": If the model is new, BigHummingbird will automatically create it for you."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Existing Model"}),": If the model already exists, BigHummingbird will recognize it and won't create a duplicate."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"model-tagging",children:"Model Tagging"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Each model is assigned a unique identifier called the ",(0,i.jsx)(n.strong,{children:"Model Tag"})]}),"\n",(0,i.jsxs)(n.li,{children:["The format for a Model Tag is ",(0,i.jsx)(n.code,{children:"{model_name}:{version}"})]}),"\n",(0,i.jsx)(n.li,{children:"Model tags are unique to each project, ensuring that each model can be distinctly identified within its respective project."}),"\n",(0,i.jsxs)(n.li,{children:["If the ",(0,i.jsx)(n.code,{children:"{model_name}"})," is updated, a new model tag will be created and start from version: ",(0,i.jsx)(n.code,{children:"v1"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Let's take a look at an example and update our model."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@bhb.trace\ndef model(input_a, input_b):\n  return input_a - input_b # addition changed into subtraction\nmodel(1, 2)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"model_detail_v2",src:t(5583).A+"",width:"1077",height:"233"}),"\nNotice how the model is now updated to ",(0,i.jsx)(n.code,{children:"v2"}),". This is a model tag that you can reference at any time. This will come in handy when we want to pull out previous models and evaluate their performance before checking in our code."]}),"\n",(0,i.jsx)(n.h2,{id:"evaluate-model-run-performance",children:"Evaluate model run performance"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="model.py"',children:'from bighummingbird import BigHummingbird\nfrom bighummingbird.judge import Judge\n\nbhb = BigHummingbird("Quick Start", API_KEY)\n\ndef scoring_rubric(outputs):\n    # This is important. All necessary imports must be done here.\n    import random\n    return random.randint(1, 10)\n\ndef passing_criteria(score):\n    return score > 5\n\njudge = Judge(\n    "random-judge",\n    "This judge will return a random score between 1 to 10",\n    scoring_rubric,\n    passing_criteria,\n)\njudge_tag = bhb.add_judge(judge)\n\n@bhb.assess(judge_tag)\ndef model(input_a, input_b):\n  # Your model here\n  # GPT-4 text generation\n  # summarization\n  # translation\n  # sentiment analysis\n  return input_a + input_b\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2372:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/model_detail_v1-0311113f12a77b96250af893e2c896f3.png"},5583:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/model_detail_v2-e2f02cd6e3d5d5687d4e9a23ca185f74.png"},6865:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/run_table-3cf816043c4c1a4b90d71e3a50f89464.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var i=t(6540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);