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
      keyframes: {
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'bounce-in': {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.1)', opacity: 0.8 },
        },
      },
      animation: {
        'slide-up': 'slide-up 1s ease-in-out',
        'bounce-in': 'bounce-in 0.5s ease-out',
      },
    },
          
  },
  plugins: [],
}
