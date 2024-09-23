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
      fontSize: {
        h1: [
          "6rem",
          {
            lineHeight: "6.75rem",
          },
        ],
        h2: [
          "4.75rem",
          {
            lineHeight: "5.25rem",
          },
        ],
        h3: [
          "3.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        h4: [
          "3.25rem",
          {
            lineHeight: "3.5rem",
          },
        ],
        h5: [
          "2.875rem",
          {
            lineHeight: "3.2rem",
          },
        ],
        h6: [
          "2.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        p1: [
          "2.25rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p2: [
          "1.75rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p3: [
          "1.5rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p4: [
          "1.25rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p5: [
          "1rem",
          {
            lineHeight: "1.375em",
            letterSpacing: "-0.015625rem",
          },
        ],
        p6: [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.015625rem",
          },
        ],
        p7: [
          "0.625rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.015625rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
