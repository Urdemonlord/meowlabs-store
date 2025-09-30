/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette tuned to match the purple/blue reference artwork
        cyberpunk: {
          'primary-bg': '#05021a', // Deep indigo base
          'secondary-bg': '#0b1238', // Navy overlay panels
          'accent-cyan': '#38bdf8', // Electric blue highlight
          'accent-pink': '#8b5cf6', // Vibrant violet highlight
          'text-primary': '#ffffff', // Primary copy
          'text-secondary': '#c3c6dd', // Muted lavender gray copy
          'dark': '#05021a', // Alias for base
          'card': '#111b3f', // Card surface tone
          'neon-teal': '#38bdf8', // Alias for blue accent
          'neon-pink': '#8b5cf6', // Alias for violet accent
          'neon-blue': '#38bdf8',
          'text-light': '#c3c6dd', // Alias for secondary text
          'text-white': '#ffffff', // Alias for white text
        },
        primary: {
          50: '#ede9fe',
          100: '#ddd6fe',
          200: '#c4b5fd',
          300: '#a78bfa',
          400: '#8b5cf6',
          500: '#7c3aed', // Main violet accent
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b1c7a',
        },
        secondary: {
          50: '#e0f2fe',
          100: '#bae6fd',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ea5e9',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        neutral: {
          50: '#f4f6fb',
          100: '#e4e7f5',
          200: '#d3d7ee',
          300: '#c3c6dd', // Muted lavender gray
          400: '#9ea3c7',
          500: '#7a80a3',
          600: '#5a6182',
          700: '#3f4663',
          800: '#262d47',
          900: '#131932',
          950: '#080b1b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyberpunk': '0 0 22px rgba(139, 92, 246, 0.28), 0 0 48px rgba(56, 189, 248, 0.18)',
        'cyberpunk-pink': '0 0 22px rgba(139, 92, 246, 0.35), 0 0 48px rgba(139, 92, 246, 0.18)',
        'cyberpunk-blue': '0 0 22px rgba(56, 189, 248, 0.35), 0 0 48px rgba(14, 165, 233, 0.18)',
        'cyberpunk-lg': '0 0 36px rgba(139, 92, 246, 0.38), 0 0 70px rgba(56, 189, 248, 0.22)',
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
            boxShadow: '0 0 22px rgba(139, 92, 246, 0.32), 0 0 48px rgba(56, 189, 248, 0.18)',
            textShadow: '0 0 10px rgba(139, 92, 246, 0.55)'
          },
          '100%': {
            boxShadow: '0 0 36px rgba(139, 92, 246, 0.5), 0 0 72px rgba(56, 189, 248, 0.28)',
            textShadow: '0 0 20px rgba(56, 189, 248, 0.75)'
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
        'cyberpunk-grid': 'linear-gradient(rgba(139, 92, 246, 0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.14) 1px, transparent 1px)',
        'cyberpunk-gradient': 'linear-gradient(135deg, #05021a 0%, #0b1238 55%, #05021a 100%)',
        'neon-gradient-teal': 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
        'neon-gradient-pink': 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
        'neon-gradient-blue': 'linear-gradient(135deg, #8b5cf6 0%, #38bdf8 100%)',
      },
    },
  },
  plugins: [],
};
