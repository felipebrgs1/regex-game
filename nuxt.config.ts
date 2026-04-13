import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/eslint',
  ],

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Quicksand', provider: 'google' },
      { name: 'JetBrains Mono', provider: 'google' },
      { name: 'Fira Code', provider: 'google' },
    ],
  },

  nitro: {
    preset: 'cloudflare-pages',
  },

  app: {
    head: {
      title: 'Regex Café — Aprenda Regex jogando',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Aprenda expressões regulares resolvendo puzzles interativos.' },
      ],
      htmlAttrs: { lang: 'pt-BR' },
    },
  },
})