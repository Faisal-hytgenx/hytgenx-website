/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        custom: { max: "1330px", min: "958px" },
      },
      borderRadius: {
        lg: "20px",
        xl: "40px",
      },
      fontFamily: {
        heading: ["Albert Sans"],
        body: ["Cairo"],
      },
      boxShadow: {
        "blue-lg":
          "0 10px 15px -3px rgba(35, 53, 84, 0.7), 0 4px 6px -2px rgba(35, 53, 84, 0.5)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-blue": {
          900: "#0a192f",
        },
        blue: {
          300: "#64ffda",
          500: "#233554",
          600: "#1e2d49",
          700: "#0084ff",
        },
        gray: {
          700: "#141414",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".bg-glass": {
          backdropFilter: "blur(1px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.5)",
        },
        ".bg-glass-no-border": {
          backdropFilter: "blur(1px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
        },
        ".bg-glass-tab-button": {
          backdropFilter: "blur(25px)" /* Significantly increased blur */,
          backgroundColor: "rgba(255, 255, 255, 0.01)" /* More transparent */,
          boxShadow: "0 6px 40px rgba(0, 0, 0, 0.06)" /* Softer shadow */,
          borderRadius: "12px",
        },
        ".bg-glass-workflow": {
          backdropFilter: "blur(2px)" /* Significantly increased blur */,
          backgroundColor: "rgba(255, 255, 255, 0.1)" /* More transparent */,
          boxShadow: "0 6px 40px rgba(0, 0, 0, 0.06)" /* Softer shadow */,
          borderRadius: "12px",
        },
        ".bg-glass-tool": {
          backgroundColor: "rgba(60, 60, 60, 0.6)", 
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        },
      });
    },
  ],
});
