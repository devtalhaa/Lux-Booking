import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-sm border border-border p-8 ${className}`}>
            {children}
        </div>
    );
};

export default Card;
