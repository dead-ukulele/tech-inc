/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx, html}",
    "./public/**/*.{js,ts,jsx,tsx, html}",
  ],
  theme: {
    fontFamily: {
      heading: 'Merriweather',
      body: 'Merriweather',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    colors: {
      'text': '#09100b',
      'background': '#f1f8f3',
      'primary': '#4bfb80',
      'secondary': '#97d8ab',
      'accent': '#77d493',
    },
    extend: {
    },
  },
  plugins: [],
};

