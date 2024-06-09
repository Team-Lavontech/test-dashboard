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
        primary: "#323031", 
        secondary: "#F59E0B", 
        accent: "#10B981", 
        background: "#FFFFFF", 
        foreground: "#1F2937", 
        "hover-bg": "#E4E4E4",
        "active-bg": "#FEDC97",
        "sidebar-bg": "#F4F4F4",
        "title": "#B48615",
        "sidebar-link": "#6C500B",
        "dark-background": "#171D42", 
        "secondary-dark-background": "#21295C",
        "dark-foreground": "#F9FAFB", 
        "dark-primary": "#FFFFFF", 
        "dark-hover-bg": "#28336E",
        "dark-active-bg": "#C57005",
        "dark-title": "#F6D481",
        "dark-sidebar-link": "#F6E4B8",
      },
    },
  },
  plugins: [],
}

