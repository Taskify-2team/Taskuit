import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-violet': '#5534da',
        'var-violet': '#f1effd',
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
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
