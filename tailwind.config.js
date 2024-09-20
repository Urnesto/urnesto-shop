/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#659B5E",
        secondary: "#99DDC8",
        teritiary: "#95BF74",
        black: "#000000",
        white: "#fff",
        success: "#198754",
        info: "#00c9e6",
        warning: "#f6c23e",
        error: "#e3342f",
      },
    },
  },
  plugins: [],
};
