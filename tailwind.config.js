/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Meow Labs color palette - exact match
        cyberpunk: {
          'primary-bg': '#0f172a', // Dark green-black primary background
          'secondary-bg': '#1a202c', // Dark green secondary background
          'accent-cyan': '#00e6b8', // Bright teal/cyan accent
          'accent-pink': '#ff0080', // Bright pink/magenta accent
          'text-primary': '#ffffff', // White text
          'text-secondary': '#cbd5e0', // Light gray text
          'dark': '#0f172a', // Alias for primary background
          'card': '#1a202c', // Alias for secondary background
          'neon-teal': '#00e6b8', // Alias for accent cyan
          'neon-pink': '#ff0080', // Alias for accent pink
          'text-light': '#cbd5e0', // Alias for secondary text
          'text-white': '#ffffff', // Alias for primary text
        },
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00e6b8', // Main teal accent - exact match
          600: '#00d4aa',
          700: '#00b894',
          800: '#009c7a',
          900: '#007d5c',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ff0080', // Main pink accent - exact match
          600: '#e60073',
          700: '#cc0066',
          800: '#b30059',
          900: '#99004d',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#00bfff', // Bright blue
          600: '#0099cc',
          700: '#007399',
          800: '#005c7a',
          900: '#004d66',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e0', // Light gray text
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', // Dark background
          950: '#020617',
        },
        // Custom Meow Labs cyberpunk colors - exact match
        meow: {
          'primary-bg': '#0f172a',
          'secondary-bg': '#1a202c',
          'accent-cyan': '#00e6b8',
          'accent-pink': '#ff0080',
          'text-primary': '#ffffff',
          'text-secondary': '#cbd5e0',
          'dark': '#0f172a',
          'card': '#1a202c',
          'neon-teal': '#00e6b8',
          'neon-pink': '#ff0080',
          'text-light': '#cbd5e0',
          'text-white': '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyberpunk': '0 0 20px rgba(0, 230, 184, 0.3), 0 0 40px rgba(0, 230, 184, 0.1)',
        'cyberpunk-pink': '0 0 20px rgba(255, 0, 128, 0.3), 0 0 40px rgba(255, 0, 128, 0.1)',
        'cyberpunk-blue': '0 0 20px rgba(0, 191, 255, 0.3), 0 0 40px rgba(0, 191, 255, 0.1)',
        'cyberpunk-lg': '0 0 30px rgba(0, 230, 184, 0.4), 0 0 60px rgba(0, 230, 184, 0.2)',
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
            boxShadow: '0 0 20px rgba(0, 230, 184, 0.3), 0 0 40px rgba(0, 230, 184, 0.1)',
            textShadow: '0 0 10px rgba(0, 230, 184, 0.5)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(0, 230, 184, 0.6), 0 0 60px rgba(0, 230, 184, 0.3)',
            textShadow: '0 0 20px rgba(0, 230, 184, 0.8)'
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
        'cyberpunk-grid': 'linear-gradient(rgba(0, 230, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 230, 184, 0.1) 1px, transparent 1px)',
        'cyberpunk-gradient': 'linear-gradient(135deg, #0f172a 0%, #1a202c 50%, #0f172a 100%)',
        'neon-gradient-teal': 'linear-gradient(135deg, #00e6b8 0%, #00b894 100%)',
        'neon-gradient-pink': 'linear-gradient(135deg, #ff0080 0%, #cc0066 100%)',
        'neon-gradient-blue': 'linear-gradient(135deg, #00bfff 0%, #0099cc 100%)',
      },
    },
  },
  plugins: [],
};
