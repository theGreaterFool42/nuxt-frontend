import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  // css: ['vuetify/styles'],
  // build: {
  //   transpile: ["vuetify"],
  // },
  // vite: {
  //   ssr: {
  //     noExternal: ['vuetify']
  //   },
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
  // nitro: {
  //   externals: {inline: ['uuid']}
  // },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
}); 