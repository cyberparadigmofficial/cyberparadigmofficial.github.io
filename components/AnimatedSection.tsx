/**
 * AnimatedSection - Reusable component for scroll-triggered reveal animations
 * Wraps any content with smooth entrance animations
 */

import React, { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-scale' | 'fade';
    delay?: number;
    threshold?: number;
    as?: React.ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className = '',
    animation = 'fade-up',
    delay = 0,
    threshold = 0.1,
    as: Component = 'div',
}) => {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

    const animationClasses = {
        'fade-up': 'reveal-up',
        'fade-left': 'reveal-left',
        'fade-right': 'reveal-right',
        'fade-scale': 'reveal-scale',
        'fade': 'reveal',
    };

    return (
        <Component
            ref={ref as React.RefObject<any>}
            className={`${animationClasses[animation]} ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
        >
            {children}
        </Component>
    );
};

export default AnimatedSection;
