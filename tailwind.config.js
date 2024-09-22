/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-linear": "linear-gradient(to bottom, rgba(0, 190, 96, 1), rgba(0, 0, 0, 1))"
        // "gradient-linear": "linear-gradient(to bottom right, rgba(0, 190, 96, 1), rgba(0, 0, 0, 1))"
        // "gradient-linear": "radial-gradient(circle, rgba(0, 190, 96, 1), rgba(0, 0, 0, 1))"
      },
      colors: {
        primary: {
          300: "rgba(0, 190, 96, 1)",
          200: "rgba(0, 190, 96, 0.75)",
          100: "rgba(0, 190, 96, 0.5)",
        },
        neutral: {
          100: "#000504",
          50: "#FFFFFF",
        },
        warning: {
          100: "#FF6F66",
        },
      },
    },
  },
  plugins: [],
};
