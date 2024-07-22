/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, #23272c, #1e1e22, #181619, #0f0d0e, #000000)',
        'mainBack':'background-image: linear-gradient(to left bottom, #1b1f21, #17191b, #131214, #0b0a0b, #000000)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
    },
  },
  plugins: [],
}