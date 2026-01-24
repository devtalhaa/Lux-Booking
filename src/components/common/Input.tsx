import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    className = '',
    ...props
}) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-text-muted mb-1">
                    {label}
                </label>
            )}
            <input
                className={`w-full px-4 py-3 rounded-lg border border-border bg-white text-dark shadow-sm focus:outline-none focus:border-dark focus:ring-0 transition-all ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default Input;
