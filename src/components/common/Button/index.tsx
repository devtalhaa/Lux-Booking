import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer';

    const variants = {
        primary: 'bg-[#00C974] text-dark hover:bg-[#00331D] hover:text-white', // Explicitly using text-dark for contrast based on visual analysis
        secondary: 'bg-dark text-white hover:bg-[#333333]',
        outline: 'bg-transparent border-2 border-primary text-dark hover:bg-primary hover:text-white',
        ghost: 'bg-transparent text-dark hover:bg-gray-100',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
