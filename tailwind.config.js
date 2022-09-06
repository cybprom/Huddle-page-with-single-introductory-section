/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        violet: 'hsl(257, 40%, 49%)',
        softMagenta: 'hsl(300, 69%, 71%)',
      }
    },
  },
  plugins: [],
}
