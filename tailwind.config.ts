import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        hero: 'url(/assets/hero-image.jpeg)',
      },
      fontFamily: {
        'nunito-sans': ['var(--font-nunito-sans)'],
        nunito: ['var(--font-nunito)'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
