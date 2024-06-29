"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8039],{4196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var s=n(4848),r=n(8453);const o={sidebar_position:2},a="LLM as a judge",i={id:"quick_start/llm_as_a_judge",title:"LLM as a judge",description:"In Evaluating your model, we created a judge that gives a random score from 1 to 10. Now, we want to create a real automated judge that can tell us the performance of our model.",source:"@site/docs/quick_start/llm_as_a_judge.md",sourceDirName:"quick_start",slug:"/quick_start/llm_as_a_judge",permalink:"/documentation/docs/quick_start/llm_as_a_judge",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick_start/llm_as_a_judge.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Evaluating your model",permalink:"/documentation/docs/quick_start/create_a_random_judge"},next:{title:"Concepts",permalink:"/documentation/docs/category/concepts"}},d={},u=[{value:"Load the dataset",id:"load-the-dataset",level:2},{value:"Create a new LLM-as-a-judge",id:"create-a-new-llm-as-a-judge",level:2},{value:"Let&#39;s test out our new LLM-as-a-judge",id:"lets-test-out-our-new-llm-as-a-judge",level:2},{value:"How does the judge perform in the real world?",id:"how-does-the-judge-perform-in-the-real-world",level:2},{value:"Putting everything together",id:"putting-everything-together",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"llm-as-a-judge",children:"LLM as a judge"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.a,{href:"/documentation/docs/quick_start/create_a_random_judge",children:"Evaluating your model"}),", we created a judge that gives a random score from 1 to 10. Now, we want to create a real automated judge that can tell us the performance of our model."]}),"\n",(0,s.jsx)(t.h2,{id:"load-the-dataset",children:"Load the dataset"}),"\n",(0,s.jsxs)(t.p,{children:["In this tutorial, we will reuse the dataset created in ",(0,s.jsx)(t.a,{href:"/documentation/docs/quick_start/create_a_random_judge",children:"Evaluating your model"})]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-new-llm-as-a-judge",children:"Create a new LLM-as-a-judge"}),"\n",(0,s.jsxs)(t.p,{children:["In this tutorial, we're going to use OpenAI ",(0,s.jsx)(t.code,{children:"gpt-3.5-turbo-instruct"})," as our LLM. To use the LLM, visit ",(0,s.jsx)(t.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI API Keys"})," and generate a new key."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def scoring_rubric(outputs):\n    # Notice how we're importing all packages here.\n    # This is important because we track the entire function definition \n    # and run it against the model later on. \n    # If you have any dependencies, you must import it within the function. \n    import requests\n    import re\n    from dotenv import load_dotenv\n    import os\n    load_dotenv()\n    url = 'https://api.openai.com/v1/completions'\n    prompt = 'You are an expert in customer relations. '\\\n            + 'Your task is to provide a \\'total rating\\' scoring how well the system_answer answers the user concerns expressed in the user_question.'\\\n            + 'Give your answer as a float on a scale of 0 to 10, where 0 means that the system_answer is not helpful at all, and 10 means that the answer completely and helpfully addresses the question.' \\\n            + 'The user_question is ===' + outputs[\"question\"] + \"===\" \\\n            + 'The system_answer is ===' + outputs[\"answer\"] + \"===\" \\\n            + 'Provide your score in the format of ===Total score: ' \\\n            + 'If you cannot provide a score, provide ===Total score: None'\n\n\n    headers = {\n        'Content-Type': 'application/json',\n        'Authorization': f'Bearer {os.getenv(\"OPENAI_API_KEY\")}',\n    }\n\n    data = {\n        'model': 'gpt-3.5-turbo-instruct',\n        'prompt': prompt,\n        'max_tokens': 20,\n        'temperature': 0,\n    }\n\n    response = requests.post(url, headers=headers, json=data)\n\n    if response.status_code == 200:\n        result = response.json()\n        generated_text = result['choices'][0]['text'].strip()\n        score = int(re.search(r'\\d+', generated_text).group())\n        return score\n    else:\n        print(f\"Error: {response.status_code} - {response.text}\")\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"API Key",type:"tip",children:(0,s.jsxs)(t.p,{children:["Beware of directly passing your OpenAI keys. For more information on how to set up environment variables, check out ",(0,s.jsx)(t.a,{href:"/documentation/docs/further_topics/env_var",children:"Best practices with setting up environment variables"})]})}),"\n",(0,s.jsx)(t.p,{children:"Our passing criteria function can be the same for now."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"def passing_criteria(score):\n    return score > 5\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now, we construct our new smart judge"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'smart_judge = Judge(\n    "smart_judge",\n    "This LLM-as-a-judge will return a score from 1 to 10",\n    scoring_rubric,\n    passing_criteria,\n)\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Remember to add the new judge to your ",(0,s.jsx)(t.code,{children:"BigHummingbird"})," project."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"bhb.add_judge(judge)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"lets-test-out-our-new-llm-as-a-judge",children:"Let's test out our new LLM-as-a-judge"}),"\n",(0,s.jsx)(t.p,{children:"Now we have a new LLM-as-a-judge, let's do some sanity checks.\nIn the model that we generate support response, let's start with something simple and return a hard-coded response and see if our LLM-as-a-judge will able to score it properly."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'title="rude_model.py"',children:'def model(question):\n    return {\n        "question": question,\n        "answer": "This is your problem. Stop asking me. " # rude!\n    }    \n'})}),"\n",(0,s.jsx)(t.p,{children:"Oh wow, this is super rude! Please don't every say this! Let's see if our LLM-as-a-judge can detect this as a rude response."}),"\n",(0,s.jsxs)(t.p,{children:["Let's add our ",(0,s.jsx)(t.code,{children:"@assess"})," decorator to the model\nTODO: Add how we know it's smart_judge",":v1"," and test_dataset",":v1"," here"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'title="rude_model.py"',children:'# add @assess decorator here\n@assess("smart_judge:v1", "test_dataset:v1")\ndef model(question):\n    return {\n        "question": question,\n        "answer": "This is your problem. Stop asking me. " # rude!\n    }\n'})}),"\n",(0,s.jsx)(t.p,{children:"Run your model:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"python rude_model.py\n"})}),"\n",(0,s.jsx)(t.p,{children:"Yep! Our LLM-as-a-judge can perfectly tell that this is a bad response."}),"\n",(0,s.jsx)(t.h2,{id:"how-does-the-judge-perform-in-the-real-world",children:"How does the judge perform in the real world?"}),"\n",(0,s.jsx)(t.p,{children:"Okay. Now for something more fun. Let's update our model to return high quality customer support responses."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:'title="model.py"',children:"@bhb.assess(\"random-judge:v1\", \"test_dataset:v1\")\ndef model(question):\n    import requests\n\n    api_key = os.getenv(\"OPENAI_API_KEY\")\n    url = 'https://api.openai.com/v1/completions'\n    prompt = 'You are an expert in customer relations. '\\\n            + 'Your task is to provide a great support response to the given customer question.'\\\n            + 'Give your response as a sentence and it should be in a supportive and helpful tone.' \\\n            + 'The user_question is ===' + question + \"===\"\n\n\n    headers = {\n        'Content-Type': 'application/json',\n        'Authorization': f'Bearer {api_key}',\n    }\n\n    data = {\n        'model': 'gpt-3.5-turbo-instruct',\n        'prompt': prompt,\n        'max_tokens': 20,\n        'temperature': 0,\n    }\n\n    response = requests.post(url, headers=headers, json=data)\n\n    if response.status_code == 200:\n        result = response.json()\n        generated_text = result['choices'][0]['text'].strip()\n        return {\"question\": question, \"answer\": generated_text}\n    else:\n        print(f\"Error: {response.status_code} - {response.text}\")\n"})}),"\n",(0,s.jsx)(t.p,{children:"Run the new model"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"python model.py\n"})}),"\n",(0,s.jsx)(t.h2,{id:"putting-everything-together",children:"Putting everything together"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"bhb = BigHummingbird(\"LLM as a judge\", API_KEY)\n\ncustomer_questions = [\n    'I recently bought a blender from your store, but it stopped working within a week. Can I get a refund?',\n    'I\\'m having trouble installing the software I purchased. Can you help?',\n    'My order was supposed to arrive last week but I haven\\'t received it yet. What\\'s happening?',\n    'I\\'m locked out of my account and can\\'t reset my password. What should I do?',\n    'The air purifier I received last week is making a strange noise when it\\'s on the highest setting. Should I be concerned or is this normal?'\n]\n\ntest_dataset = Dataset(\"test_dataset\", data=customer_questions, description=\"Customer questions\")\ntest_dataset_tag = bhb.upload_dataset(test_dataset)\n\ndef scoring_rubric(outputs):\n    import requests\n    import re\n    from dotenv import load_dotenv\n    import os\n    load_dotenv()\n    url = 'https://api.openai.com/v1/completions'\n    prompt = 'You are an expert in customer relations. '\\\n            + 'Your task is to provide a \\'total rating\\' scoring how well the system_answer answers the user concerns expressed in the user_question.'\\\n            + 'Give your answer as a float on a scale of 0 to 10, where 0 means that the system_answer is not helpful at all, and 10 means that the answer completely and helpfully addresses the question.' \\\n            + 'The user_question is ===' + outputs[\"question\"] + \"===\" \\\n            + 'The system_answer is ===' + outputs[\"answer\"] + \"===\" \\\n            + 'Provide your score in the format of ===Total score: ' \\\n            + 'If you cannot provide a score, provide ===Total score: None'\n\n\n    headers = {\n        'Content-Type': 'application/json',\n        'Authorization': f'Bearer {os.getenv(\"OPENAI_API_KEY\")}',\n    }\n\n    data = {\n        'model': 'gpt-3.5-turbo-instruct',\n        'prompt': prompt,\n        'max_tokens': 20,\n        'temperature': 0,\n    }\n\n    response = requests.post(url, headers=headers, json=data)\n\n    if response.status_code == 200:\n        result = response.json()\n        generated_text = result['choices'][0]['text'].strip()\n        score = int(re.search(r'\\d+', generated_text).group())\n        return score\n    else:\n        print(f\"Error: {response.status_code} - {response.text}\")\n\ndef passing_criteria(score):\n    return score > 5\n\nsmart_judge = Judge(\n    \"smart_judge\",\n    \"This LLM-as-a-judge will return a score from 1 to 10\",\n    scoring_rubric,\n    passing_criteria,\n)\nbhb.add_judge(smart_judge)\n"})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);