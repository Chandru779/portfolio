/** @type {import('tailwindcss').Config} */

const fontFamily = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:`class`,
  theme: {
    extend: {
      fontFamily:{
        mont:['var(--font-mont)']
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
    },
    backgroundImage:{
      circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px);',
      circularLightMobile: 'repeating-radial-gradient(rgba(0,0,0,0.4) 1px,#f5f5f5 6px,#f5f5f5 30px);',
      circularDark:'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px);'

    }
    },
  },
  plugins: [],
}

