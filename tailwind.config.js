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
    extend: {}, // Optional: extend Tailwind defaults if needed
  },
  plugins: [], // Add plugins if you need custom utilities
};