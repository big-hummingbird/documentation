"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[482],{4632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(4848),a=n(8453);const r={sidebar_position:2},o="Evaluating your model",s={id:"quick_start/create_a_random_judge",title:"Evaluating your model",description:"Imagine that you're creating a model that crafts responses for customer support and you want to know how your model performs against a fixed set of data points.",source:"@site/docs/quick_start/create_a_random_judge.md",sourceDirName:"quick_start",slug:"/quick_start/create_a_random_judge",permalink:"/documentation/docs/quick_start/create_a_random_judge",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick_start/create_a_random_judge.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/documentation/docs/category/quick-start"},next:{title:"LLM as a judge",permalink:"/documentation/docs/quick_start/llm_as_a_judge"}},d={},u=[{value:"Define your own dataset",id:"define-your-own-dataset",level:2},{value:"Initialize your project",id:"initialize-your-project",level:3},{value:"Create your dataset",id:"create-your-dataset",level:3},{value:"Upload your dataset",id:"upload-your-dataset",level:3},{value:"View your dataset on the dashboard.",id:"view-your-dataset-on-the-dashboard",level:3},{value:"How the dataset is versioned?",id:"how-the-dataset-is-versioned",level:3},{value:"Create your own judge",id:"create-your-own-judge",level:2},{value:"Define your scoring function",id:"define-your-scoring-function",level:3},{value:"Define your passing criteria (optional)",id:"define-your-passing-criteria-optional",level:3},{value:"Put scoring function and passing criteria together",id:"put-scoring-function-and-passing-criteria-together",level:3},{value:"Perfect!",id:"perfect",level:2},{value:"Putting everything together",id:"putting-everything-together",level:2},{value:"Next steps",id:"next-steps",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"evaluating-your-model",children:"Evaluating your model"}),"\n",(0,i.jsx)(t.p,{children:"Imagine that you're creating a model that crafts responses for customer support and you want to know how your model performs against a fixed set of data points."}),"\n",(0,i.jsx)(t.h2,{id:"define-your-own-dataset",children:"Define your own dataset"}),"\n",(0,i.jsx)(t.h3,{id:"initialize-your-project",children:"Initialize your project"}),"\n",(0,i.jsxs)(t.p,{children:["If you haven't already installed the python package from ",(0,i.jsx)(t.a,{href:"/documentation/docs/intro",children:"Quick Start"}),", install it now with"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install bighummingbird\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In your python code, create an instance of ",(0,i.jsx)(t.code,{children:"Bighummingbird"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"API Key",type:"tip",children:(0,i.jsxs)(t.p,{children:["You can get your API_KEY at ",(0,i.jsx)(t.a,{href:"http://www.bighummingbird.com",children:"www.bighummingbird.com"})," Workspace > Settings > Create New API Key"]})}),"\n",(0,i.jsx)(t.admonition,{title:"Don't want to expose your API_KEYs?",type:"tip",children:(0,i.jsxs)(t.p,{children:["You can store your API_KEYs in your local ",(0,i.jsx)(t.code,{children:".env"})," file for security. See securely store your API_KEYs for more information."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from bighummingbird import BigHummingbird\nbhb = BigHummingbird("Customer support project", API_KEY)\n'})}),"\n",(0,i.jsx)(t.h3,{id:"create-your-dataset",children:"Create your dataset"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Dataset"})," is a collection of only input data points, arranged in an array."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import bighummingbird.dataset import Dataset\ncustomer_questions = [\n    'I recently bought a blender from your store, but it stopped working within a week. Can I get a refund?',\n    'I\\'m having trouble installing the software I purchased. Can you help?',\n    'My order was supposed to arrive last week but I haven\\'t received it yet. What\\'s happening?',\n    'I\\'m locked out of my account and can\\'t reset my password. What should I do?',\n    'The air purifier I received last week is making a strange noise when it\\'s on the highest setting. Should I be concerned or is this normal?'\n]\n\ntest_dataset = Dataset(\"test_dataset\", data=customer_questions, description=\"Customer questions\")\ntest_dataset_tag = bighummingbird.upload_dataset(test_dataset)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"upload-your-dataset",children:"Upload your dataset"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"test_dataset_tag = bhb.upload_dataset(test_dataset)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"view-your-dataset-on-the-dashboard",children:"View your dataset on the dashboard."}),"\n",(0,i.jsxs)(t.p,{children:["insert image here.\nThe value in ",(0,i.jsx)(t.code,{children:"test_dataset_tag"})," will be how you reference this particular dataset."]}),"\n",(0,i.jsx)(t.h3,{id:"how-the-dataset-is-versioned",children:"How the dataset is versioned?"}),"\n",(0,i.jsx)(t.p,{children:"Any changes to the inputs, whether the value or the structure will automatically trigger a version update."}),"\n",(0,i.jsx)(t.h2,{id:"create-your-own-judge",children:"Create your own judge"}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"Judge"})," consists of a scoring function that assigns a numeric score to the outputs."]}),"\n",(0,i.jsx)(t.h3,{id:"define-your-scoring-function",children:"Define your scoring function"}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.code,{children:"scoring_function"})," is a function that takes your model outputs, and give them a numeric score."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"def scoring_rubric(output):\n    import random\n    return random.randint(1, 10)\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,i.jsxs)(t.p,{children:["Notice how ",(0,i.jsx)(t.code,{children:"import random"})," is added within a function. This is important because we track the entire function definition and run it against the model later on. If you have any dependencies, you must import it within the function."]})}),"\n",(0,i.jsxs)(t.p,{children:["In this example, the scoring rubric simply gives out a score between 1 to 5. Not very helpful in evaluating our model, but this fine for our demo purpose. To see how we could use LLM-as-a-judge to evaluate our model, see ",(0,i.jsx)(t.a,{href:"/documentation/docs/quick_start/llm_as_a_judge",children:"LLM-as-a-judge with OpenAI"})]}),"\n",(0,i.jsx)(t.h3,{id:"define-your-passing-criteria-optional",children:"Define your passing criteria (optional)"}),"\n",(0,i.jsxs)(t.p,{children:["Taken the score from ",(0,i.jsx)(t.code,{children:"scoring_rubric"}),", you can define a passing or failing threshold so that you can visually see your model's performance on the dashboard."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"def passing_criteria(score):\n    return score > 5\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can also define ",(0,i.jsx)(t.code,{children:"passing_criteria"})," as a range like. Just make sure that the output is a ",(0,i.jsx)(t.code,{children:"bool"})," type."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"def passing_criteria(score):\n    return 5 < score and score < 9\n"})}),"\n",(0,i.jsx)(t.h3,{id:"put-scoring-function-and-passing-criteria-together",children:"Put scoring function and passing criteria together"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'judge = Judge(\n    "random_judge",\n    "This judge will return a random score between 1 to 5",\n    scoring_rubric,\n    passing_criteria,\n)\n'})}),"\n",(0,i.jsx)(t.p,{children:"and add upload the judge to bighummingbird"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"bhb.add_judge(judge)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"perfect",children:"Perfect!"}),"\n",(0,i.jsx)(t.p,{children:"Now you can run your model and view the evaluation score on bighummingbird dashboard!"}),"\n",(0,i.jsx)(t.admonition,{title:"Remove assessment for production",type:"tip",children:(0,i.jsx)(t.p,{children:"Remember to remove the assessment decorator for production. Because bighummingbird will run the model against each data on your dataset, it might cause un-necessary computation and slow things down in production."})}),"\n",(0,i.jsx)(t.h2,{id:"putting-everything-together",children:"Putting everything together"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from bighummingbird import BigHummingbird\nfrom bighummingbird.judge import Judge\nfrom bighummingbird.dataset import Dataset\n\nbhb = BigHummingbird(\"From local\", API_KEY)\n\ncustomer_questions = [\n    'I recently bought a blender from your store, but it stopped working within a week. Can I get a refund?',\n    'I\\'m having trouble installing the software I purchased. Can you help?',\n    'My order was supposed to arrive last week but I haven\\'t received it yet. What\\'s happening?',\n    'I\\'m locked out of my account and can\\'t reset my password. What should I do?',\n    'The air purifier I received last week is making a strange noise when it\\'s on the highest setting. Should I be concerned or is this normal?'\n]\n\ntest_dataset = Dataset(\"test_dataset\", data=customer_questions, description=\"Customer questions\")\ntest_dataset_tag = bighummingbird.upload_dataset(test_dataset)\n\ndef scoring_rubric(outputs):\n    import random\n    return random.randint(1, 10)\n\ndef passing_criteria(score):\n    return score > 5\n\njudge = Judge(\n    \"random_judge\",\n    \"This judge will return a random score between 1 to 10\",\n    scoring_rubric,\n    passing_criteria,\n)\nbhb.add_judge(judge)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Learn how to add ",(0,i.jsx)(t.a,{href:"/documentation/docs/quick_start/llm_as_a_judge",children:"LLM-as-a-judge with OpenAI"})]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(6540);const a={},r=i.createContext(a);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);