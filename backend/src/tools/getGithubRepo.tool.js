const axios = require('axios')

async function getGithubRepo() {
  const res = await axios.get(
    "https://api.github.com/users/yourusername/repos"
  );
  return res.data.map((p) => ({
    name: p.name,
    language: p.language,
    url: p.html_url,
  }));
}

module.exports = getGithubRepo