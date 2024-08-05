/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this if your files are located elsewhere
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0C5E70',
        'secondary': '#FFFFFF',
        'accent': '#EDF4F5',
        'background': '#DBE8EB',
        'text': '#000000',
      },
    },
  },
  plugins: [],
}
