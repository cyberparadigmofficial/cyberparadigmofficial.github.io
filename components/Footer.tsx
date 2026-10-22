
import React from 'react';
import { Shield, Twitter, Linkedin, Github, Youtube, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#353535] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Shield className="w-10 h-10 text-ivory" />
              <span className="text-2xl font-black tracking-tighter text-white">
                CYBER<span className="text-ivory">PARADIGM</span>
              </span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              K-Hub's specialized cybersecurity vertical, transforming academic potential into industry innovation.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-xl text-white hover:text-ivory hover:border-ivory/50 transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-xl text-white hover:text-ivory hover:border-ivory/50 transition-all"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-xl text-white hover:text-ivory hover:border-ivory/50 transition-all"><Github className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-xl text-white hover:text-ivory hover:border-ivory/50 transition-all"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><a href="https://letushack.com" target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors">LetUsHack</a></li>
              <li><a href="#about" className="hover:text-ivory transition-colors">About Us</a></li>
              <li><a href="#benefits" className="hover:text-ivory transition-colors">Benefits</a></li>
              <li><a href="#faq" className="hover:text-ivory transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Community</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li><a href="#collaborations" className="hover:text-ivory transition-colors">Partnerships</a></li>
              <li><a href="#contact" className="hover:text-ivory transition-colors">Join Us</a></li>
              <li><a href="#" className="hover:text-ivory transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-ivory transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-ivory" />
                <span>contact@cyberparadigm.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-ivory mt-0.5" />
                <span>K-Hub Innovation Center<br />Keshav Memorial Institute<br />Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Cyberparadigm. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
