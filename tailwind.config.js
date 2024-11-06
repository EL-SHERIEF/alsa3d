/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',

  ],
  theme: {
    extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(to right, #00FFAA, #AAFF00)',
          'transparent-black-gradient': 'linear-gradient(to bottom, #00FFAA, transparent)',
        },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
      require('preline/plugin'),
  ],
};
