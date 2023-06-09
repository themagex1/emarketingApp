/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/14043.jpg')"
      }
    },
    colors: {
      'main': '#0F172A',
      'second': '#3b82f6',
      'text-color': '#374151',
      'white': '#fff'
    }
  },
  plugins: [],
}