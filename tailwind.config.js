/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      brand: {
        default: "#F8CAA0",
        300: "#8C7662",
        500: "#F8CAA0"
      },
    },
    extend: {
      colors: {
        primary: {
          default: "#3C2C2D",
          200: "#A6AEAD",
          300: "#686A6C",
          400: "#555555",
          500: "#3C2C2D",
          700: "#202025"
        },
        secondary: {
          default:"#fe6768",
          300:'#f8caa0', 
          500: "#fe6768",
         
        },
        white: "#F7FBFA",
        black:'#010101'
      }
    },
    fontFamily : {
      sans:['Inter', 'sans-serif'],
      letterSpacing:"-0.02em"
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    boxShadow: {
      "custom": '0px 32px 48px -16px rgba(0, 0, 0, 0.1);'
    }
  },
  plugins: [],
}
