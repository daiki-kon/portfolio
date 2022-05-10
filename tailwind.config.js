module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['corporate', 'night'],
  },
  plugins: [require('daisyui')],
  theme: {
    container: {
      center: true,
    },
  },
};
