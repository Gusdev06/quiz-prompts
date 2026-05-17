import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cta: {
          DEFAULT: '#00BD26',
          shadow: 'rgba(0, 224, 26, 0.1)',
          alt: '#00A803',
        },
        warn: '#FF0000',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        quiz: '512px',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(0.98)' },
          '50%': { transform: 'scale(1.02)' },
        },
        entry: {
          '0%': { transform: 'translate3d(0, 12px, 0)', opacity: '0' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
      },
      animation: {
        'cta-pulse': 'pulse 1s ease-in-out infinite',
        'step-entry': 'entry 0.28s cubic-bezier(.4,0,.2,1) both',
      },
      boxShadow: {
        cta: '0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)',
      },
    },
  },
  plugins: [],
};

export default config;
