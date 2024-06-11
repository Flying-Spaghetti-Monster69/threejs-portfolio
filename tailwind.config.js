/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/index.html", "./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        Modeseven: ["Modeseven", "sans-serif"],
      },
      colors: {
        primary: "#08d108",
        secondary: "#91bf91",
        tertiary: "#136313",
        background: "#333333",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.webp')",
      },
    },
  },
  plugins: [],
};
