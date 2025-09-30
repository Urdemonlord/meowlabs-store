/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Meow Labs color palette - tuned to match reference hero
        cyberpunk: {
          'primary-bg': '#050014', // Deep violet-black base
          'secondary-bg': '#0b1220', // Muted indigo panel background
          'accent-cyan': '#00f6a3', // Neon mint accent
          'accent-pink': '#ff0f7b', // Vivid magenta accent
          'text-primary': '#ffffff', // White text
          'text-secondary': '#9aa3c2', // Muted bluish gray copy
          'dark': '#050014', // Alias for primary background
          'card': '#0f1a2f', // Card surface tone
          'neon-teal': '#00f6a3', // Alias for accent cyan
          'neon-pink': '#ff0f7b', // Alias for accent pink
          'text-light': '#9aa3c2', // Alias for secondary text
          'text-white': '#ffffff', // Alias for primary text
        },
        primary: {
          50: '#e6fff4',
          100: '#b8ffdf',
          200: '#8affcc',
          300: '#5cffba',
          400: '#2dffab',
          500: '#00f6a3', // Main neon mint accent
          600: '#00d88a',
          700: '#00b871',
          800: '#009459',
          900: '#006c40',
        },
        secondary: {
          50: '#ffe6f2',
          100: '#ffb8d7',
          200: '#ff8abb',
          300: '#ff5ca0',
          400: '#ff2d8a',
          500: '#ff0f7b', // Main magenta accent
          600: '#e00070',
          700: '#bd0061',
          800: '#94004f',
          900: '#6a003c',
        },
        accent: {
          50: '#edf5ff',
          100: '#c7e0ff',
          200: '#a1caff',
          300: '#7bb5ff',
          400: '#55a0ff',
          500: '#2f8cff', // Electric blue accent
          600: '#1a70db',
          700: '#1153a8',
          800: '#0b3775',
          900: '#071f4d',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#c0c8df', // Light bluish gray
          400: '#9aa3c2',
          500: '#747e9d',
          600: '#4d5670',
          700: '#323a52',
          800: '#1a2135',
          900: '#0b1220', // Deep navy background
          950: '#040713',
        },
        // Custom Meow Labs cyberpunk colors - exact match
        meow: {
          'primary-bg': '#050014',
          'secondary-bg': '#0b1220',
          'accent-cyan': '#00f6a3',
          'accent-pink': '#ff0f7b',
          'text-primary': '#ffffff',
          'text-secondary': '#9aa3c2',
          'dark': '#050014',
          'card': '#0f1a2f',
          'neon-teal': '#00f6a3',
          'neon-pink': '#ff0f7b',
          'text-light': '#9aa3c2',
          'text-white': '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyberpunk': '0 0 22px rgba(0, 246, 163, 0.35), 0 0 48px rgba(0, 246, 163, 0.18)',
        'cyberpunk-pink': '0 0 22px rgba(255, 15, 123, 0.35), 0 0 48px rgba(255, 15, 123, 0.18)',
        'cyberpunk-blue': '0 0 22px rgba(47, 140, 255, 0.35), 0 0 48px rgba(47, 140, 255, 0.18)',
        'cyberpunk-lg': '0 0 36px rgba(0, 246, 163, 0.45), 0 0 70px rgba(0, 246, 163, 0.25)',
        'neon-glow': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'cyberpunk-flicker': 'cyberpunkFlicker 0.15s infinite linear',
        'matrix-rain': 'matrixRain 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glowPulse: {
          '0%': {
            boxShadow: '0 0 22px rgba(0, 246, 163, 0.35), 0 0 48px rgba(0, 246, 163, 0.18)',
            textShadow: '0 0 10px rgba(0, 246, 163, 0.55)'
          },
          '100%': {
            boxShadow: '0 0 36px rgba(0, 246, 163, 0.6), 0 0 72px rgba(0, 246, 163, 0.32)',
            textShadow: '0 0 20px rgba(0, 246, 163, 0.85)'
          },
        },
        cyberpunkFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        matrixRain: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'cyberpunk-grid': 'linear-gradient(rgba(0, 246, 163, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 246, 163, 0.14) 1px, transparent 1px)',
        'cyberpunk-gradient': 'linear-gradient(135deg, #050014 0%, #0b1220 55%, #050014 100%)',
        'neon-gradient-teal': 'linear-gradient(135deg, #00f6a3 0%, #00b871 100%)',
        'neon-gradient-pink': 'linear-gradient(135deg, #ff0f7b 0%, #bd0061 100%)',
        'neon-gradient-blue': 'linear-gradient(135deg, #2f8cff 0%, #1153a8 100%)',
      },
    },
  },
  plugins: [],
};
