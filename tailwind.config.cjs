/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Helvetica Neue"],
    },
    extend: {
      backgroundImage: {
        "card-texture": "url('/src/assets/textured-white-min.jpg')",
      },
      colors: {
        wnrs: "#B22423",
        offwhite: "#F6F8FA",
        digdeeperborder: "rgba(255, 255, 255, 0.35)",
        blk: "#1F1F1F",
      },
      animation: {
        flipfwd: "flipfwd 0.5s ease-in-out both",
        slidefwd: "slidefwd 0.5s ease-in-out both",
        "spin-slow": "spin 6s linear infinite",
        slideup: "slideup 0.5s ease-in-out 2s both;",
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.1) 0px 10px 40px 0px",
        nav: "0px 0px 30px rgba(0, 0, 0, 0.15)",
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
        slideup: {
          "0%": { transform: "translateY(0)" },
          "0%": { opacity: 1 },
          "100%": { transform: "translateY(-100%)" },
          "100%": { opacity: 0 },
        },
      },
    },
  },
};
