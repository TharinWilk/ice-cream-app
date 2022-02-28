module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
    ]
  },
  theme: {
    extend: {
      colors: {
        accent: {
          pink: '#fb7e9c',
          blue: '#7efbdd'
        },
        primary: {
          text: '#343434',
          bg: '#fffff9',
        }
      },
      boxShadow: {
        "darkxl": '0 10px 15px -5px rgb(0 0 0 / 0.8) '
      },
    }
  },
  plugins: [],
}
