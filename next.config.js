const { nextI18NextRewrites } = require('next-i18next/rewrites')
// const runtimeCaching = require('next-pwa/cache')
// const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const localeSubpaths = {
    ru: 'ru',
    en: 'en',
}
module.exports = withBundleAnalyzer({
    webpack5: true,
    pwa: {
        dest: 'public',
        swSrc: 'service-worker.js',
    },
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
})
