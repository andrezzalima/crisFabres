/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-beige": "#e8e4de",
        "dark-beige": "#c0bbb3",
        "light-brown": "#7f6f60",
        "medium-brown": "#4e463d", 
        "dark-brown": "#26251f",
        "dark-rose": "#c08b89",
        "rose": "#c8a49f",
      },
    },
  },
  plugins: [],
};
