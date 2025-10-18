// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "brand-yellow": "#ffd500",
//         "brand-black": "#000000",
//         "brand-text":  "#111111",
//         "brand-mute":  "#666666",
//         "brand-border":"#e5e5e5",
//         "brand-footer":"#111111",
//       },
//       fontFamily: {
//         sans: ['"Helvetica Neue"', "Helvetica", "Arial", "ui-sans-serif", "system-ui"],
//       },
//       container: { center: true, padding: "20px" },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#ffd500",
        "brand-black": "#000000",
        "brand-text":  "#111111",
        "brand-mute":  "#666666",
        "brand-border":"#e5e5e5",
        "brand-footer":"#111111",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "ui-sans-serif", "system-ui"],
      },
      container: { center: true, padding: "20px" },

      /* from second config */
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px #38bdf8, 0 0 20px #38bdf8, 0 0 40px #0ea5e9" },
          "50%": { textShadow: "0 0 20px #0ea5e9, 0 0 40px #38bdf8, 0 0 80px #38bdf8" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 24s linear infinite",
      },
    },
  },
  plugins: [],
};
