/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        'neon-cyan': '#00D4FF',
        'neon-purple': '#8B5CF6',
        'neon-green': '#00FF88',
        'neon-red': '#FF4444',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'brand-sm': '0.875rem',
        'brand-md': '1.125rem',
        'brand-lg': '1.5rem',
        'brand-xl': '2rem',
        'brand-pill': '999px',
      },
      spacing: {
        gutter: '1.5rem',
        'section-xs': '3.5rem',
        'section-sm': '4.5rem',
        section: '6rem',
        'section-lg': '8rem',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        200: '200ms',
        250: '250ms',
      },
      boxShadow: {
        neon: '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-lg': '0 0 60px rgba(0, 212, 255, 0.8)',
        'purple-neon': '0 0 20px rgba(139, 92, 246, 0.5)',
        'tech-glow':
          '0 0 30px rgba(0, 212, 255, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.2)',
      },
      backdropBlur: { xs: '2px' },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
