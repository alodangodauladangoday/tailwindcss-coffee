module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#C89F94",
      },
      gridTemplateColumns: {
        "3-col": "2/6 3/6 1/6",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
