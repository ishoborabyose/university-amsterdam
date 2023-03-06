/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        hove: "hsl(344deg 100% 37%)",
      },
      boxShadow: {
        shadow1: "0 0 10px rgb(0 0 0 / 15%)",
        shadow2: "0 2px 10px rgb(0 0 0 / 15%)",
        hov: "0 4px 12px rgb(0 0 0 / 25%)",
        hov1: " 0 2px 8px rgb(0 0 0 / 25%)",
        hov3: "0 10px 20px rgb(0 0 0 / 15%), 0 5px 15px rgb(0 0 0 / 25%);",
      },
      transitionDuration: {
        trans: "all 350ms cubic-bezier(.445,.05,.55,.95)",
      },

      fontFamily: {
        sans: ["var(--font-utopia)", ...fontFamily.sans],
        sourceSans: ["var(--font-sourceSans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
