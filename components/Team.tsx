
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#D2D7DF]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-[#8A897C] uppercase tracking-widest mb-4">The Team</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#353535] mb-6">Masters of the Craft</h3>
          <p className="text-[#353535]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Our team consists of industry veterans, passionate security researchers, and
            dedicated educators committed to building a safer digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 border-4 border-white shadow-xl">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <h4 className="text-2xl font-extrabold text-[#353535] mb-2">{member.name}</h4>
              <p className="text-[#BDBBB0] font-bold uppercase tracking-widest text-xs">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
