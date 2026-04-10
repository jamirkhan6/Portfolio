const axios = require('axios')

async function getGithubRepo() {
  const res = await axios.get("https://github.com/jamirkhan6");
  return res.data.map((p) => ({
    name: p.name,
    language: p.language,
    url: p.html_url,
  }));
}

module.exports = getGithubRepo