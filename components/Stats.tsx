
import React from 'react';
import { Users, Rocket, Building, Server } from 'lucide-react';

const Stats: React.FC = () => {
    const stats = [
        { icon: <Users className="w-6 h-6" />, value: "500+", label: "Students Trained" },
        { icon: <Rocket className="w-6 h-6" />, value: "25+", label: "Active Projects" },
        { icon: <Building className="w-6 h-6" />, value: "10+", label: "Industry Partners" },
        { icon: <Server className="w-6 h-6" />, value: "50+", label: "Lab Environments" },
    ];

    return (
        <section className="py-16 bg-white/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-terracotta/10 text-terracotta mb-4 group-hover:bg-terracotta/20 transition-colors">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-black text-[#353535] mb-2">{stat.value}</div>
                            <div className="text-terracotta/60 font-semibold uppercase tracking-wider text-xs">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
