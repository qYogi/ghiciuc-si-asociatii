/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#0d1738',
        'secondary': '#333333',
        'tertiary': '#f5f5f5',
        'muted': '#b8a14f'
      },
      backgroundColor: {
        'primary': '#0d1738',
        'secondary': '#333333',
        'tertiary': '#f5f5f5',
        'muted': '#b8a14f'


      },
      borderColor: {
        'primary': '#0d1738',
        'secondary': '#333333',
        'tertiary': '#f5f5f5',
        'muted': '#b8a14f'
      },
    },
  },
  plugins: [],
};
