/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'footer': '998px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors:{
        nav_text: "#2b2b2b",
        home_text: "#686868",
        hover_home: "#2C757D",
        color: "#657786",
        check: "#495057",
        contact:"#7A7A7A",
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

