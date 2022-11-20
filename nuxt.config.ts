// import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    // [
    //   '@pinia/nuxt',
    //   {
    //     autoImports: [
    //       // automatically imports `defineStore`
    //       'defineStore', // import { defineStore } from 'pinia'
    //       // automatically imports `defineStore` as `definePiniaStore`
    //       ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    //     ],
    //   },
    // ],
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.cjs',
    exposeConfig: false,
    config: { content: [] },
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  },
});
