/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "brittany-signature": ['"Brittany Signature"', "cursive"],
        "black-side": ['"Black Side"', "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        "text-wave": "text-wave 5s linear infinite",
        "slide-in": "slide-in 1s ease-in-out forwards",
        "typing": "typing 3s steps(30) 1s forwards",
        "blink-caret": "blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#fff" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      backgroundImage: {
        "galaxy-gradient":
          "radial-gradient(circle at 20% 40%, #ff3cac, #784ba0, #2b86c5)",
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
