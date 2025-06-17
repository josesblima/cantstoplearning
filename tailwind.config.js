/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0F1020", // This should be accessible as bg-midnight
          background: "#0F1020",
          text: "#D7D7D9",
          primary: "#FF3864",
          secondary: "#36EEE0",
        },
      },
    },
  },
  plugins: [],
};
