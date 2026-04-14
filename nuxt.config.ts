import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@vueuse/nuxt", "@nuxt/fonts", "nitro-cloudflare-dev"],

  fonts: {
    families: [
      { name: "Inter", provider: "google" },
      { name: "Quicksand", provider: "google" },
      { name: "JetBrains Mono", provider: "google" },
      { name: "Fira Code", provider: "google" },
    ],
  },

  routeRules: {
    "/**": {
      headers: {
        "Content-Security-Policy":
          "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;",
      },
    },
  },

  nitro: {
    preset: "cloudflare-pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  app: {
    head: {
      title: "Regex Café — Learn Regex by Playing",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg", sizes: "any" },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Learn regular expressions by solving interactive puzzles. A fun, hands-on way to master regex patterns.",
        },
        { property: "og:title", content: "Regex Café — Learn Regex by Playing" },
        {
          property: "og:description",
          content:
            "Learn regular expressions by solving interactive puzzles. A fun, hands-on way to master regex patterns.",
        },
        { property: "og:url", content: "https://regex.cafe" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://regex.cafe/og-image.svg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Regex Café — Learn Regex by Playing" },
        {
          name: "twitter:description",
          content:
            "Learn regular expressions by solving interactive puzzles. A fun, hands-on way to master regex patterns.",
        },
        { name: "twitter:image", content: "https://regex.cafe/og-image.svg" },
      ],
      htmlAttrs: { lang: "en" },
    },
  },
})
