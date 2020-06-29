module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      colors: {
        main: '#5A67D8',
        lightAccent: '#C5CAE9',
        darkAccent: '#8B82CB'
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
