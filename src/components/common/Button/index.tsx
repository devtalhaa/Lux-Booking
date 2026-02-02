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
    const baseStyles = ' h-[34px] items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer';

    const variants = {
        primary: 'bg-[#00C974] [letter-spacing:-.01em] font-body text-sm leading-[18px] px-[16px] py-[8px] text-black hover:bg-[#00331D] hover:text-white',
        secondary: 'bg-black [letter-spacing:--0.01em] font-body text-white text-sm leading-[18px] px-[16px] py-[8px] hover:bg-[#333333]',
        outline: 'bg-transparent border-2 border-primary text-black hover:bg-primary hover:text-white',
        ghost: '',
    };

    const sizes = {
        sm: ' py-1.5 text-sm',
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
