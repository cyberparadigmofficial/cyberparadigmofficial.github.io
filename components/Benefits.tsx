
import React, { useState } from 'react';
import { GraduationCap, Building, Briefcase, Check } from 'lucide-react';

const Benefits: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'students' | 'faculty' | 'partners'>('students');

    const tabs = [
        { id: 'students' as const, label: 'For Students', icon: <GraduationCap className="w-5 h-5" /> },
        { id: 'faculty' as const, label: 'For Faculty', icon: <Building className="w-5 h-5" /> },
        { id: 'partners' as const, label: 'For Industry Partners', icon: <Briefcase className="w-5 h-5" /> },
    ];

    const content = {
        students: {
            title: "Launch Your Cybersecurity Career Early",
            benefits: [
                { title: "Early Industry Experience", desc: "Start building your career from second year with real-world projects" },
                { title: "Relevant Industry Skills", desc: "Acquire exact skills that top cybersecurity employers seek" },
                { title: "Entrepreneurial Nurturing", desc: "We'll help develop your cybersecurity ideas into viable products" },
                { title: "Product Ownership", desc: "Build your portfolio with tangible achievements that impress recruiters" },
                { title: "Community & Networking", desc: "Join a passionate community of security enthusiasts and mentors" },
                { title: "Cutting-Edge Technology Access", desc: "Work with the latest security tools used by leading organizations" },
                { title: "Competitive Advantage", desc: "Graduate with years of practical experience and industry connections" },
            ]
        },
        faculty: {
            title: "Empower Your Students with Industry Experience",
            benefits: [
                { title: "Enhanced Student Outcomes", desc: "Provide practical experience that complements theoretical learning" },
                { title: "Industry Collaboration", desc: "Facilitate connections between academia and industry" },
                { title: "Research Opportunities", desc: "Collaborate on cutting-edge cybersecurity research projects" },
                { title: "Curriculum Development", desc: "Contribute to and benefit from industry-aligned curriculum initiatives" },
            ]
        },
        partners: {
            title: "Access Top Cybersecurity Talent",
            benefits: [
                { title: "Talent Pipeline", desc: "Access skilled, industry-ready professionals with hands-on experience" },
                { title: "Innovation Hub", desc: "Collaborate on innovative solutions developed in our incubation environment" },
                { title: "Research Collaboration", desc: "Partner on initiatives addressing emerging security challenges" },
                { title: "Brand Visibility", desc: "Increase presence among the next generation of cybersecurity professionals" },
                { title: "CSR & Community Impact", desc: "Contribute to building a stronger cybersecurity ecosystem" },
            ]
        }
    };

    return (
        <section id="benefits" className="py-24 bg-white/50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-terracotta uppercase tracking-widest mb-4">Why Cyberparadigm?</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-[#353535] leading-tight">
                        Because Your Future Can't Wait
                    </h3>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id
                                ? 'bg-terracotta text-white'
                                : 'bg-white text-[#353535]/70 hover:bg-terracotta/5 border border-[#D2D7DF]'
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl border border-[#D2D7DF] p-8 md:p-12">
                    <h4 className="text-2xl font-bold text-[#353535] mb-8 text-center">{content[activeTab].title}</h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content[activeTab].benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-terracotta" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#353535] mb-1">{benefit.title}</h5>
                                    <p className="text-[#BDBBB0] text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
