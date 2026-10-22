import React, { useEffect, useState } from 'react';
import './PremiumBackground.css';

const PremiumBackground: React.FC = () => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="premium-bg-container">
            {/* Base Layer - Ivory */}
            <div className="premium-bg-base" />

            {/* Flowing Shapes */}
            <div className="premium-bg-shapes" style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
                {/* Shape 1: Warm Grey Top Left */}
                <div className="premium-shape shape-1" />

                {/* Shape 2: Terracotta Accent (Very Subtle) */}
                <div className="premium-shape shape-2" />

                {/* Shape 3: Warm Grey Bottom Right */}
                <div className="premium-shape shape-3" />

                {/* Shape 4: Floating Depth Layer */}
                <div className="premium-shape shape-4" />
            </div>

            {/* Noise Overlay for Matte Finish (Optional, using CSS pattern) */}
            <div className="premium-noise" />

            {/* Glass Overlay to smooth everything */}
            <div className="premium-glass" />
        </div>
    );
};

export default PremiumBackground;
