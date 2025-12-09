const repoName = 'portfolio-website';

module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
