import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  /* To change the pallete tone, you can access: https://palette.tone-row.com/  */
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        foreground: '#222222',
        neutral: {
          50: '#fafafa',
          100: '#f1f1f1',
          200: '#e0e0e0',
          300: '#cbcbcb',
          400: '#999999',
          500: '#6a6a6a',
          600: '#4c4c4c',
          700: '#393939',
          800: '#222222',
          900: '#181818',
        },
        accent: {
          50: '#fff7ee',
          100: '#ffebd5',
          200: '#ffd3a9',
          300: '#ffb472',
          400: '#ff8937',
          500: '#ff6400',
          600: '#ef4a12',
          700: '#c53819',
          800: '#9b301c',
          900: '#7d2c1b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
