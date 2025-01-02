// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
plugins: ['~/plugins/fontawesome.js'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {port: 8000},
  modules: ['nuxt-mongoose', '@nuxt/image'],
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
    modelsDir: 'models',
    devtools: true,
  },
})