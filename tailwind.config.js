/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if your files are located elsewhere
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6A1B9A',
        'secondary': '#AB47BC',
        'accent': '#CE93D8',
        'background': '#FFFFFF',
        'text': '#4A4A4A',
      },
    },
  },
  plugins: [],
}
