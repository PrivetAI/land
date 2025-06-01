const { designSystem } = require('./design-system');

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
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        error: 'rgb(var(--error) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)'
        }
      },
      fontFamily: designSystem.typography.fontFamily,
      fontSize: designSystem.typography.fontSize,
      fontWeight: designSystem.typography.fontWeight,
      spacing: designSystem.spacing,
      borderRadius: designSystem.borderRadius,
      boxShadow: designSystem.shadows,
      screens: designSystem.breakpoints,
      zIndex: designSystem.zIndex,
      transitionDuration: designSystem.animation.duration,
      transitionTimingFunction: designSystem.animation.timing
    },
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      const utilities = {
        '.heading-xl': {
          fontSize: designSystem.typography.fontSize['4xl'][0],
          lineHeight: designSystem.typography.fontSize['4xl'][1].lineHeight,
          fontWeight: designSystem.typography.fontWeight.bold,
          letterSpacing: '-0.025em',
          color: 'rgb(var(--text-primary))',
          '@screen md': {
            fontSize: designSystem.typography.fontSize['6xl'][0],
            lineHeight: designSystem.typography.fontSize['6xl'][1].lineHeight,
          }
        },
        '.heading-lg': {
          fontSize: designSystem.typography.fontSize['2xl'][0],
          lineHeight: designSystem.typography.fontSize['2xl'][1].lineHeight,
          fontWeight: designSystem.typography.fontWeight.semibold,
          letterSpacing: '-0.025em',
          color: 'rgb(var(--text-primary))',
          '@screen md': {
            fontSize: designSystem.typography.fontSize['4xl'][0],
            lineHeight: designSystem.typography.fontSize['4xl'][1].lineHeight,
          }
        },
        '.heading-md': {
          fontSize: designSystem.typography.fontSize.xl[0],
          lineHeight: designSystem.typography.fontSize.xl[1].lineHeight,
          fontWeight: designSystem.typography.fontWeight.semibold,
          color: 'rgb(var(--text-primary))',
          '@screen md': {
            fontSize: designSystem.typography.fontSize['2xl'][0],
            lineHeight: designSystem.typography.fontSize['2xl'][1].lineHeight,
          }
        },
        '.heading-sm': {
          fontSize: designSystem.typography.fontSize.lg[0],
          lineHeight: designSystem.typography.fontSize.lg[1].lineHeight,
          fontWeight: designSystem.typography.fontWeight.medium,
          color: 'rgb(var(--text-primary))'
        },
        '.body-lg': {
          fontSize: designSystem.typography.fontSize.lg[0],
          lineHeight: designSystem.typography.fontSize.lg[1].lineHeight,
          color: 'rgb(var(--text-secondary))'
        },
        '.body': {
          fontSize: designSystem.typography.fontSize.base[0],
          lineHeight: designSystem.typography.fontSize.base[1].lineHeight,
          color: 'rgb(var(--text-secondary))'
        },
        '.body-sm': {
          fontSize: designSystem.typography.fontSize.sm[0],
          lineHeight: designSystem.typography.fontSize.sm[1].lineHeight,
          color: 'rgb(var(--text-secondary))'
        }
      };

      const components = {
        '.btn-primary': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: designSystem.typography.fontWeight.medium,
          borderRadius: designSystem.borderRadius.lg,
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'rgb(var(--primary))',
          color: 'white',
          padding: `${designSystem.spacing[2]} ${designSystem.spacing[4]}`,
          height: designSystem.spacing[10],
          '&:hover': {
            opacity: '0.9',
            boxShadow: designSystem.shadows.md
          },
          '&:focus': {
            outline: 'none',
            ringWidth: '2px',
            ringColor: 'rgb(var(--primary))',
            ringOffsetWidth: '2px'
          },
          '&:disabled': {
            opacity: '0.5',
            cursor: 'not-allowed'
          }
        },
        '.btn-outline': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: designSystem.typography.fontWeight.medium,
          borderRadius: designSystem.borderRadius.lg,
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          border: '2px solid rgb(var(--primary))',
          color: 'rgb(var(--primary))',
          backgroundColor: 'transparent',
          padding: `${designSystem.spacing[2]} ${designSystem.spacing[4]}`,
          height: designSystem.spacing[10],
          '&:hover': {
            backgroundColor: 'rgb(var(--primary))',
            color: 'white'
          },
          '&:focus': {
            outline: 'none',
            ringWidth: '2px',
            ringColor: 'rgb(var(--primary))',
            ringOffsetWidth: '2px'
          }
        },
        '.card': {
          backgroundColor: 'rgb(var(--surface))',
          borderRadius: designSystem.borderRadius.xl,
          border: '1px solid rgb(var(--border))',
          padding: designSystem.spacing[6],
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: designSystem.shadows.sm,
          '&:hover': {
            boxShadow: designSystem.shadows.md,
            transform: 'translateY(-2px)'
          }
        }
      };

      addUtilities(utilities);
      addComponents(components);
    }
  ],
};