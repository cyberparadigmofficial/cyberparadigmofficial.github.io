
import React from 'react';
import { Youtube, Instagram } from 'lucide-react';

const ContentSection: React.FC = () => {
    return (
        <section className="py-12 bg-[#D2D7DF]/20">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-6">
                    <h2 className="text-xs font-bold text-[#8A897C] uppercase tracking-widest mb-2">Cybersecurity Explained</h2>
                    <p className="text-[#353535]/70 text-sm">
                        Follow us for cybersecurity tutorials and updates
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://www.youtube.com/@letushackofficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all active:scale-95"
                    >
                        <Youtube className="w-5 h-5" />
                        Subscribe on YouTube
                    </a>

                    <a
                        href="https://www.instagram.com/letushackofficial/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold rounded-xl text-sm transition-all active:scale-95"
                    >
                        <Instagram className="w-5 h-5" />
                        Follow on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
