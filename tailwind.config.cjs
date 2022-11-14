/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#6C4AB6",
      bg: "#001F27",
      primary: "#00DC81",
      secundary: "#022A35",
      hover: "#50edab",
    },
    extend: {},
  },
  plugins: [],
};
