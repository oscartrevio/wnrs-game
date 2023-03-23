/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Helvetica Neue"],
    },
    extend: {
      backgroundImage: {
        "card-texture": "url('/src/assets/card-texture.jpg')",
      },
      colors: {
        wnrs: "#B22423",
        offwhite: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
