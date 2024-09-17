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
        "gradient-linear":
          "linear-gradient(to bottom right, #00bf63, #1791c8)"
      },
      colors: {
        primary: {
          300: "#00bf63", // 100 %
          200: "#00bf63", // 50 %
          100: "#00bf63", // 30 %
        },
        secondary: {
          300: "#1791c8", // 100 %
          200: "#1791c8", // 50 %
          100: "#1791c8", // 30 %
        },
        neutral: {
          100: "#000504",
          50: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
