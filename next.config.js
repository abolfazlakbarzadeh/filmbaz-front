const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './assets/styles')],
    prependData: `@import "colors.scss"; @import "mixins.scss"; @import "vars.scss";`
  }
}

module.exports = nextConfig
