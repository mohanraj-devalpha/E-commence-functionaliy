/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        nav_text: "#2b2b2b",
        home_text: "#686868",
        hover_home: "#2C757D",
        color: "#657786",
        check: "#495057",
      },
      fontSize:{
        nav: "11.0667px",
      },
      fontFamily:{
        nav_family: "'Montserrat-Regular',Arial",
        home: "poppins,Arial",
        grid: "Cormorant Garamond_16.0.0_google",
        cormorant: ['"Cormorant Garamond"', 'Arial', 'serif'],
        poppins: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

