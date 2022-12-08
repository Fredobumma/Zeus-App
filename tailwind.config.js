/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      bigTab: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      accent: ["Lexend Deca", "sans-serif"],
      heading: ["Syne", "sans-serif"],
    },
    extend: {
      width: {
        81: "81px",
        85: "85.33",
        135: "135px",
        150: "`150px",
        "sp-x1": "241px",
        sprite: "412px",
      },
      height: {
        sprite: "396px",
      },
      fontSize: {
        28: ["28px", "36px"],
        32: ["32px", "42px"],
        40: ["40px", "72px"],
        80: ["80px", "96px"],
        "3xl": ["30px", "48px"],
        "5xl": ["48px", "64px"],
        "7xl": ["72px", "88px"],
        xs: "12px",
      },
      colors: {
        secondary: "#532C59",
      },
      boxShadow: {
        custom1:
          "rgba(192, 166, 225, 0.5) 0px 0px 0px 2px, rgba(162, 169, 177, 0.65) 0px 4px 6px -1px, rgba(62, 62, 192, 0.08) 0px 1px 0px inset",
      },
      borderRadius: {
        15: "15px",
        "4xl": "40px",
      },
    },
  },
  plugins: [],
};
