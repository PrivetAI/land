import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import { designSystem, createClassName } from './design-system';

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

export const Input = forwardRef<HTMLInputElement, InputProps>(({ 
  label, 
  error, 
  variant = 'default',
  className = '',
  ...props 
}, ref) => {
  const inputConfig = designSystem.components.input;
  
  const classes = createClassName(
    inputConfig.base,
    inputConfig.variants[variant],
    error ? 'border-error focus:ring-error' : '',
    className
  );
  
  return (
    <div>
      {label && (
        <label className="block body font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={classes}
        {...props}
      />
      {error && (
        <p className="mt-1 body text-error">{error}</p>
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
  const inputConfig = designSystem.components.input;
  
  const classes = createClassName(
    inputConfig.base,
    inputConfig.variants[variant],
    'resize-vertical',
    error ? 'border-error focus:ring-error' : '',
    className
  );
  
  return (
    <div>
      {label && (
        <label className="block body font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={classes}
        {...props}
      />
      {error && (
        <p className="mt-1 body text-error">{error}</p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';