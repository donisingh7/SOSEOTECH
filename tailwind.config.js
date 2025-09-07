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
    },
  },
  plugins: [],
};
