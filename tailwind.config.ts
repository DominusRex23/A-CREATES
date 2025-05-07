import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
      },
      fontSize: {
        '10xl': '10rem',    // 160px
        '11xl': '12rem',    // 192px
        '12xl': '14rem',    // 224px
      },
      colors: {
        'custom-blue': '#0d5080',
        'custom-purple': '#402563',
        'custom-pink': '#c440b5',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #0d5080, #402563, #c440b5)',
        'gradient-rainbow': 'linear-gradient(to right, #0d5080, #402563, #c440b5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config 