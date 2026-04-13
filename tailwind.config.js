/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
        ultrawide: "2560px",
      },
      colors: {
        gac: {
          bg: "#FFFFFF",
          text: "#1A1A1A",
        },
      },
      backgroundImage: {
        "gac-accent":
          "linear-gradient(90deg, #0A84FF 0%, #6C63FF 45%, #B39DFF 100%)",
        "gac-rainbow":
          "linear-gradient(90deg, #0A84FF 0%, #6C63FF 25%, #FF6AD5 50%, #FFD66E 75%, #2EE59D 100%)",
      },
      boxShadow: {
        "gac-lift": "0 16px 40px rgba(0,0,0,0.12)",
        "gac-glow": "0 10px 30px rgba(10,132,255,0.25)",
      },
      transitionTimingFunction: {
        "quint-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

