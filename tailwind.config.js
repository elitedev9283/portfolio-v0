/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'ribbon-1': 'ribbon-1 20s ease infinite',
        'ribbon-2': 'ribbon-2 25s ease infinite',
        'ribbon-3': 'ribbon-3 30s ease infinite',
        'noise': 'noise 8s steps(10) infinite',
        'float-slow': 'float 20s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'ribbon-1': {
          '0%, 100%': {
            transform: 'rotate(-6deg) translateY(0) scaleY(1)',
          },
          '50%': {
            transform: 'rotate(-6deg) translateY(-30px) scaleY(1.2)',
          }
        },
        'ribbon-2': {
          '0%, 100%': {
            transform: 'rotate(6deg) translateY(0) scaleY(1)',
          },
          '50%': {
            transform: 'rotate(6deg) translateY(30px) scaleY(0.8)',
          }
        },
        'ribbon-3': {
          '0%, 100%': {
            transform: 'rotate(-3deg) translateY(0) scaleY(1)',
          },
          '50%': {
            transform: 'rotate(-3deg) translateY(-20px) scaleY(1.1)',
          }
        },
        noise: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '10%': { transform: 'translate(-1%, -1%) rotate(1deg)' },
          '20%': { transform: 'translate(-2%, 1%) rotate(-1deg)' },
          '30%': { transform: 'translate(1%, -2%) rotate(2deg)' },
          '40%': { transform: 'translate(-1%, 3%) rotate(-2deg)' },
          '50%': { transform: 'translate(-2%, 1%) rotate(1deg)' },
          '60%': { transform: 'translate(3%, 0) rotate(-1deg)' },
          '70%': { transform: 'translate(0, 2%) rotate(2deg)' },
          '80%': { transform: 'translate(-3%, 0) rotate(-2deg)' },
          '90%': { transform: 'translate(2%, 1%) rotate(1deg)' }
        },
        float: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg) scale(1)',
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
          },
          '25%': { 
            transform: 'translate(3%, 3%) rotate(5deg) scale(1.05)',
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'
          },
          '50%': { 
            transform: 'translate(-3%, 3%) rotate(-5deg) scale(0.95)',
            borderRadius: '40% 60% 30% 70%/40% 30% 70% 60%'
          },
          '75%': { 
            transform: 'translate(3%, -3%) rotate(5deg) scale(1.05)',
            borderRadius: '60% 40% 70% 30%/60% 70% 40% 30%'
          }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
};