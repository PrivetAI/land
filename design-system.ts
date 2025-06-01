//editing forbidden
export const designSystem = {
  colors: {
    primary: '#2563eb',
    secondary: '#7c3aed', 
    accent: '#06b6d4',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  },
  
  components: {
    button: {
      base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
      variants: {
        primary: 'bg-primary text-white hover:opacity-90 shadow-sm hover:shadow-md',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'text-gray-600 hover:bg-gray-100'
      },
      sizes: {
        sm: 'px-3 py-1.5 text-sm h-8',
        md: 'px-4 py-2 h-10',
        lg: 'px-6 py-3 text-lg h-12'
      }
    },
    
    card: {
      base: 'bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1'
    }
  }
};

export const cn = (...classes: (string | undefined | false | null)[]): string => 
  classes.filter(Boolean).join(' ');