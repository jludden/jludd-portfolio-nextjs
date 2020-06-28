module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
    }
  },
  variants: {},
  plugins: [],
}
