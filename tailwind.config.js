/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'blue-title': '#029FE4',
        'blue-dark': '#07477A',
        'blue-light': '#1BA0E1',
        'blue-text': '#25A0D8',
        'blue-hero': '#4097DB'
      }
    },
  },
  plugins: [],
}
