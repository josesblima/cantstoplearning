/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.md"],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0F1020",
          background: "#0F1020",
          text: "#D7D7D9",
          primary: "#FF3864",
          secondary: "#36EEE0",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "0.125rem 0.25rem",
              borderRadius: "0.25rem",
              fontWeight: "600",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
