export const designSystem = {
  colors: {
    light: {
      primary: '#2563eb',
      secondary: '#7c3aed',
      accent: '#06b6d4',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      background: '#ffffff',
      surface: '#f8fafc',
      text: {
        primary: '#0f172a',
        secondary: '#475569',
        muted: '#64748b'
      },
      border: '#e2e8f0',
      gray: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
      }
    },
    dark: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#06b6d4',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      background: '#0f172a',
      surface: '#1e293b',
      text: {
        primary: '#f8fafc',
        secondary: '#cbd5e1',
        muted: '#94a3b8'
      },
      border: '#334155',
      gray: {
        50: '#0f172a',
        100: '#1e293b',
        200: '#334155',
        300: '#475569',
        400: '#64748b',
        500: '#94a3b8',
        600: '#cbd5e1',
        700: '#e2e8f0',
        800: '#f1f5f9',
        900: '#f8fafc'
      }
    },
    gradients: {
      primary: 'linear-gradient(135deg, var(--primary), var(--secondary))',
      accent: 'linear-gradient(135deg, var(--accent), var(--success))',
      warm: 'linear-gradient(135deg, var(--warning), var(--error))',
      hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  },

  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace']
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }]
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },

  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  zIndex: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50'
  },

  animation: {
    duration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    timing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },

  components: {
    button: {
      base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none',
      variants: {
        primary: 'bg-primary text-white hover:opacity-90 focus:ring-primary shadow-sm hover:shadow-md',
        secondary: 'bg-secondary text-white hover:opacity-90 focus:ring-secondary shadow-sm hover:shadow-md',
        outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary',
        ghost: 'text-text-secondary bg-transparent hover:bg-surface hover:text-text-primary focus:ring-gray-200'
      },
      sizes: {
        sm: 'px-3 py-1.5 text-sm h-8',
        md: 'px-4 py-2 text-base h-10',
        lg: 'px-6 py-3 text-lg h-12'
      }
    },

    input: {
      base: 'w-full rounded-lg border bg-background text-text-primary placeholder:text-text-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
      variants: {
        default: 'border-border px-3 py-2',
        outline: 'border-2 border-border px-3 py-2 focus:border-primary'
      },
      sizes: {
        sm: 'h-8 text-sm px-2',
        md: 'h-10 text-base px-3',
        lg: 'h-12 text-lg px-4'
      }
    },

    card: {
      base: 'bg-surface rounded-xl border border-border transition-all duration-200',
      variants: {
        default: 'shadow-sm hover:shadow-md',
        flat: 'shadow-none',
        elevated: 'shadow-lg hover:shadow-xl'
      },
      padding: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
      }
    },

    modal: {
      overlay: 'fixed inset-0 bg-black/50 backdrop-blur-sm z-40',
      content: 'bg-surface rounded-xl shadow-2xl border border-border max-h-[90vh] overflow-hidden',
      header: 'flex items-center justify-between p-6 border-b border-border',
      body: 'p-6 overflow-y-auto',
      sizes: {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
        full: 'max-w-7xl'
      }
    },

    typography: {
      headings: {
        xl: 'text-4xl md:text-6xl font-bold tracking-tight text-text-primary',
        lg: 'text-2xl md:text-4xl font-semibold tracking-tight text-text-primary',
        md: 'text-xl md:text-2xl font-semibold text-text-primary',
        sm: 'text-lg font-medium text-text-primary'
      },
      body: {
        lg: 'text-lg leading-relaxed text-text-secondary',
        base: 'text-base leading-relaxed text-text-secondary',
        sm: 'text-sm leading-normal text-text-secondary'
      },
      gradient: 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
    }
  }
} as const;

export const createClassName = (...classes: (string | undefined | false | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getResponsiveClasses = (baseClass: string, mdClass?: string, lgClass?: string): string => {
  return createClassName(baseClass, mdClass && `md:${mdClass}`, lgClass && `lg:${lgClass}`);
};

export type ColorMode = 'light' | 'dark';
export type ComponentVariant<T extends keyof typeof designSystem.components> = keyof typeof designSystem.components[T]['variants'];
export type ComponentSize<T extends keyof typeof designSystem.components> = 
  T extends 'input' | 'button' 
    ? keyof typeof designSystem.components[T]['sizes']
    : T extends 'card'
    ? keyof typeof designSystem.components[T]['padding']
    : T extends 'modal'
    ? keyof typeof designSystem.components[T]['sizes']
    : never;  