/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontSize: {
      40: ["40px", "72px"],
      80: ["80px", "96px"],
      "3xl": ["30px", "48px"],
      "5xl": ["48px", "64px"],
      "7xl": ["72px", "88px"],
      xs: "12px",
      sm: ["14px", "20px"],
    },
    fontFamily: {
      accent: ["Lexend Deca", "sans-serif"],
      heading: ["Syne", "sans-serif"],
    },
    borderRadius: {
      15: "15px",
    },
    extend: {
      colors: {
        secondary: "#532C59",
      },
    },
  },
  plugins: [],
};
