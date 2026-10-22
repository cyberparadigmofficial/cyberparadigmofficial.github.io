
import React from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-[#8A897C] uppercase tracking-widest mb-4">The Experience</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#353535] mb-6">Cyber Paradigm in Action</h3>
          <div className="w-24 h-1.5 bg-[#8A897C] mx-auto rounded-full" />
        </div>

        <div className="space-y-32">
          {GALLERY_ITEMS.map((item, index) => (
            <div key={item.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
              <div className="w-full md:w-1/2 group">
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/10] border border-[#D2D7DF] shadow-lg">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#353535]/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="text-[#8A897C] font-black text-lg">0{index + 1}</div>
                <h4 className="text-3xl md:text-4xl font-extrabold text-[#353535] tracking-tight leading-tight">{item.title}</h4>
                <p className="text-[#353535]/70 text-lg leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-4">
                  <button className="text-[#353535] hover:text-[#8A897C] font-bold flex items-center gap-3 group transition-colors">
                    Explore Activity
                    <span className="w-12 h-1 bg-[#D2D7DF] group-hover:w-16 group-hover:bg-[#8A897C] transition-all rounded-full"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
