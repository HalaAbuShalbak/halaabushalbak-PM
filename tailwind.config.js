/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A0F1D",
        cyan: {
          accent: "#00F2FE",
        },
        purple: {
          accent: "#7F00FF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(127, 0, 255, 0.08), transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(0, 242, 254, 0.06), transparent 50%)",
        "gradient-border":
          "linear-gradient(135deg, #7F00FF 0%, #00F2FE 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
