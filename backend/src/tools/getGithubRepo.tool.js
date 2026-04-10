const axios = require("axios");

async function getGithubRepo() {
  try {
    const res = await axios.get("https://api.github.com/users/jamirkhan6/repos", {
      headers: {
        Authorization: `token YOUR_GITHUB_TOKEN`,
        Accept: "application/vnd.github+json",
      },
    });

    const repos = res.data;

    if (!repos || repos.length === 0) {
      return { message: "No repositories found" };
    }

    const sorted = repos.sort(
      (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
    );

    const latest = sorted[0];

    return {
      latestProject: latest
        ? {
            name: latest.name,
            language: latest.language,
            url: latest.html_url,
          }
        : "No projects found",
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
