// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
  
    firebase: {
      apiKey: process.env.NUXT_API_KEY, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      authDomain: process.env.NUXT_AUTH_DOMAIN,
      databaseURL: process.env.NUXT_DATABASE_URL,
      projectId: process.env.NUXT_PROJECT_ID,
      storageBucket: process.env.NUXT_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_APP_ID,
      measurementId: process.env.NUXT_MEASUREMENT_ID,
    },
    public: {},
  },
  typescript: { shim: false },
  nitro: {
    preset: "firebase",
  },
  css: ["@/assets/global.sass", "@/assets/theme.scss"],
  ssr: true,
  app: {
    head: {
      title: "Coffez.ch",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@picocss/pico@latest/css/pico.min.css",
        },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
      htmlAttrs: {
        lang: "de-CH",
        "data-theme": "dark",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Coffez.ch bietet einzigartige und personalisierte Karikaturen für Veranstaltungen. Ob digital oder auf Papier, wir haben für alle Ihre Veranstaltungen die passende Lösung.",
        },
        {
          name: "keywords",
          content:
            "Karikaturen, Veranstaltungen, Digitale Karikaturen, Papier-Karikaturen, Personalisierte Karikaturen, Unterhaltung für Veranstaltungen, Portraits, Zeichnungen, Caricatures, Hochzeitsfeier, Hochzeitsfest, Event Animation",
        },
        {
          property: "og:title",
          content: "Coffez.ch - Karikaturen für Veranstaltungen",
        },
        {
          property: "og:description",
          content:
            "Coffez.ch bietet einzigartige und personalisierte Karikaturen für Veranstaltungen. Ob digital oder auf Papier, wir haben für alle Ihre Veranstaltungen die passende Lösung.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://coffez.ch",
        },
        {
          property: "og:image",
          content: "https://storage.googleapis.com/coffez-ch/analoge_zeichnung.jpeg",
        },
      ],
    },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18.config.js",
    strategy: "no_prefix",
    locales: [
      {
        code: "de",
        name: "Deutsch",
      },
      {
        code: "fr",
        name: "Français",
      },
      {
        code: "en",
        name: "English",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "de",
    },
  },
});
