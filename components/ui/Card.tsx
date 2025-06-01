import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'flat' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

const variants = {
  default: 'bg-white rounded-xl shadow-sm border border-gray-200',
  flat: 'bg-gray-50 rounded-lg',
  elevated: 'bg-white rounded-xl shadow-lg border border-gray-100'
};

const paddings = {
  sm: 'p-4',
  md: 'p-6', 
  lg: 'p-8'
};

export const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md',
  hover = true,
  clickable = false,
  onClick
}: CardProps) => {
  const classes = cn(
    variants[variant],
    paddings[padding],
    'transition-all duration-300',
    hover && 'hover:shadow-md hover:-translate-y-1',
    clickable && 'cursor-pointer hover:scale-[1.02]',
    className
  );
  
  const MotionComponent = clickable ? motion.button : motion.div;
  
  return (
    <MotionComponent
      className={classes}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileTap={clickable ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionComponent>
  );
};