const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
})

module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
})
