const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

const nextI18n = new NextI18Next({
    defaultLanguage: 'uz',
    otherLanguages: ['ru', 'en'],
    // fallbackLng: 'uz',
    localeSubpaths,
    localePath: path.resolve('./public/static/locales'),
    detection: {
        order: [
            'querystring',
            'cookie',
            'localStorage',
            'sessionStorage',
            'navigator',
            'htmlTag',
            'path',
            'subdomain',
        ],
    },
    // browserLanguageDetection: false,
})

module.exports = nextI18n

exports.i18n = nextI18n.i18n
