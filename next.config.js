const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

module.exports = withNextra({
  // Standalone build for Docker deployment
  output: 'standalone',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Silence Turbopack warning for Nextra v2 webpack config
  turbopack: {},
})
