
import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Announcement: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show announcement after just a small scroll (50px)
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`relative z-20 -mt-12 mb-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
            }`}>
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-ivory rounded-2xl shadow-2xl border border-[#D2D7DF]/30 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-terracotta flex items-center justify-center">
                            <Sparkles className="w-8 h-8 text-ivory" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="text-terracotta text-xs font-bold uppercase tracking-widest mb-2">Coming Soon</div>
                            <h3 className="text-[#353535] text-xl md:text-2xl font-bold leading-snug">
                                Strategic Partnership with Leading US-Based Cybersecurity Firm
                            </h3>
                        </div>

                        {/* CTA */}
                        <div className="flex-shrink-0">
                            <button className="flex items-center gap-2 px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white font-bold rounded-xl text-sm transition-all active:scale-95">
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Announcement;
