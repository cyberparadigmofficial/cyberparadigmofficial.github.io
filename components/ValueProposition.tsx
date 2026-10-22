
import React from 'react';
import { Lightbulb, Rocket, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ValueProposition: React.FC = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();

    return (
        <section className="py-20 bg-ivory">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Value Prop */}
                <div
                    ref={headerRef}
                    className={`text-center max-w-4xl mx-auto mb-20 reveal-up ${headerVisible ? 'is-visible' : ''}`}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#353535] mb-8 leading-tight">
                        Transforming Cybersecurity Education Into Industry Innovation
                    </h2>
                    <p className="text-[#353535]/70 text-lg md:text-xl leading-relaxed">
                        Cyberparadigm is K-hub's specialized cybersecurity vertical, designed to bridge the gap between academic learning and industry demands. We provide a dynamic incubation ecosystem where innovative cybersecurity ideas evolve into market-ready solutions.
                    </p>
                </div>


                {/* 3 Key Highlights Cards */}
                <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className={`p-8 bg-white/40 rounded-3xl border border-[#D2D7DF] hover:border-terracotta transition-all duration-300 group hover-lift reveal-up ${cardsVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0ms' }}>
                        <div className="mb-6 p-4 rounded-2xl bg-terracotta/10 w-fit group-hover:bg-terracotta/20 transition-colors">
                            <Rocket className="w-8 h-8 text-terracotta" />
                        </div>
                        <h3 className="text-xl font-bold text-[#353535] mb-4">Industry-Ready From Day One</h3>
                        <p className="text-[#353535]/80 leading-relaxed">
                            Start your cybersecurity journey in your second year of college with real industry-level experience. We don't just teach theory—we build practitioners.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className={`p-8 bg-white/40 rounded-3xl border border-[#D2D7DF] hover:border-terracotta transition-all duration-300 group hover-lift reveal-up ${cardsVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
                        <div className="mb-6 p-4 rounded-2xl bg-terracotta/10 w-fit group-hover:bg-terracotta/20 transition-colors">
                            <Lightbulb className="w-8 h-8 text-terracotta" />
                        </div>
                        <h3 className="text-xl font-bold text-[#353535] mb-4">Innovation Incubator</h3>
                        <p className="text-[#353535]/80 leading-relaxed">
                            Transform your cybersecurity ideas into viable products. From concept to deployment, we provide the infrastructure, mentorship, and resources you need.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className={`p-8 bg-white/40 rounded-3xl border border-[#D2D7DF] hover:border-terracotta transition-all duration-300 group hover-lift reveal-up ${cardsVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                        <div className="mb-6 p-4 rounded-2xl bg-terracotta/10 w-fit group-hover:bg-terracotta/20 transition-colors">
                            <Globe className="w-8 h-8 text-terracotta" />
                        </div>
                        <h3 className="text-xl font-bold text-[#353535] mb-4">Global Partnerships</h3>
                        <p className="text-[#353535]/60 leading-relaxed">
                            Connect with leading cybersecurity organizations worldwide. Our expanding network of industry collaborations opens doors to cutting-edge projects and career opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;

