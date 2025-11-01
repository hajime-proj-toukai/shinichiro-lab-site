
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['"Hiragino Sans"', '"Hiragino Kaku Gothic ProN"', '"Noto Sans JP"', 'sans-serif'],
        },
        animation: {
          'gradient': 'gradient 8s ease infinite',
          'pulse': 'pulse 4s ease-in-out infinite',
        },
        keyframes: {
          gradient: {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            },
          }
        }
      },
    },
    plugins: [],
  }
