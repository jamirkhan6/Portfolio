const { tools, toolMap } = require("../tools/index.js");
const { openai } = require("../config/openAi.js");

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
- If user asks about:
  - skills → show skills
  - projects / github → show projects
  - about / bio → show bio

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
      model: "gpt-4o-mini", // 🔥 FIXED MODEL
      messages,
      tools,
    });
  } catch (err) {
    console.error("OpenAI error:", err);
    return "Error contacting AI service";
  }

  const msg = response.choices[0].message;

  let toolCall = msg.tool_calls?.[0];

  // 🔥 FIXED FALLBACK (use USER message, not AI response)
  if (!toolCall) {
    const text = message.toLowerCase();

    if (text.includes("project") || text.includes("github")) {
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
      text.includes("about") ||
      text.includes("yourself")
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
      return "Something went wrong. Please try again.";
    }

    // 🔥 SAFE JSON PARSE
    let args = {};
    try {
      args = JSON.parse(toolCall.function.arguments || "{}");
    } catch (e) {
      args = {};
    }

    const result = await toolMap[toolName](args);

    const secondResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        ...messages,
        msg,
        {
          role: "tool",
          tool_call_id: toolCall.id,
          content: JSON.stringify(result, null, 2),
        },
        {
          role: "system",
          content:
            "Format the response nicely using markdown. Do not return raw JSON.",
        },
      ],
    });

    return secondResponse.choices[0].message.content;
  }

  return msg.content;
}

module.exports = { handleChat };