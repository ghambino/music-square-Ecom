//  @type {import('tailwindcss').Config} 

module.exports = {
  content: [
    './src/pages/**/*.{html,js,jsx}',
    './src/components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '50px',
        md: '375px',
        lg: '768px',
      },
      colors: {
        'blue': '#1fb6ff',
        'faint-gray': '#fafafa',
        'brown': '#d87d4a',
        'input-gray': '#CFCFCF',
        'light-brown': '#fbaf85',
        'custom-black': '#101010',
        'custom-gray': '#f1f1f1',
        'gray-dark': '#273444',
        'white': '#ffffff',
        'black': '#000000',
      },
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
       },
    },
  },
  plugins: [],
};
