export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],

  app: {
    baseURL: '/folio/',
    head: {
      title: 'Folio · 杂志风读书笔记',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '一本关于阅读与生活的杂志。读书笔记、生活随想、碎片思考。' },
        { name: 'theme-color', content: '#faf8f5' },
        { property: 'og:title', content: 'Folio · 杂志风读书笔记' },
        { property: 'og:description', content: '一本关于阅读与生活的杂志' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&family=Noto+Sans+SC:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=JetBrains+Mono:wght@400;500&display=swap'
        },
        { rel: 'icon', href: '/folio/favicon.ico' }
      ]
    }
  },

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    build: {
      markdown: {
        highlight: {
          theme: 'one-dark-pro',
          preload: ['json', 'js', 'ts', 'html', 'css', 'shell', 'python', 'bash']
        }
      }
    }
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-06-22'
})
