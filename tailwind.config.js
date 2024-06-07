/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "400px",
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1680px",
      "4xl": "2200px",
    },
    extend: {
      fontFamily: {
        poppins: "poppins",
        questrial: "Questrial",
      },
      colors: {
        primary: "#1D4ED8", 
        secondary: "#F59E0B", 
        accent: "#10B981", 
        background: "#FFFFFF", 
        foreground: "#1F2937", 
        "dark-background": "#081354", 
        "secondary-dark-background": "#0C1A6C",
        "dark-foreground": "#F9FAFB", 
      },
    },
  },
  plugins: [],
}

