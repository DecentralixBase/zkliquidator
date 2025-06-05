module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0a0f1b',
        'neon-cyan': '#00fff7',
        'neon-blue': '#00c3ff',
        'neon-purple': '#a259ff',
        'neon-pink': '#ff00e0',
        'neon-yellow': '#ffe600'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif']
      },
      boxShadow: {
        'neon': '0 0 16px 2px #00fff7, 0 0 32px 8px #a259ff'
      }
    }
  },
  plugins: []
}; 