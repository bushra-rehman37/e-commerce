/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px', 
      },
      colors: {
        primary: '#89089F',  
        secondary: '#E4E4E4',
      },
    },
          
  },
  plugins: [],
}
