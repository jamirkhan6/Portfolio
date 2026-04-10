const getBio = require("./bio.tool.js");
const getSkills = require("./skill.tool.js");
const getGithubRepo = require("./getGithubRepo.tool.js")

const tools = [
  {
    type: "function",
    function: {
      name: "getBio",
      description: "Get developer bio, background, and portfolio links",
      parameters: { type: "object", properties: {} },
    },
  },
  {
    type: "function",
    function: {
      name: "getSkills",
      description: "Get developer technical skills categorized by area",
      parameters: { type: "object", properties: {} },
    },
  },
  {
    type: "function",
    function: {
      name: "getGithubRepo",
      description: "Get GitHub repositories with name, language, and URL",
      parameters: { type: "object", properties: {} },
    },
  },
];

const toolMap = { getBio, getSkills, getGithubRepo };

module.exports = { tools, toolMap };
