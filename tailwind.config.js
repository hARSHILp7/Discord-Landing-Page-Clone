/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto : "'Roboto', sans-serif",
        seymour : "'Seymour One', sans-serif",
        opensans : "'Open Sans', sans-serif"
      }
    },
  },
  plugins: [],
}
