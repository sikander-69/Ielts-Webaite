/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#001475',       // Primary: Mid Night Blue #001475
          navyDark: '#000c47',   // Deeper Navy accent
          navyLight: '#F0F3FF',  // Crisp Light Blue tint
          red: '#e00000',        // Secondary: Racing Red #e00000
          redHover: '#b80000',   // Red hover state
          redLight: '#FFF0F0',   // Soft red bg
          gold: '#F59E0B',
          white: '#FFFFFF',
          black: '#000000',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'sleek': '0 10px 30px -5px rgba(0, 20, 117, 0.06)',
        'sleek-hover': '0 20px 40px -10px rgba(0, 20, 117, 0.12)',
        'red-glow': '0 10px 25px -5px rgba(224, 0, 0, 0.25)',
        'blue-glow': '0 10px 25px -5px rgba(0, 20, 117, 0.25)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 5s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(220, 38, 38, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
