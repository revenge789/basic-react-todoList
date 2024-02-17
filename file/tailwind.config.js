/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wheat': '#EDD4B2',
        'tan': '#D0A98F',
        'violet': '#2D243D',
        'dun': '#CAC2B5',
        'almond': '#ECDCC9'
      }
    },
  },
  plugins: [],
}

