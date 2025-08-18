/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PretendardVariable', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
