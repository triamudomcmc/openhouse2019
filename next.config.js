const withCSS = require('@zeit/next-css')
const images = require('remark-images')
const emoji = require('remark-emoji')
const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [],
    hastPlugins: [images, emoji]
  }
})

module.exports = withCSS(withMDX())
