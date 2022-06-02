module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      japanese: ["Japanese", "sans-serif"],
      "red-rose": ["Red Rose", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-dark-main": "rgba(0, 0, 0, 1)",
        "primary-dark-gradient": "rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [],
};
