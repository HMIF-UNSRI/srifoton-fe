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
        "black-light": "rgba(27, 25, 25, 1)",
        "red-primary": "rgba(196, 0, 24, 1)",
        "red-primary-semibold": "rgba(220, 0, 24, 1)",
        "red-primary-bold": "rgba(255, 0, 24, 1)",
        "red-secondary": "rgba(255, 97, 7, 1)",
      },
    },
  },
  plugins: [],
};
