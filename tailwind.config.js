export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',  // <-- fix here
          },
        },
        dash: {
          '0%': {
            strokeDashoffset: '100',
          },
          '100%': {
            strokeDashoffset: '0',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        scroll: 'scroll 25s linear infinite',
      },
    },
  },
  plugins: [],
}
