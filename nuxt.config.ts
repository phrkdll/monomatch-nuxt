// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ["@picocss/pico/css/pico.amber.min.css"], 
  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: "double",
        commaDangle: "always-multiline",
        indent: "tab",
      },
    },
  },
})