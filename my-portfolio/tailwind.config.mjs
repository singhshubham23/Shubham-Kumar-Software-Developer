/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0f",
        "ink-soft": "#55565c",
        paper: "#f5f6f8",
        panel: "#111114",
        "panel-soft": "#1b1b20",
        cloud: "#e4e7eb",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.06em" },
    },
  },
  plugins: [],
};
