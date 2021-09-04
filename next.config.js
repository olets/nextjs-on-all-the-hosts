const isGithubActions = process.env.GITHUB_ACTIONS || false

let repo

if (isGithubActions) {
  const githubRepository = process.env.GITHUB_REPOSITORY
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
}

module.exports = {
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  images: {
    loader: 'imgix',
    path: 'https://olets.imgix.net/',
  },
}
