/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
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

