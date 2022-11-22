/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
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
        sprite: "412px",
      },
      height: {
        sprite: "396px",
      },
      fontSize: {
        28: ["28px", "36px"],
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
      borderRadius: {
        15: "15px",
      },
    },
  },
  plugins: [],
};
