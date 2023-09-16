import React, { ReactNode } from 'react';
import './style.css';

export interface PageContentProps {
    children: ReactNode
}

export const PageContent = ({ children }: PageContentProps) => {
    return (
        <div className='page-content'>
            {children}
        </div>
    )
}