/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: '#263238',
          d_grey: '#4D4D4D',
          grey: '#717171',
          l_grey: '#89939E',
          grey_blue: '#ABBED1',
          silver: '#F5F7FA',
          white: '#FFFFFF'
        },
        primary: '#4CAF4F',
        secondary: '#263238',
        info: '#2194f3',
        shade: {
          1: '#43A046',
          2: '#388E3B',
          3: '#237D31',
          4: '#1B5E1F',
          5: '#103E13',
        },
        tint: {
          1: '#66BB69',
          2: '#81C784',
          3: '#A5D6A7',
          4: '#C8E6C9',
          5: '#E8F5E9',
        },
        action: {
          warning: '#FBC02D',
          error: '#E53835',
          success: '#2E7D31'
        }
      },
      fontSize: {
        'body_regular1': ['1.125rem', {
          lineHeight: '1.75rem',
          fontWeight: '400',
        }],
        'body_regular2': ['1rem', {
          lineHeight: '1.5rem',
          fontWeight: '400',
        }],
        'body_regular3': ['0.875rem', {
          lineHeight: '1.25rem',
          fontWeight: '400',
        }],
        'body_regular4': ['0.75rem', {
          lineHeight: '1rem',
          fontWeight: '400',
        }],
        'body_medium1': ['1.125rem', {
          lineHeight: '1.75rem',
          fontWeight: '500',
        }],
        'body_medium2': ['1rem', {
          lineHeight: '1.5rem',
          fontWeight: '500',
        }],
        'body_medium3': ['0.875rem', {
          lineHeight: '1.25rem',
          fontWeight: '500',
        }],
        'body_medium4': ['0.75rem', {
          lineHeight: '1rem',
          fontWeight: '500',
        }],
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

