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
        typing: "typing 3s steps(30) 1s forwards",
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

      boxShadow: {
        // Default box shadow
        default: "0px 4px 6px rgba(0, 0, 0, 0.1)",

        // Custom box shadows for different elements
        "lg-light": "0px 10px 15px rgba(0, 0, 0, 0.1)",
        "lg-heavy": "0px 10px 30px rgba(0, 0, 0, 0.2)",
        sm: "0px 2px 4px rgba(0, 0, 0, 0.1)",

        // Custom shadow for cards or containers
        "card-light": "0px 10px 20px rgba(0, 0, 0, 0.1)",
        "card-heavy": "0px 20px 40px rgba(0, 0, 0, 0.3)",

        // Adding shadows for hover and active states
        "hover-light": "0px 4px 8px rgba(0, 0, 0, 0.15)",
        "hover-dark": "0px 6px 12px rgba(0, 0, 0, 0.25)",

        // Glow shadow for interactive elements
        glow: "0 0 10px rgba(0, 255, 255, 0.5)",
      },

      screens: {
        mobile: "480px",
        tablet: "768px",
        desktop: "1024px",
        lg: "1280px",
      },

      fontSize: {
        base: "1rem",
        sm: "0.875rem",
        lg: "1.25rem",
        xl: "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "4rem",
      },
    },
  },
  plugins: [],
};
