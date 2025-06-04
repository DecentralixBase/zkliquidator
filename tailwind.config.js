module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
      },
      colors: {
        'neon-cyan': '#00fff7',
        'neon-pink': '#ff00e0',
        'neon-purple': '#a259ff',
        'neon-yellow': '#ffe600',
        'neon-blue': '#00c3ff',
        'hud-bg': '#0b0f1a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
