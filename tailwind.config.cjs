module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#06070b',
          900: '#0b0d14',
          800: '#121625',
        },
        neon: {
          pink: '#ff2fb3',
          blue: '#35d6ff',
          red: '#ff3b47',
          green: '#58ff8d',
          yellow: '#ffe66d',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(53, 214, 255, 0.35), 0 0 50px rgba(255, 47, 179, 0.2)',
        card: '0 14px 40px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'mesh-dark': 'radial-gradient(circle at 20% 20%, rgba(255,47,179,0.12), transparent 35%), radial-gradient(circle at 80% 0%, rgba(53,214,255,0.14), transparent 30%), radial-gradient(circle at 80% 80%, rgba(88,255,141,0.08), transparent 35%)',
      },
    },
  },
  plugins: [],
};
