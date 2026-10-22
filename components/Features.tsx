
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="platform" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#8A897C] uppercase tracking-widest mb-4">The Platform</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#353535] mb-6">Engineered for Mastery</h3>
          <p className="text-[#353535]/70 max-w-2xl mx-auto text-lg">
            Our platform is designed to provide the most realistic cybersecurity training environment
            available to students and professionals alike.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="p-10 bg-white rounded-3xl border border-[#D2D7DF] shadow-sm hover:border-[#8A897C] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-8 p-4 rounded-2xl bg-[#D2D7DF]/30 w-fit group-hover:bg-[#8A897C]/10 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-[#353535]">{feature.title}</h4>
              <p className="text-[#BDBBB0] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
