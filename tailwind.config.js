/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        secondary: "#6D28D9",
        accent: "#4C1D95",
        dark: "#121212",
        light: "#F8FAFC",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'glow': {
          '0%': {
            'box-shadow': '0 0 5px rgba(127, 17, 224, 0.5)',
          },
          '100%': {
            'box-shadow': '0 0 20px rgba(127, 17, 224, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
}