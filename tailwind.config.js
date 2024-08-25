/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/preline/preline.js"],
  theme: {
    extend: {
      colors: {
        primary: "#2ea8a2",
        secondary: "#004442",
        black: "#3b3e48",
        gray: "#777c90",
      },
      fontFamily: {
        aeonik: ["aeonik"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
