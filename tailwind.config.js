/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8D6E63",
        secondary: "#A1887F",
        accent: "#5D4037",
        background: "#F5F5F5"
      }
    },
  },
  plugins: []
}
