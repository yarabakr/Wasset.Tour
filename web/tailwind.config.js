/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        cardFade: {
          "0%": { backgroundColor: "white" },
          "100%": { backgroundColor: "#0d9488" },
        },
      },
      animation: {
        cardFade: "cardFade 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
