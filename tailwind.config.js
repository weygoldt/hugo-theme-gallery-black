const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./hugo_stats.json", "./layouts/**/*.html"],
  darkMode: "class",
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {
      colors: {
        neutral: {
          850: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "1792px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
