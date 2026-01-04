/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- ESSA LINHA É OBRIGATÓRIA
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mystic-purple': '#6b21a8',
        'mystic-pink': '#db2777',
      },
    },
  },
  plugins: [],
}