---
sidebar_position: 5
---

# Judge

A judge component evaluates a single output or a set of outputs using a scoring function, assigning them a numeric score. Additionally, you can include an optional passing function, which specifies the score range deemed "passing" for your particular use case. Judge components can be used in [runs](./run.md) and [evaluations](./evaluations.md)

**Judge(name, description, scoring_rubric, passing_criteria)**

**Parameters**:
- **name: `string`**
    - Description: The name of the judge.
- **description: `string`**
    - Description: A brief description of what the judge evaluates.
- **scoring_rubric: `function`**
    - Description: A function that takes input and returns either an **integer** or **float** as the score.
- **passing_criteria: `function`**
    - Description: An optional function that takes a score and returns a **boolean** indicating whether the score is considered passing.

See [Evaluating model](../quick_start/evaluating_model.md) and [LLM as a judge](../quick_start/llm_as_a_judge.md) for examples on how to use a judge component.