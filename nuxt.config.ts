// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  icon: {
    mode: "svg"
  },
  runtimeConfig: {
    public: {
      FIREBASE_FRONTEND_KEY: process.env.FIREBASE_FRONTEND_KEY,
      TEST_VARIABLE: process.env.TEST_VARIABLE,
      CUSTOM_ENV: process.env.CUSTOM_ENV
    },
    FIREBASE_ADMIN_KEY: process.env.FIREBASE_ADMIN_KEY,
    TEST_SECRET: process.env.TEST_SECRET,
  },
  nitro: {
    preset: "firebase",
    firebase: {
      gen: 2,
      httpsOptions: {
        region: "europe-west6",
        maxInstances: 3,
        cpu: "gcf_gen1",
      },
    },
  },
  routeRules: {
    '/live/:id/download': { redirect: '/live/:id' },
  },
  css: ["@/assets/global.sass"],
  ssr: true,
  app: {
    head: {
      title: "Coffez.ch",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
      htmlAttrs: {
        lang: "de-CH",
        class: "bg-zinc-900 text-stone-300"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          hid: "description",
          name: "description",
          content:
            "Coffez.ch - einzigartige Karikaturen für Ihre Veranstaltung. Ob digital oder auf Papier, wir verewigen Ihre Gäste mit einem Lächeln. #Karikaturen #Veranstaltungen #Hochzeit #Zeichnungen",
        },
        {
          name: "keywords",
          content:
            "Karikaturen, Veranstaltungen, Digitale Karikaturen, Hochzeitskarikaturen, Personalisierte Karikaturen, Unterhaltung für Veranstaltungen, Portraits, Zeichnungen, Caricatures",
        },
        { property: "og:title", content: "Coffez.ch - Karikaturen für Veranstaltungen" },
        {
          property: "og:description",
          content:
            "Coffez.ch bietet einzigartige und personalisierte Karikaturen für Veranstaltungen. Ob digital oder auf Papier, wir haben für alle Ihre Veranstaltungen die passende Lösung.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://coffez.ch" },
        {
          property: "og:image",
          content: "https://storage.googleapis.com/coffez-ch/analoge_zeichnung.jpeg",
        },
      ],
    },
  },
  modules: ["@nuxtjs/i18n", "@nuxt/icon"],
  i18n: {
    vueI18n: "./i18.config.js",
    strategy: "no_prefix",
    locales: [
      {
        code: "de",
        name: "Deutsch",
        flag: "https://hatscripts.github.io/circle-flags/flags/de.svg",
      },
      {
        code: "fr",
        name: "Français",
        flag: "https://hatscripts.github.io/circle-flags/flags/fr.svg",
      },
      {
        code: "en",
        name: "English",
        flag: "https://hatscripts.github.io/circle-flags/flags/gb.svg",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "de",
    },
  },
  compatibilityDate: '2024-07-04',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler',
        },
      },
    },
  }
});