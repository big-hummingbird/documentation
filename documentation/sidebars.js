/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "category",
      label: "Get Started",
      collapsible: true,
      collapsed: false,
      items: ["get_started/intro", "get_started/rag_chat"],
    },
    // {
    //   type: "category",
    //   label: "Workspace",
    //   collapsible: true,
    //   collapsed: false,
    //   items: ["workspace/intro", "workspace/connection"],
    // },
    {
      type: "category",
      label: "Engine",
      collapsible: true,
      collapsed: false,
      items: [
        "engine/intro",
        "engine/chat_session",
        "engine/messages",
        "engine/variables",
        // "engine/rag",
      ],
    },
    {
      type: "category",
      label: "Evaluation",
      collapsible: true,
      collapsed: false,
      items: ["evaluation/intro"],
    },
    {
      type: "category",
      label: "Deployment",
      collapsible: true,
      collapsed: false,
      items: ["deployment/intro", "deployment/endpoint_specs"],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
