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
        "gradient-linear": "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(2,179,91,1) 100%)"
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
