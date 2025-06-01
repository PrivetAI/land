import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'outline';
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'outline';
}

const variants = {
  default: 'border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary',
  outline: 'border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
};

const baseClasses = 'w-full px-3 py-2 rounded-lg transition-colors outline-none disabled:opacity-50 disabled:cursor-not-allowed';

export const Input = forwardRef<HTMLInputElement, InputProps>(({ 
  label, 
  error, 
  variant = 'default',
  className = '',
  ...props 
}, ref) => {
  const classes = cn(
    baseClasses,
    variants[variant],
    error && 'border-error focus:border-error focus:ring-error/20',
    className
  );
  
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input ref={ref} className={classes} {...props} />
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ 
  label, 
  error, 
  variant = 'default',
  className = '',
  ...props 
}, ref) => {
  const classes = cn(
    baseClasses,
    variants[variant],
    'resize-vertical min-h-[80px]',
    error && 'border-error focus:border-error focus:ring-error/20',
    className
  );
  
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea ref={ref} className={classes} {...props} />
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';