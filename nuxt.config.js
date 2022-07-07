export default {
  server: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Websocket Chat Project',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'description', name: 'description', content: 'Chat with Node, Nest, Vue, Nuxt, TypeScript, Tailwind and Websocket' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-title', property: 'og:title', content: 'Websocket Chat Project' },
      { hid: 'og-desc', property: 'og:description', content: 'Chat with Node, Nest, Vue, Nuxt, TypeScript, Tailwind and Websocket' },
      { hid: 'og:image', property: 'og:image', content: `https://www.guga-araujo.dev.br/img/websocket-chat-meta.png` },
      { hid: 'og-url', property: 'og:url', content: 'https://websocket-chat-project.vercel.app/' },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.guga-araujo.dev.br/img/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-socket-io',
    '@nuxtjs/composition-api/module'
  ],

  io: {
    sockets: [ // Required
      { // At least one entry is required
        name: 'home',
        url: process.env.VUE_APP_SOCKET_URL
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
