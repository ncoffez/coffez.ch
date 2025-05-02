/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
		"./assets/**/*.css", // Add this to include global.css
	],
	darkMode: "class", // Simplify to 'class' unless you're using 'data-theme'
	theme: {
		extend: {
			colors: {
				primary: {
					50: "var(--color-primary-50)",
					100: "var(--color-primary-100)",
					200: "var(--color-primary-200)",
					300: "var(--color-primary-300)",
					400: "var(--color-primary-400)",
					500: "var(--color-primary-500)",
					600: "var(--color-primary-600)",
					700: "var(--color-primary-700)",
					800: "var(--color-primary-800)",
					900: "var(--color-primary-900)",
				},
				secondary: {
					50: "var(--color-secondary-50)",
					100: "var(--color-secondary-100)",
					200: "var(--color-secondary-200)",
					300: "var(--color-secondary-300)",
					400: "var(--color-secondary-400)",
					500: "var(--color-secondary-500)",
					600: "var(--color-secondary-600)",
					700: "var(--color-secondary-700)",
					800: "var(--color-secondary-800)",
					900: "var(--color-secondary-900)",
				},
				tertiary: {
					50: "var(--color-tertiary-50)",
					100: "var(--color-tertiary-100)",
					200: "var(--color-tertiary-200)",
					300: "var(--color-tertiary-300)",
					400: "var(--color-tertiary-400)",
					500: "var(--color-tertiary-500)",
					600: "var(--color-tertiary-600)",
					700: "var(--color-tertiary-700)",
					800: "var(--color-tertiary-800)",
					900: "var(--color-tertiary-900)",
				},
				quaternary: {
					50: "var(--color-quaternary-50)",
					100: "var(--color-quaternary-100)",
					200: "var(--color-quaternary-200)",
					300: "var(--color-quaternary-300)",
					400: "var(--color-quaternary-400)",
					500: "var(--color-quaternary-500)",
					600: "var(--color-quaternary-600)",
					700: "var(--color-quaternary-700)",
					800: "var(--color-quaternary-800)",
					900: "var(--color-quaternary-900)",
				},
			},
		},
		// Optional: extend Tailwind defaults if needed
	},
	plugins: [], // Add plugins if you need custom utilities
};
