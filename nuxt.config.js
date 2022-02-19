import theme from '@jsilva-pt/nuxt-content-theme-blog'

const baseUrl = 'https://barenmaulana.github.io'

const publicRuntimeConfig = {
  baseUrl: 'https://barenmaulana.github.io',

  logoLight: '/logoLight.png',
  logoDark: '/logoDark.png',

  githubOwner: 'barenmaulana',
  githubRepository: 'blogs',
  githubMainBranch: 'master',

  footerLinks: {
    social: [{
      text: 'Github',
      href: 'https://github.com/barenMaulana/'
    },
    {
      text: 'Linkedin',
      href: 'https://id.linkedin.com/in/baren-maulana-850149206'
    }],
  },
}

export default theme({
  feedOptions: {
    title: 'biaren blog',
    description: '',
    link: baseUrl,
  },

  publicRuntimeConfig,

  pwa: {
    manifest: {
      short_name: 'biaren blog',
    },
    meta: {
      author: 'baren maulana',
      theme_color: '#2C3E50',
      ogHost: baseUrl,
      twitterCard: 'summary_large_image',
      twitterSite: publicRuntimeConfig.twitterUsername,
      twitterCreator: publicRuntimeConfig.twitterUsername,
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./i18n/en-US'),
      },
    },
  },

  head: {
    title: 'Biaren Blogs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Tempat berbagi informasi programming, dan cerita penulis'
      },
      {
        name: 'google-site-verification',
        content: 'IBRJnNn4H-jHM-M1RXGFowYa-FZAB8tfkLgU4aG19RE'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }]
  },
})