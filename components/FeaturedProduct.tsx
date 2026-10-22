
import React from 'react';
import { ArrowRight, Terminal, BookOpen, Trophy, Users, Shield, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FeaturedProduct: React.FC = () => {
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
    const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal<HTMLDivElement>();

    const features = [
        { icon: <BookOpen className="w-5 h-5" />, title: "In-Depth Learning Paths", desc: "Expertly crafted curricula from fundamentals to advanced penetration testing" },
        { icon: <Terminal className="w-5 h-5" />, title: "Hands-On Labs", desc: "Real-time environments mirroring enterprise infrastructure" },
        { icon: <Trophy className="w-5 h-5" />, title: "Progressive Skill Building", desc: "Start from basics, advance through complex challenges" },
        { icon: <Zap className="w-5 h-5" />, title: "Industry-Relevant Content", desc: "Continuously updated to reflect current practices" },
        { icon: <Shield className="w-5 h-5" />, title: "Practical Certifications", desc: "Credentials demonstrating hands-on competency" },
        { icon: <Users className="w-5 h-5" />, title: "Community Learning", desc: "Collaborate with peers and experienced practitioners" },
    ];

    return (
        <section className="py-24 bg-[#353535]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div ref={contentRef} className={`reveal-left ${contentVisible ? 'is-visible' : ''}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-bold text-white/80 uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#8A897C]" />
                            Featured Product
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Introducing LetUsHack: Your Gateway to Cybersecurity Mastery
                        </h2>

                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            LetUsHack is Cyberparadigm's flagship learning platform, offering comprehensive learning paths and hands-on labs where you can practice cybersecurity in real-time environments. Whether you're a beginner or advancing your skills, LetUsHack provides the practical experience that employers demand.
                        </p>

                        <a href="https://letushack.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#8A897C] hover:bg-[#8A897C]/90 text-white px-8 py-4 rounded-xl font-bold text-base transition-all active:scale-95 shadow-xl hover:-translate-y-0.5 hover-scale hover-glow">
                            Start Learning on LetUsHack
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Right - Features Grid */}
                    <div ref={featuresRef} className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#8A897C]/50 transition-all group hover-lift reveal-up ${featuresVisible ? 'is-visible' : ''}`}
                                style={{ transitionDelay: `${(index + 1) * 80}ms` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-xl bg-[#8A897C]/20 text-[#8A897C] group-hover:bg-[#8A897C]/30 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                                        <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProduct;

