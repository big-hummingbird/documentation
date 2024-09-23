"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[890],{3495:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(4848),t=n(8453);const o={},a="Chat Session",r={id:"engine/chat_session",title:"Chat Session",description:"A chat session is a distinct conversation instance that consists of three main components:",source:"@site/docs/engine/chat_session.md",sourceDirName:"engine",slug:"/engine/chat_session",permalink:"/llm/docs/engine/chat_session",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Key Concepts",permalink:"/llm/docs/engine/intro"},next:{title:"Messages",permalink:"/llm/docs/engine/messages"}},c={},l=[{value:"Chat Sessions: Wellness Coach Chatbot Example",id:"chat-sessions-wellness-coach-chatbot-example",level:2},{value:"How It Works",id:"how-it-works",level:3},{value:"Making Each Chat Session Unique",id:"making-each-chat-session-unique",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"chat-session",children:"Chat Session"}),"\n",(0,i.jsx)(s.p,{children:"A chat session is a distinct conversation instance that consists of three main components:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/llm/docs/engine/messages",children:(0,i.jsx)(s.strong,{children:"Messages"})}),": An array of ",(0,i.jsx)(s.code,{children:"Message"})," type objects, where each message contains:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Role"}),": Defines the speaker of the message and can be one of the following: ",(0,i.jsx)(s.code,{children:"system"}),", ",(0,i.jsx)(s.code,{children:"user"}),", or ",(0,i.jsx)(s.code,{children:"assistant"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content"}),": A string containing the text of the message.\nIn most cases, chat sessions begin with a single message from the ",(0,i.jsx)(s.code,{children:"system"})," role. However, in scenarios such as few-shot prompting, the session may also include ",(0,i.jsx)(s.code,{children:"user"})," and ",(0,i.jsx)(s.code,{children:"assistant"})," role messages to provide examples of itneraction."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Model Configuration"}),": The specific settings or parameters that define how the model behaves during the session."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/llm/docs/engine/variables",children:(0,i.jsx)(s.strong,{children:"Variables"})}),": Custom values that personalize the session, such as user-specific data or chat session-specific context."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You can create multiple chat sessions from a specific ",(0,i.jsx)(s.a,{href:"/llm/docs/engine/intro",children:"engine"})," version. Each session has its own set of variables, enabling you to tailor the initial setup for different use cases."]}),"\n",(0,i.jsx)(s.h2,{id:"chat-sessions-wellness-coach-chatbot-example",children:"Chat Sessions: Wellness Coach Chatbot Example"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"create multiple chat sessions from the same engine version",src:n(1764).A+"",width:"894",height:"484"})}),"\n",(0,i.jsx)(s.p,{children:"This guide will show you how to set up a wellness coach chatbot that provides personalized, uplifting conversations. The chatbot uses simple information about the user to create a unique experience for each person."}),"\n",(0,i.jsx)(s.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsx)(s.p,{children:"The chatbot is designed to encourage users with mindfulness tips and motivational support. It can great users by name and give advice based on their favorite exercise. Here's how it starts:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Message Setup"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-text",children:'Role: "system"\nMessage: "\nYou are a virtual wellness coach, providing users with mindfulness tips and motivational encouragement. \nYou have access to the following information, your responses are based on general wellness principles.\n\nUser name: {user_name}\nPreferred exercise: {preferred_exercise}\n\nAddress the user\'s name with a calming and supportive tone in your responses. \nYour goal is to help users feel better and encourage them in their wellness journey. \n"\n'})}),"\n",(0,i.jsx)(s.p,{children:"In this setup:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The chatbot uses the user's name to make the conversation feel personal."}),"\n",(0,i.jsx)(s.li,{children:"It adjusts its advice based on the user's favorite exercise, like running or yoga, to give them relevant tips."}),"\n",(0,i.jsx)(s.li,{children:"The tone is always calm and encouraging, helping users feel supported."}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:"Initialize chat sessions with variables\nThe chatbot uses two main pieces of information (variables) to create personalized chat sessions:"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"user_name \u2013 This is the user's name, so the chatbot can address them directly.\npreferred_exercise \u2013 The user\u2019s favorite exercise, which could be anything from yoga to swimming, to tailor the responses."}),"\n",(0,i.jsx)(s.h3,{id:"making-each-chat-session-unique",children:"Making Each Chat Session Unique"}),"\n",(0,i.jsxs)(s.p,{children:["You can change these variables to create different chat experiences. For example, if a user prefers meditation instead of running, the chatbot will provide responses that fit that choice. Variables can be setup when you create the chat session. See ",(0,i.jsx)(s.a,{href:"/llm/docs/deployment/intro",children:"deployment"})," for more information."]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1764:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/engine_state_chat_session-6b838f90aa5fd0d88da0e754089133f2.png"},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var i=n(6540);const t={},o=i.createContext(t);function a(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);