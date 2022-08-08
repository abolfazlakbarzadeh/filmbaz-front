const path = require('path')
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './assets/styles')],
    prependData: `@import "colors.scss"; @import "mixins.scss"; @import "vars.scss";`
  },
  i18n: {
    ...i18n,
    localeDetection: false
  },
  trailingSlash: true
}

module.exports = nextConfig
