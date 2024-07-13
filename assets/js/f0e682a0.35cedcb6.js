"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[881],{3897:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"What is BigHummingbird","href":"/documentation/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"Quick Start","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Evaluating your model","href":"/documentation/docs/quick_start/evaluating_model","docId":"quick_start/evaluating_model","unlisted":false},{"type":"link","label":"LLM as a judge","href":"/documentation/docs/quick_start/llm_as_a_judge","docId":"quick_start/llm_as_a_judge","unlisted":false}],"href":"/documentation/docs/category/quick-start"},{"type":"category","label":"Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Run","href":"/documentation/docs/concepts/run","docId":"concepts/run","unlisted":false},{"type":"link","label":"Model","href":"/documentation/docs/concepts/model","docId":"concepts/model","unlisted":false},{"type":"link","label":"Dataset","href":"/documentation/docs/concepts/dataset","docId":"concepts/dataset","unlisted":false},{"type":"link","label":"Judge","href":"/documentation/docs/concepts/judge","docId":"concepts/judge","unlisted":false},{"type":"link","label":"Evaluations","href":"/documentation/docs/concepts/evaluations","docId":"concepts/evaluations","unlisted":false}],"href":"/documentation/docs/category/concepts"},{"type":"category","label":"Further Topics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Best practices with setting up environment variables","href":"/documentation/docs/further_topics/env_var","docId":"further_topics/env_var","unlisted":false}],"href":"/documentation/docs/category/further-topics"}]},"docs":{"concepts/dataset":{"id":"concepts/dataset","title":"Dataset","description":"A \\"dataset\\" is a collection of input data points, arranged in an array, used to evaluate and test the performance and accuracy of a model. Think of it as a set of different test scenarios to see how well your model performs with various inputs.","sidebar":"tutorialSidebar"},"concepts/evaluations":{"id":"concepts/evaluations","title":"Evaluations","description":"Evaluations play a critical role in assessing the performance of a model against a predefined dataset. By systematically measuring a model\'s accuracy, we can gain valuable insights into its strengths and areas for improvement. In this section, we will guide you through the process of creating and understanding evaluations in our system.","sidebar":"tutorialSidebar"},"concepts/judge":{"id":"concepts/judge","title":"Judge","description":"A judge component evaluates a single output or a set of outputs using a scoring function, assigning them a numeric score. Additionally, you can include an optional passing function, which specifies the score range deemed \\"passing\\" for your particular use case. Judge components can be used in runs and evaluations","sidebar":"tutorialSidebar"},"concepts/model":{"id":"concepts/model","title":"Model","description":"A model is a trained machine learning algorithm, and its model code, input types, and output types are tracked and versioned to ensure reproducibility, accountability, and systematic improvement overtime.","sidebar":"tutorialSidebar"},"concepts/run":{"id":"concepts/run","title":"Run","description":"A model run includes tracking the inputs, outputs, and latency of executing a trained machine learning model with specific data to generate predictions.","sidebar":"tutorialSidebar"},"further_topics/env_var":{"id":"further_topics/env_var","title":"Best practices with setting up environment variables","description":"Environment variables are key for keeping your app\'s settings flexible and secure. They help you manage things like API keys and database passwords without hardcoding them, making it easy to switch between development, testing, and production environments.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"What is BigHummingbird","description":"BigHummingbird is a simple toolbox to help speed up your LLM projects during experimental phase so you can focus on the tweaking and not the tracking and get your models to production faster.","sidebar":"tutorialSidebar"},"quick_start/evaluating_model":{"id":"quick_start/evaluating_model","title":"Evaluating your model","description":"Imagine that you\'re creating a model that crafts responses for customer support and you want to know how your model performs against a fixed set of data points.","sidebar":"tutorialSidebar"},"quick_start/llm_as_a_judge":{"id":"quick_start/llm_as_a_judge","title":"LLM as a judge","description":"In Evaluating your model, we created a judge that gives a random score from 1 to 10. Now, we want to create a real automated judge that can tell us the performance of our model.","sidebar":"tutorialSidebar"}}}}')}}]);