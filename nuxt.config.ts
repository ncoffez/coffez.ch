// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2026-06-07",
	srcDir: ".",
	dir: {
		app: "app",
	},
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
	tailwindcss: {
		cssPath: "@/assets/theme.css",
	},
	i18n: {
		defaultLocale: "de",
		strategy: "no_prefix",
		langDir: "../locales",
		locales: [
			{ code: "de", name: "Deutsch", file: "de.js" },
			{ code: "en", name: "English", file: "en.js" },
			{ code: "fr", name: "Francais", file: "fr.js" },
		],
	},
	runtimeConfig: {
		FIREBASE_ADMIN_KEY: process.env.FIREBASE_ADMIN_KEY,
		FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
		ENV: process.env.ENV,
		public: {
			FIREBASE_FRONTEND_KEY: process.env.FIREBASE_FRONTEND_KEY,
			FIREBASE_WEBAPP_CONFIG: process.env.FIREBASE_WEBAPP_CONFIG,
			GOOGLE_MAPS_EMBED_API_KEY: process.env.GOOGLE_MAPS_EMBED_API_KEY,
		},
	},
	app: {
		head: {
			title: "Coffez.ch",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1.0" }
			]
		}
	},
})
