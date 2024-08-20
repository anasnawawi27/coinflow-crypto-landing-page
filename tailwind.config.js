/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#2ea8a2",
        secondary: "#004442",
        black: "#3b3e48",
        gray: "#777c90",
        customGreen: "#51ad94",
        customDarkPurple: "#5337f0",
        customOrange: "#f7931a",
        customPurple: "#863ff8",
        customYellow: "#f1b90a",
        customBlue: "#0659ff",
      },
      fontFamily: {
        aeonik: ["aeonik"],
      },
    },
  },
  plugins: [],
};
