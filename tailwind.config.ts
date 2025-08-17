import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#E9D8FD',
          DEFAULT: '#6B5B9A',
          dark: '#4B3A6A',
        },
        white: '#FFFFFF',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});