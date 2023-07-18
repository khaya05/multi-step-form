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
        'very-light-gray': '#F8F9FF',
      },
    },
  },
  plugins: [],
};
