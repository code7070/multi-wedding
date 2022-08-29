/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pagesview/**/*.{js,ts,jsx,tsx}",
    "./components/**/**.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#256c42",
          secondary: "#639377",
        },
      },
    ],
  },
  theme: {
    colors: {
      "lightest-green": "#b6cbbf",
      "light-green": "#639377",
      "main-green": "#256c42",
      "dark-green": "#1a4a2e",
      "darken-green": "#0e2a19",
    },
  },
};
