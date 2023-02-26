/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(50px)" },
          "25%": { transform: "translateX(-50px)" },
          "50%": { transform: "translateX(30px)" },
          "75%": { transform: "translateX(-20px)" },
          "100%": { transform: "translateX(10)" },
        },
      },
      animation: {
        slide: "slide 1s ease",
      },
    },
    colors: {
      // Using modern `rgb`
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
      third: "rgb(var(--color-third) / <alpha-value>)",
      forth: "rgb(var(--primary-500) / <alpha-value>)",
      btn: "rgb(var(--color-btn) / <alpha-value>)",
      // import some colors
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      black: "#000000",
      hand: "#ffdd00",
      mainBg: "#f1f5f8",
      green: "#7FFF00",
      "blue-light": "#837dff",
      red: "#FF0000",
    },
    boxShadow: {
      "3xl": "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
    },
    gridTemplateRows: {
      // Simple 8 row grid
      1: "auto 1fr",

      // Complex site-specific row configuration
      layout: "200px minmax(900px, 1fr) 100px",
    },
  },
  plugins: [],
};
