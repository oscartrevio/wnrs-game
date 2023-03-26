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
        digdeeperborder: "rgba(255, 255, 255, 0.35)",
      },
      animation: {
        flipfwd: "flipfwd 0.5s ease-in-out both",
        slidefwd: "slidefwd 0.5s ease-in-out both",
      },
      keyframes: {
        flipfwd: {
          "0%": { transform: "translateY(0) translateZ(0) rotateX(0)" },
          "100%": {
            transform: "translateY(-100%) translateZ(0)",
          },
        },
        slidefwd: {
          "0%": { transform: "translateZ(0)" },
          "100%": { transform: "translateZ(160px)" },
        },
      },
    },
  },
};
