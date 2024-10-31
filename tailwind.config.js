/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
      },
      colors: {
        "main-color": "#222831",
        "text-color": "#F5F5F7",
        "text-700": "#374151",
        "text-400": "#94a3b8",
        "text-300": " #cbd5e1",
        // "secondary-color": "#406882",
      },
    },
  },
  plugins: [],
};

