import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`mx-auto max-w-[1200px] lg:max-w-none px-6 lg:px-[140px] 2xl:px-[240px] ${className}`}>
            {children}
        </div>
    );
};

export default Container;
