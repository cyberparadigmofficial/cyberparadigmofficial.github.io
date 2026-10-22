
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Clock, Cpu, Users, Lightbulb, Terminal, Network, FlaskConical, Building } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: missionRef, isVisible: missionVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: diffRef, isVisible: diffVisible } = useScrollReveal<HTMLDivElement>();

  const differentiators = [
    { icon: <Clock className="w-5 h-5" />, title: "Early Industry Exposure", desc: "From your second year, work on industry-level projects and real security challenges." },
    { icon: <Cpu className="w-5 h-5" />, title: "Product-Centric Learning", desc: "Build, deploy, and maintain security solutions—not just learn about them." },
    { icon: <Users className="w-5 h-5" />, title: "Community-Driven Innovation", desc: "Join a vibrant community of security enthusiasts, mentors, and industry experts." },
    { icon: <Lightbulb className="w-5 h-5" />, title: "Entrepreneurial Focus", desc: "Learn to think like a founder while building like an engineer." },
    { icon: <Terminal className="w-5 h-5" />, title: "Cutting-Edge Technology", desc: "Access the latest tools and technologies used by leading organizations." },
  ];



  return (
    <section id="about" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 reveal-up ${headerVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-sm font-bold text-terracotta uppercase tracking-widest mb-4">About Cyberparadigm</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#353535] mb-8 leading-tight">
            Redefining Cybersecurity Education and Innovation
          </h3>
          <p className="text-[#353535]/70 text-lg leading-relaxed">
            Cyberparadigm represents a paradigm shift in how we approach cybersecurity education and entrepreneurship. As the cybersecurity vertical of K-hub, we've created an ecosystem that nurtures innovation from ideation to implementation.
          </p>
          <div className="mt-8">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white font-bold rounded-xl text-sm transition-all active:scale-95 hover-scale hover-glow"
            >
              Meet Our Team
              <Users className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Mission & Vision */}
        <div ref={missionRef} className="grid md:grid-cols-2 gap-8 mb-20">
          <div className={`p-10 bg-white/40 rounded-3xl border border-[#D2D7DF] hover-lift reveal-up ${missionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-terracotta/10">
                <Target className="w-6 h-6 text-terracotta" />
              </div>
              <h4 className="text-xl font-bold text-[#353535]">Our Mission</h4>
            </div>
            <p className="text-[#353535]/70 leading-relaxed">
              To cultivate a thriving community of cybersecurity innovators who don't just understand security concepts but create solutions that address real-world challenges.
            </p>
          </div>
          <div className={`p-10 bg-white/40 rounded-3xl border border-[#D2D7DF] hover-lift reveal-up ${missionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-terracotta/10">
                <Eye className="w-6 h-6 text-terracotta" />
              </div>
              <h4 className="text-xl font-bold text-[#353535]">Our Vision</h4>
            </div>
            <p className="text-[#353535]/70 leading-relaxed">
              To be the leading cybersecurity incubation hub that transforms academic potential into industry innovation, setting new standards for practical cybersecurity education and entrepreneurship.
            </p>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div ref={diffRef} className="mb-20">
          <h3 className={`text-2xl font-bold text-[#353535] text-center mb-12 reveal-up ${diffVisible ? 'is-visible' : ''}`}>What Makes Us Different</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className={`p-6 bg-white/60 rounded-2xl border border-[#D2D7DF] hover:border-terracotta transition-all group text-center hover-lift reveal-up ${diffVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 80}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-terracotta/10 text-terracotta mb-4 group-hover:bg-terracotta/20 transition-colors">
                  {item.icon}
                </div>
                <h4 className="font-bold text-[#353535] mb-2 text-sm">{item.title}</h4>
                <p className="text-[#BDBBB0] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;

