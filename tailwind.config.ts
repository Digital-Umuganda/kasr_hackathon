/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "oklch(54.93% 0.143 159.06)",
      },
    },
  },
  plugins: [],
};
