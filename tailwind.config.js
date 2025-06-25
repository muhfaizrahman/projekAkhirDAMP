/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#471396', // Purple
        active: '#C6B6DE', // Light Purple
        secondary: '#E3DCEF', // Very Light Purple
        subtleDark: '#61646B', // Gray
        subtleLight: '#AFB1B6', // Light Gray 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}