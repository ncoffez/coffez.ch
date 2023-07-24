// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { shim: false },
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
    }
  }
});
