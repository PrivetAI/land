import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { designSystem, createClassName } from '@/design-system';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'flat' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

export const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md',
  hover = true,
  clickable = false,
  onClick
}: CardProps) => {
  const cardConfig = designSystem.components.card;
  
  const classes = createClassName(
    cardConfig.base,
    cardConfig.variants[variant],
    cardConfig.padding[padding],
    clickable && 'cursor-pointer',
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
      whileHover={hover ? { y: -4, scale: clickable ? 1.02 : 1 } : {}}
      whileTap={clickable ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionComponent>
  );
};