export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'futuristic-blue': '#1A2B6D',
        'light-blue': '#2C84FF',
        'dark-gray': '#282C34',
        'light-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0px 20px 40px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
