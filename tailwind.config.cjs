/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'inctxtTurquesa': '#0d9890',
        'inctxtVerde': '#499890', 
        'inctxtNaranja': '#f08123', 
        'inctxtRojo': '#e2101a'
      }
    },
  },
  plugins: [],
}
