// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //Bootstrap
  app: {
    head: {
      title: 'Hops and Dreams',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  css: ['@/assets/css/main.css'],
  plugins: ['~/plugins/fontawesome.js'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: { port: 8000 },
  modules: ['nuxt-mongoose', '@nuxt/image'],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
})