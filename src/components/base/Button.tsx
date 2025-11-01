
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '',
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-light transition-all duration-200 cursor-pointer whitespace-nowrap';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-blue-200'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
