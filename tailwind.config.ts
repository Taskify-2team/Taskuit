import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/datepicker.css',
  ],
  theme: {
    extend: {
      colors: {
        'primary-violet': '#1A57C9',
        'var-violet': '#e7f0ff',
        'var-red': '#d6173a',
        'var-green': '#7ac555',
        'var-purple': '#760dde',
        'var-orange': '#ffa500',
        'var-blue': '#76a5ea',
        'var-pink': '#e876ea',
        'var-black4': '#000000',
        'var-black3': '#171717',
        'var-black2': '#333236',
        'var-black1': '#4b4b4b',
        'var-gray5': '#787486',
        'var-gray4': '#9fa6b2',
        'var-gray3': '#d9d9d9',
        'var-gray2': '#eeeeee',
        'var-gray1': '#fafafa',
        'var-white': '#ffffff',
        'var-image-hover': 'rgba(0, 0, 0, 0.2)',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        timer: {
          '0%': { width: '28rem' },
          '100%': { width: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out forwards',
        slideUp: 'slideUp 0.3s ease-in-out forwards',
        fadeIn: 'fadeIn 0.3s ease-in-out forwards',
        fadeOut: 'fadeOut 0.3s ease-in-out forwards',
        timer: 'timer 2.9s linear forwards',
        spin: 'spin 2s linear infinite',
      },
      screens: {
        sm: { max: '743px' },
        md: { min: '744px', max: '1280px' },
        lg: { min: '1281px' },
      },
      inset: {
        unset: 'unset',
      },
    },
  },
  plugins: [],
}
export default config
