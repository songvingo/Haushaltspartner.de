module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#1b4332', 800: '#2d6a4f', 700: '#40916c',
          600: '#52b788', 500: '#74c69d', 200: '#d8f3dc',
          100: '#f0faf2', 50: '#f7fdf9',
        },
        gold: { 500: '#e8a320' }
      },
      fontFamily: {
        sans: ['-apple-system','BlinkMacSystemFont','"SF Pro Display"','"SF Pro Text"','"Segoe UI"','Roboto','sans-serif'],
      },
    }
  },
  plugins: [],
}
