module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#7c3aed',
        accent: '#06b6d4',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.heading-xl': '@apply text-4xl md:text-6xl font-bold tracking-tight',
        '.heading-lg': '@apply text-2xl md:text-4xl font-semibold tracking-tight',
        '.heading-md': '@apply text-xl md:text-2xl font-semibold',
        '.heading-sm': '@apply text-lg font-semibold',
        '.body': '@apply text-base leading-relaxed',
        '.body-lg': '@apply text-lg leading-relaxed',
        '.body-sm': '@apply text-sm leading-relaxed',
        '.gradient-text': '@apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent',
        '.bg-gradient-primary': '@apply bg-gradient-to-r from-primary to-secondary',
        '.btn-primary': '@apply bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105',
        '.btn-outline': '@apply border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-white',
        '.card': '@apply bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1'
      });
    }
  ],
};