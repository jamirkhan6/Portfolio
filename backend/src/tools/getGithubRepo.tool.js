const axios = require("axios");

async function getGithubRepo() {
  try {
    const res = await axios.get(
      "https://api.github.com/users/YOUR_USERNAME/repos"
    );

    if (!res.data || res.data.length === 0) {
      return { message: "No repositories found" };
    }

    const sorted = res.data.sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    );

    const latest = sorted[0];

    return {
      latestProject: {
        name: latest.name,
        language: latest.language,
        url: latest.html_url,
      },
      projects: sorted.slice(0, 5).map((p) => ({
        name: p.name,
        language: p.language,
        url: p.html_url,
      })),
    };
  } catch (error) {
    console.error("GitHub API error:", error.message);

    return {
      error: "Failed to fetch GitHub repositories",
    };
  }
}

module.exports = getGithubRepo;
