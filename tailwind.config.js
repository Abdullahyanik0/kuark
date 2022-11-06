/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        subtext: "#9e9e9e",
        hovertext: "#FF9800",
        accordion: "#3C3E44",
        bg: "#202329",
        button: "#22C55E",
      },
    },
  },
  plugins: [],
};
