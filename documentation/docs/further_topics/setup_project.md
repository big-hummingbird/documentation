---
sidebar_position: 3
---
# Setting up your project
You can bypass the project setup selection menu if you already know your project and workspace ids. 

## Configuration file
:::tip[Workspace and Project ids]
You can find your workspace and project ids in your project's Overview page.
www.bighummingbird.com
:::

```python
from bighummingbird import BigHummingbird
config = {
    "workspace_name": YOUR_WORKSPACE_NAME,
    "project_name": YOUR_PROJECT_NAME
}
bhb = BigHummingbird(YOUR_API_KEY, config)
```
