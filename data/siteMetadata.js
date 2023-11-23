/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'ToxoBlog',
  author: 'Inés San Luís Rodríguez',
  headerTitle: 'ToxoBlog',
  description: 'Exploring algorithms, JavaScript, CSS, and UX.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://toxo.blog',
  siteRepo: 'https://github.com/ines-sanluis/toxo',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ines.sanluis.rguez@gmail.com',
  github: 'https://github.com/ines-sanluis',
  linkedin: 'https://www.linkedin.com/in/ines-sanluis/',
  locale: 'en-US',
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
