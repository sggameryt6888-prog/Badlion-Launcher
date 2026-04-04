/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        electricBlue: '#00D4FF',
        neonYellow: '#FFFF00',
        pitchBlack: '#000000',
      },
      boxShadow: {
        glow: '0 0 10px rgba(0, 212, 255, 0.8)', // Electric Blue Glow
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 212, 255, 1)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)' },
        },
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};