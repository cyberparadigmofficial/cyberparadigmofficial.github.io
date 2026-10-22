
import React from 'react';
import { WORKSHOP_STATS } from '../constants';
import { Users, Building, Globe } from 'lucide-react';

const Workshops: React.FC = () => {
  return (
    <section id="workshops" className="py-24 relative overflow-hidden bg-[#D2D7DF]/15">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-full h-96 bg-[#BDBBB0]/10 skew-y-3" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-[#8A897C] uppercase tracking-widest mb-4">Beyond the Platform</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#353535] mb-8">Workshops & Programs</h3>
            <p className="text-[#353535]/70 text-lg mb-12 leading-relaxed">
              We believe in the power of shared knowledge. Our offline and online workshops
              bring together industry experts and students to tackle complex security challenges in real-time.
            </p>

            <div className="grid grid-cols-2 gap-10">
              {WORKSHOP_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl font-black text-[#353535]">{stat.value}</span>
                  <span className="text-[#BDBBB0] font-bold uppercase tracking-wider text-xs mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid gap-6">
            <div className="flex gap-6 p-8 bg-white rounded-2xl border border-[#D2D7DF] shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-[#D2D7DF]/30 rounded-2xl h-fit">
                <Building className="w-6 h-6 text-[#8A897C]" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#353535]">College Collaborations</h4>
                <p className="text-[#BDBBB0] text-sm">We partner with universities to integrate our lab infrastructure into their technical curriculum.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-white rounded-2xl border border-[#D2D7DF] shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-[#D2D7DF]/30 rounded-2xl h-fit">
                <Globe className="w-6 h-6 text-[#8A897C]" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#353535]">Hybrid Bootcamps</h4>
                <p className="text-[#BDBBB0] text-sm">Intensive 4-week programs covering everything from network security to web pentesting.</p>
              </div>
            </div>
            <div className="flex gap-6 p-8 bg-white rounded-2xl border border-[#D2D7DF] shadow-sm hover:shadow-md transition-all">
              <div className="p-4 bg-[#D2D7DF]/30 rounded-2xl h-fit">
                <Users className="w-6 h-6 text-[#8A897C]" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2 text-[#353535]">Cyber Awareness</h4>
                <p className="text-[#BDBBB0] text-sm">Non-technical programs focused on social engineering defense and day-to-day digital safety.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
