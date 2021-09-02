const isGithubActions = process.env.GITHUB_ACTIONS || false

let repo

if (isGithubActions) {
  const githubRepository = process.env.GITHUB_REPOSITORY
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
}

console.log(`repo: ${repo}`)

module.exports = {
  assetPrefix: isGithubActions ? `/${repo}/` : ''
}