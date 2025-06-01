import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

const variants = {
  primary: 'btn-primary',
  outline: 'btn-outline', 
  ghost: 'text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg'
};

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-6 text-lg'
};

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  loading,
  fullWidth,
  className = '',
  disabled,
  ...props 
}: ButtonProps) => (
  <motion.button
    className={`${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    disabled={disabled || loading}
    whileHover={!(disabled || loading) ? { scale: 1.02 } : {}}
    whileTap={!(disabled || loading) ? { scale: 0.98 } : {}}
    {...props}
  >
    {loading && <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />}
    {children}
  </motion.button>
);