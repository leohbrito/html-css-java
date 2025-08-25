import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B5FFF',
        'primary-600': '#084ACC',
        'primary-50': '#F3F7FF',
        'neutral-900': '#0F172A',
        'neutral-600': '#475569',
        'neutral-100': '#F1F5F9',
        white: '#FFFFFF',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(15, 23, 42, 0.06)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
