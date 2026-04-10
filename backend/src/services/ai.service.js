const { tools, toolMap } = require("../tools/index.js")
const { openai } = require("../config/openAi.js")

async function handleChat(message) {
    
  const messages = [
    {
      role: "system",
      content: `
You are a professional portfolio assistant.

Rules:
- Never mention tools, functions, or backend logic
- Never expose internal implementation details
- Answer like a human assistant
- Be clean, structured, and helpful
- Use markdown formatting (bold, lists, links)

Focus only on the final answer.
`,
    },
    {
      role: "user",
      content: message,
    },
  ];

  let response;

  try {
    response = await openai.chat.completions.create({
      model: "meta-llama/llama-3-8b-instruct",
      messages,
      tools,
    });
  } catch (err) {
    console.error("OpenAI error:", err);
    return "Error contacting AI service";
  }
  

  const msg = response.choices[0].message;

  let toolCall = msg.tool_calls?.[0];

  // 🔥 fallback
  if (!toolCall && msg.content) {
    const text = msg.content.toLowerCase();

    if (text.includes("project") || text.includes("language")) {
      toolCall = {
        function: { name: "getGithubRepo", arguments: "{}" },
        id: "manual_project",
      };
    } else if (text.includes("skill")) {
      toolCall = {
        function: { name: "getSkills", arguments: "{}" },
        id: "manual_skill",
      };
    } else if (
      text.includes("bio") ||
      text.includes("yourself") ||
      text.includes("about")
    ) {
      toolCall = {
        function: { name: "getBio", arguments: "{}" },
        id: "manual_bio",
      };
    }
  }

  if (toolCall) {
    const toolName = toolCall.function.name;

    if (!toolMap[toolName]) {
      return "Tool not found";
    }

    const args = JSON.parse(toolCall.function.arguments || "{}");

    const result = await toolMap[toolName](args);

    const secondResponse = await openai.chat.completions.create({
      model: "meta-llama/llama-3-8b-instruct",
      messages: [
        ...messages,
        msg,
        {
          role: "tool",
          tool_call_id: toolCall.id,
          content: JSON.stringify(result),
        },
      ],
    });

    return secondResponse.choices[0].message.content;
  }

  return msg.content;
}



module.exports = {handleChat}