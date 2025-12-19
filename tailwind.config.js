/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#FF6B35',
          dark: '#E55A2B',
          light: '#FF8C5A',
        },
      },
    },
  },
  plugins: [],
};

