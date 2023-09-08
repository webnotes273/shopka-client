/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 8px 0px rgba(92, 107, 192, 0.20), 0px 2px 4px 0px rgba(59, 69, 123, 0.20)',
        'custom-2': '0px 2px 4px 0px rgba(90, 91, 106, 0.24), 0px 1px 2px 0px rgba(58, 58, 68, 0.24)',
      },
      fontSize: {
        'xxs': '14px'
      }
    },
  },
  plugins: [],
}