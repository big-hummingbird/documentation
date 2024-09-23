"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17],{5043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),s=t(8453);const r={sidebar_position:5},i="Deployment Intro",a={id:"deployment/intro",title:"Deployment Intro",description:"Once you've fine-tuned your prompt and it's performing to your satisfaction, the next step is to deploy it, making your language model available via a REST API. Big Hummingbird streamlines the deployment process, allowing you to turn your prompts into production-ready endpoints in just a few step.",source:"@site/docs/deployment/intro.md",sourceDirName:"deployment",slug:"/deployment/intro",permalink:"/llm/docs/deployment/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Evaluations Key Concepts",permalink:"/llm/docs/evaluation/intro"},next:{title:"Deployment Endpoint Specs",permalink:"/llm/docs/deployment/endpoint_specs"}},l={},c=[{value:"Select a run for deployment",id:"select-a-run-for-deployment",level:2},{value:"Sending post requests",id:"sending-post-requests",level:2},{value:"Javascript",id:"javascript",level:3},{value:"Python",id:"python",level:3},{value:"Deployment logs",id:"deployment-logs",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deployment-intro",children:"Deployment Intro"}),"\n",(0,o.jsx)(n.p,{children:"Once you've fine-tuned your prompt and it's performing to your satisfaction, the next step is to deploy it, making your language model available via a REST API. Big Hummingbird streamlines the deployment process, allowing you to turn your prompts into production-ready endpoints in just a few step."}),"\n",(0,o.jsx)(n.h2,{id:"select-a-run-for-deployment",children:"Select a run for deployment"}),"\n",(0,o.jsx)(n.p,{children:"A run includes the prompt messages and model configurations (model + model hyperparameter)."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"deployment select run",src:t(1233).A+"",width:"1077",height:"260"})}),"\n",(0,o.jsxs)(n.p,{children:["Once you've selected a run, click on ",(0,o.jsx)(n.code,{children:"Launch"}),". Once deployed, you'll be able to access it via a POST request."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"launch",src:t(526).A+"",width:"1233",height:"646"})}),"\n",(0,o.jsxs)(n.p,{children:["Once your deployment succeeds, you can see your service available.\n",(0,o.jsx)(n.img,{alt:"current deployment",src:t(2493).A+"",width:"1707",height:"186"})]}),"\n",(0,o.jsx)(n.h2,{id:"sending-post-requests",children:"Sending post requests"}),"\n",(0,o.jsx)(n.p,{children:"Your prompt messages along with model configurations are available at the service url."}),"\n",(0,o.jsx)(n.h3,{id:"javascript",children:"Javascript"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="javascript code to send a POST request to the model"',children:"// You can find your service_url at the top of the deployment page.\nconst url = `{service_url}/generate`;\n\n// These should be your (or your users') inputs to the prompt.\nconst inputs = [\n    {key: `goal`, value: `drive conversions`},\n    {key: `product name`, value: `EcoKitchen Starter Kit: The Ultimate Eco-Friendly Kitchen Set`}\n];\n\nasync function sendRequest() {\n    // Make the POST request\n    const response = await fetch(url, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        }, \n        body: JSON.stringify(inputs)\n    });\n\n    if (response.ok) {\n        const data = await response.json();\n        console.log('Success:', data);\n    } else {\n        console.error('Error:', response.status, response.statusText);\n    }\n}\n\nsendRequest();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.p,{children:"If you have a Python based server like FastAPI or Flask, you can make a request with the following code."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. Set you virtual environment (recommended)"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"python -m venv .venv\nsource .venv/bin/activate\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. Make the POST request"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import requests\nimport json\n\n# You can find your service_url on the top of the deployment page.\nurl = f\'{service_url}/generate\'\n\n# These should be your (or your users\') inputs to the prompt.\ninputs = [\n    {"key": "goal", "value": """drive conversions"""},\n    {"key": "product name", "value": """EcoKitchen Starter Kit: The Ultimate Eco-Friendly Kitchen Set"""}\n]\n\n# Make the POST request\nresponse = requests.post(\n    url,\n    headers={\'Content-Type\': \'application/json\'}, \n    data=json.dumps(inputs)\n)\n\nif response.ok:\n    data = response.json()\n    print(\'Success:\', data)\nelse:\n    print(\'Error:\', response.status_code, response.reason)\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"deployment-logs",children:"Deployment logs"}),"\n",(0,o.jsxs)(n.p,{children:["For each engine, you can choose one run to deploy. All past deployments will live in the deployment logs section.\n",(0,o.jsx)(n.img,{alt:"deployment logs",src:t(338).A+"",width:"1707",height:"192"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2493:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/currentDeployment-6c027ea4b64aee82d1914fcf83151069.png"},338:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/deploymentLog-0f7987551ad4713d8e1366f902651d57.png"},1233:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/deployment_select_run-c3f0091e5dd6c2715d7cb8c6ce00951f.png"},526:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/launch-0d8cd27c5537b3608b89560d70a7895c.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);