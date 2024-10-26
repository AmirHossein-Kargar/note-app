/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
      },
      colors: {
        'main-color': "#222831",
        'text-color': "#EEEEEE"
      },
    },
  },
  plugins: [],
};

