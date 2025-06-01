import { ReactNode, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { designSystem, createClassName } from '../../design-system';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  loading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props 
}: ButtonProps) => {
  const buttonConfig = designSystem.components.button;
  
  const classes = createClassName(
    buttonConfig.base,
    buttonConfig.variants[variant],
    buttonConfig.sizes[size],
    fullWidth && 'w-full',
    className
  );
  
  return (
    <motion.button
      className={classes}
      disabled={disabled || loading}
      whileHover={!(disabled || loading) ? { scale: 1.02 } : {}}
      whileTap={!(disabled || loading) ? { scale: 0.98 } : {}}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {children}
    </motion.button>
  );
};