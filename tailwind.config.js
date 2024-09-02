/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        hitchBlue: '#007AFF',
        hitchUnselectedTab: '#999999',
        hitchSecondaryLabel: '#8A8A8E',
        hitchBorder: 'rgba(0, 0, 0, 0.2)'
      },
    },
  },
  plugins: [],
}