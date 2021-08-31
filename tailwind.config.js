module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
