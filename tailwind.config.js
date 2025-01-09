/** @type {import('tailwindcss').Config} */

export default {
  content: ["src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"], // Fuente para títulos
      },
      spacing: {
        xs: "1rem",
        md: "2rem",
        lg: "4rem",
        xl: "8rem",
        xxl: "16rem",
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 4px 10px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        black: "#151616",
        green: "#333E27",
        greenLigth: "#898c63",
        beige: "#e7d9af",
        orange: "#c4572a",
      },
    },
  },
  darkMode: "class",
  plugins: ["@tailwindcss/typography", "@tailwindcss/forms"],
};
