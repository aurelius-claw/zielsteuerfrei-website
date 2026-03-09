/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core navy palette
        navy: {
          950: '#070E1C',
          900: '#0A1428',
          800: '#0F1F3D',
          700: '#162849',
          600: '#1E3456',
        },
        // Gold accent
        gold: {
          DEFAULT: '#C8972C',
          light: '#D4A843',
          dark: '#A67C1F',
          muted: 'rgba(200,151,44,0.12)',
        },
        // Off-white / cream
        cream: {
          DEFAULT: '#FAFAF7',
          50: '#FDFDFC',
          100: '#F5F5F0',
          200: '#EEEEE7',
        },
        // Slate grays
        ink: {
          900: '#1A1F2E',
          700: '#3A4255',
          500: '#6B7390',
          300: '#A8AFBF',
          100: '#DDE0E8',
        },
        // Near-black scale (used in BlogPage dark mode)
        black: {
          50:  '#F9F9F9',
          100: '#F0F0F0',
          200: '#E4E4E4',
          400: '#A3A3A3',
          500: '#737373',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Silver / light-gray scale (dark-mode text)
        silver: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          600: '#737373',
        },
        // Brand gradient colors
        brand: {
          purple: '#8B5CF6',
          pink:   '#EC4899',
          blue:   '#3B82F6',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.8rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.6rem, 2.8vw, 2.4rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '840px',
        'wide': '1200px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(10,20,40,0.06)',
        'card-hover': '0 8px 40px rgba(10,20,40,0.12)',
        'gold': '0 4px 24px rgba(200,151,44,0.2)',
        'gold-lg': '0 8px 40px rgba(200,151,44,0.3)',
        'glass': '0 4px 24px rgba(10,20,40,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      backdropBlur: {
        'nav': '20px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both',
        'fade-in': 'fadeIn 0.4s ease-out both',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200,151,44,0)' },
          '50%': { boxShadow: '0 0 0 8px rgba(200,151,44,0.15)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, #C8972C 0%, #E8B84B 40%, #C8972C 60%, #A67C1F 100%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,151,44,0.08) 0%, transparent 60%)',
        'hero-gradient-dark': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,151,44,0.06) 0%, transparent 60%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
