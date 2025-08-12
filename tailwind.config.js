module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
