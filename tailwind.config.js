/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "rgb(24 26 28 / <alpha-value>)",
      },
      backgroundImage: {
        themeGradient:
          "linear-gradient(45deg, #ff82f3 0%, #7b13ff 50%, #400d64 100%)",
      },
    },
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
      sansSerif: ["sans-serif"],
    },
  },
  plugins: [],
};
