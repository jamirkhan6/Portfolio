const getBio = require("./bio.tool.js");
const getProjects = require("./project.tool.js");
const getSkills = require("./skill.tool.js");

const tools = [
  {
    type: "function",
    function: {
      name: "getBio",
      description: "Get developer bio",
      parameters: { type: "object", properties: {} },
    },
  },
  {
    type: "function",
    function: {
      name: "getProjects",
      description: "Get all projects",
      parameters: { type: "object", properties: {} },
    },
  },
  {
    type: "function",
    function: {
      name: "getSkills",
      description: "Get developer skills",
      parameters: { type: "object", properties: {} },
    },
  },
];

const toolMap = { getBio, getProjects, getSkills };

module.exports = { tools, toolMap };
