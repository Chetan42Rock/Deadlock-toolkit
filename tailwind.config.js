/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          from: "#4c1d95",
          to: "#7e22ce"
        }
      }
    },
  },
  plugins: [],
}
