
import React from 'react';
import { ArrowRight, Users, Lightbulb, BookOpen, FlaskConical, Globe, Cpu, Award, Handshake } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Collaborations: React.FC = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
    const { ref: announcementRef, isVisible: announcementVisible } = useScrollReveal<HTMLDivElement>();
    const { ref: partnersRef, isVisible: partnersVisible } = useScrollReveal<HTMLDivElement>();

    const partnershipTypes = [
        { icon: <Users className="w-6 h-6" />, title: "Talent Partnership", desc: "Connect with our trained cybersecurity professionals for internships and placements" },
        { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation Collaboration", desc: "Partner with our incubation projects to develop innovative security solutions" },
        { icon: <BookOpen className="w-6 h-6" />, title: "Training & Development", desc: "Collaborate on curriculum development and industry-relevant training resources" },
        { icon: <FlaskConical className="w-6 h-6" />, title: "Research Partnership", desc: "Join forces on cybersecurity research initiatives that advance the field" },
    ];



    return (
        <section id="collaborations" className="py-24 bg-ivory">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center max-w-3xl mx-auto mb-16 reveal-up ${headerVisible ? 'is-visible' : ''}`}
                >
                    <h2 className="text-sm font-bold text-terracotta uppercase tracking-widest mb-4">Collaborations & Partners</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-[#353535] mb-6 leading-tight">
                        Building Bridges Between Innovation and Industry
                    </h3>
                    <p className="text-[#353535]/70 text-lg leading-relaxed">
                        At Cyberparadigm, we believe that the best cybersecurity solutions emerge from collaboration. Our partnership ecosystem connects students, researchers, and entrepreneurs with leading industry organizations.
                    </p>
                </div>

                {/* Coming Soon Announcement */}
                <div
                    ref={announcementRef}
                    className={`bg-gradient-to-r from-[#353535] to-terracotta rounded-3xl p-8 md:p-12 mb-16 hover-lift reveal-scale ${announcementVisible ? 'is-visible' : ''}`}
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center animate-float">
                                <Globe className="w-10 h-10 text-white" />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Coming Soon</div>
                            <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">US-Based Strategic Partnership</h4>
                            <p className="text-white/70 leading-relaxed max-w-2xl">
                                We're finalizing a strategic collaboration with a leading cybersecurity company in the United States. This partnership will bring global expertise, international exposure, advanced training resources, and career pathways to our community.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Partnership Opportunities */}
                <div ref={partnersRef} className="mb-16">
                    <h3 className={`text-2xl font-bold text-[#353535] text-center mb-12 reveal-up ${partnersVisible ? 'is-visible' : ''}`}>Partnership Opportunities</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {partnershipTypes.map((type, index) => (
                            <div
                                key={index}
                                className={`p-8 bg-white/40 rounded-3xl border border-[#D2D7DF] hover:border-terracotta transition-all group text-center hover-lift reveal-up ${partnersVisible ? 'is-visible' : ''}`}
                                style={{ transitionDelay: `${(index + 1) * 80}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-terracotta/10 text-terracotta mb-6 group-hover:bg-terracotta/20 transition-colors">
                                    {type.icon}
                                </div>
                                <h4 className="font-bold text-[#353535] mb-3">{type.title}</h4>
                                <p className="text-[#BDBBB0] text-sm leading-relaxed">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Collaborations;

