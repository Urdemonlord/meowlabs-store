/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Meow Labs color palette - tuned to match logo colors
        cyberpunk: {
          'primary-bg': '#0a0a0a', // Deep black base
          'secondary-bg': '#1a1a1a', // Dark gray panel background
          'accent-cyan': '#00d4ff', // Bright cyan from logo
          'accent-pink': '#ff6b35', // Orange accent from logo
          'accent-orange': '#ff6b35', // Orange from logo
          'accent-blue': '#00d4ff', // Blue from logo
          'text-primary': '#ffffff', // White text
          'text-secondary': '#b0b0b0', // Light gray copy
          'dark': '#0a0a0a', // Alias for primary background
          'card': '#1a1a1a', // Card surface tone
          'neon-teal': '#00d4ff', // Alias for accent cyan
          'neon-pink': '#ff6b35', // Alias for accent orange
          'text-light': '#b0b0b0', // Alias for secondary text
          'text-white': '#ffffff', // Alias for primary text
        },
        primary: {
          50: '#e6f7ff',
          100: '#b8e6ff',
          200: '#8ad4ff',
          300: '#5cc2ff',
          400: '#2db0ff',
          500: '#00d4ff', // Main cyan from logo
          600: '#00b8e6',
          700: '#009ccc',
          800: '#007fb3',
          900: '#006299',
        },
        secondary: {
          50: '#fff4e6',
          100: '#ffe0b8',
          200: '#ffcc8a',
          300: '#ffb85c',
          400: '#ffa42d',
          500: '#ff6b35', // Main orange from logo
          600: '#e65a2e',
          700: '#cc4927',
          800: '#b33820',
          900: '#992719',
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
        // Custom Meow Labs cyberpunk colors - matching logo
        meow: {
          'primary-bg': '#0a0a0a',
          'secondary-bg': '#1a1a1a',
          'accent-cyan': '#00d4ff',
          'accent-pink': '#ff6b35',
          'accent-orange': '#ff6b35',
          'accent-blue': '#00d4ff',
          'text-primary': '#ffffff',
          'text-secondary': '#b0b0b0',
          'dark': '#0a0a0a',
          'card': '#1a1a1a',
          'neon-teal': '#00d4ff',
          'neon-pink': '#ff6b35',
          'text-light': '#b0b0b0',
          'text-white': '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyberpunk': '0 0 22px rgba(0, 212, 255, 0.35), 0 0 48px rgba(0, 212, 255, 0.18)',
        'cyberpunk-pink': '0 0 22px rgba(255, 107, 53, 0.35), 0 0 48px rgba(255, 107, 53, 0.18)',
        'cyberpunk-blue': '0 0 22px rgba(0, 148, 255, 0.35), 0 0 48px rgba(0, 148, 255, 0.18)',
        'cyberpunk-lg': '0 0 36px rgba(0, 212, 255, 0.45), 0 0 70px rgba(0, 212, 255, 0.25)',
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
            boxShadow: '0 0 22px rgba(0, 212, 255, 0.35), 0 0 48px rgba(255, 107, 53, 0.2)',
            textShadow: '0 0 10px rgba(0, 212, 255, 0.55)'
          },
          '100%': {
            boxShadow: '0 0 36px rgba(0, 212, 255, 0.55), 0 0 72px rgba(255, 107, 53, 0.3)',
            textShadow: '0 0 20px rgba(0, 212, 255, 0.85)'
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
        'cyberpunk-grid': 'linear-gradient(rgba(0, 212, 255, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.14) 1px, transparent 1px)',
        'cyberpunk-gradient': 'linear-gradient(135deg, #050014 0%, #0b1220 55%, #050014 100%)',
        'neon-gradient-teal': 'linear-gradient(135deg, #00d4ff 0%, #007bb8 100%)',
        'neon-gradient-pink': 'linear-gradient(135deg, #ff6b35 0%, #cc4927 100%)',
        'neon-gradient-blue': 'linear-gradient(135deg, #2f8cff 0%, #1153a8 100%)',
      },
    },
  },
  plugins: [],
};
