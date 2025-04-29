// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adapte conforme sua estrutura
    "./.storybook/**/*.{js,ts,jsx,tsx}", // adicione isso para pegar os componentes do Storybook
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
