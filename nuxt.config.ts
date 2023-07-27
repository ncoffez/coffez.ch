// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@picocss/pico@latest/css/pico.min.css",
        },
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
});
