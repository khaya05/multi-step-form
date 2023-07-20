/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-img': `url('/images/bg-sidebar-desktop.svg')`,
        'mobile-img': `url('/images/bg-sidebar-mobile.svg')`,
      },

      colors: {
        'light-blue': '#EFF5FF',
        'border-color': '#D6D9E6',
        denim: '#022959',
        gray: '#9699AA',
        purple: '#483EFF',
        'purple-hover': '#928CFF',
        'denim-hover': '#164A8A',
        'very-light-gray': '#F8F9FF',
        'sky-blue': '#BEE2FD',
        'light-blue-text': '#ABBCFF'
      },
    },
  },
  plugins: [],
};
