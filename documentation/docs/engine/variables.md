# Variables

Variables allow you to parameterize the content within your prompt messages, making interactions more dynamic and personalized. To define a variable, use the following format:
```text
{ variable }
```

These variables can be incorporated into both the main system message and any subsequent messages. They are tracked in the engine's history, ensuring consistent usage throughout the conversation. Variables act as initial conditions that you set when starting a new chat session. 

## Customization
**Travel Bot Example**

In a travel bot scenario, variables enable you to tailor responses based on user input or predefined parameters. For example, you can set up variables for different locations, dates, or user preferences to create a more personalized experience.

*Example:*
```text
{destination} = Paris
{check_in_date} = October 10
{check_out_date} = October 15
```
When initiating a chat session, you can initialize the `destination` variable to `Paris`.

You can also combine variables with [few-shot prompting](./messages.md#multi-turn-few-shot-prompting) to generate customized responses:

```text
Looking for hotels in {destination} from {check_in_date} to {check_out_date}
```

