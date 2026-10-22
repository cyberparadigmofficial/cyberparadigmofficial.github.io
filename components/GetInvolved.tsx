
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Rocket, Handshake, Mail, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { API_BASE } from '../lib/api';

const GetInvolved: React.FC = () => {
    const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();
    const { ref: contactRef, isVisible: contactVisible } = useScrollReveal<HTMLDivElement>();

    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleNewsletterSubmit = async () => {
        if (!newsletterEmail || !newsletterEmail.includes('@')) {
            setMessage('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);
        setMessage('');

        try {
            if (API_BASE) {
                const response = await fetch(`${API_BASE}/api/newsletter`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: newsletterEmail }),
                });

                const result = await response.json();

                if (result.success) {
                    setMessage(result.message);
                    setNewsletterEmail('');
                } else {
                    setMessage('Something went wrong. Please try again.');
                }
            } else {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        access_key: 'f9a72503-9caf-4f79-a546-760bebe29228',
                        subject: `New Newsletter Subscriber - ${newsletterEmail}`,
                        from_name: 'Cyberparadigm Website',
                        email: newsletterEmail,
                        message: `Newsletter subscription request from ${newsletterEmail}`,
                    }),
                });

                const result = await response.json();

                if (result.success) {
                    setMessage('Successfully subscribed!');
                    setNewsletterEmail('');
                } else {
                    setMessage('Something went wrong. Please try again.');
                }
            }
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setMessage('Error connecting to server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-white/50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center max-w-3xl mx-auto mb-16 reveal-up ${headerVisible ? 'is-visible' : ''}`}
                >
                    <h2 className="text-sm font-bold text-terracotta uppercase tracking-widest mb-4">Get Involved</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-[#353535] mb-6 leading-tight">
                        Ready to Begin Your Cybersecurity Journey?
                    </h3>
                    <p className="text-[#353535]/70 text-lg leading-relaxed">
                        Whether you're a student ready to learn, an entrepreneur with an idea, or an organization looking to collaborate—Cyberparadigm welcomes you.
                    </p>
                </div>

                {/* Action Cards */}
                <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* For Students - LetUsHack */}
                    <div className={`bg-white rounded-3xl border border-[#D2D7DF] p-8 hover:border-terracotta transition-all group flex flex-col h-full hover-lift reveal-up ${cardsVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0ms' }}>
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-terracotta/10 text-terracotta mb-6">
                            <Terminal className="w-7 h-7" />
                        </div>
                        <h4 className="text-xl font-bold text-[#353535] mb-3">Join LetUsHack</h4>
                        <p className="text-[#BDBBB0] text-sm leading-relaxed mb-6">
                            Start your cybersecurity learning journey today with hands-on labs and comprehensive learning paths.
                        </p>
                        <a href="https://letushack.com" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#353535] hover:bg-[#353535]/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 mt-auto border-2 border-transparent hover-scale">
                            Sign Up for LetUsHack
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* For Students - Apply */}
                    <div className={`bg-white rounded-3xl border border-[#D2D7DF] p-8 hover:border-terracotta transition-all group flex flex-col h-full hover-lift reveal-up ${cardsVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-terracotta/10 text-terracotta mb-6">
                            <Rocket className="w-7 h-7" />
                        </div>
                        <h4 className="text-xl font-bold text-[#353535] mb-3">Apply to Cyberparadigm</h4>
                        <p className="text-[#BDBBB0] text-sm leading-relaxed mb-4">
                            Join our incubation program and transform your cybersecurity ideas into reality.
                        </p>
                        <ul className="text-xs text-[#353535]/60 space-y-1 mb-6">
                            <li>• Second year or above</li>
                            <li>• Passion for cybersecurity</li>
                            <li>• Entrepreneurial mindset</li>
                        </ul>
                        <Link to="/contact?type=individual" className="w-full flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 mt-auto border-2 border-transparent hover-scale hover-glow">
                            Apply to Join
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* For Partners */}
                    <div className={`bg-white rounded-3xl border border-[#D2D7DF] p-8 hover:border-terracotta transition-all group flex flex-col h-full hover-lift reveal-up ${cardsVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-terracotta/10 text-terracotta mb-6">
                            <Handshake className="w-7 h-7" />
                        </div>
                        <h4 className="text-xl font-bold text-[#353535] mb-3">Partner With Us</h4>
                        <p className="text-[#BDBBB0] text-sm leading-relaxed mb-4">
                            Interested in collaboration, partnership, or supporting our mission?
                        </p>
                        <ul className="text-xs text-[#353535]/60 space-y-1 mb-6">
                            <li>• Talent acquisition</li>
                            <li>• Research collaboration</li>
                            <li>• Sponsored challenges</li>
                        </ul>
                        <Link to="/contact?type=company" className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#D2D7DF]/30 text-[#353535] border-2 border-[#D2D7DF] px-6 py-3.5 rounded-xl font-bold text-sm transition-all active:scale-95 mt-auto hover-scale">
                            Express Interest
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Contact & Newsletter */}
                <div ref={contactRef} className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className={`bg-[#353535] rounded-3xl p-8 hover-lift reveal-left ${contactVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0ms' }}>
                        <h4 className="text-xl font-bold text-white mb-6">Contact Information</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-ivory" />
                                </div>
                                <div>
                                    <div className="text-white/50 text-xs uppercase tracking-wider">Email</div>
                                    <div className="text-white font-medium">contact@cyberparadigm.in</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-ivory" />
                                </div>
                                <div>
                                    <div className="text-white/50 text-xs uppercase tracking-wider">Location</div>
                                    <div className="text-white font-medium">Peerzadiguda road, village, uppal, Kachawanisingaram, Hyderabad, Telangana 500088</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className={`bg-white rounded-3xl p-8 border border-[#D2D7DF] hover-lift reveal-right ${contactVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
                        <h4 className="text-xl font-bold text-[#353535] mb-3">Stay Updated</h4>
                        <p className="text-[#BDBBB0] text-sm mb-6">Get the latest updates on partnerships, product launches, events, and opportunities.</p>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleNewsletterSubmit()}
                                className="flex-1 px-4 py-3 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm text-[#353535] transition-colors"
                            />
                            <button
                                onClick={handleNewsletterSubmit}
                                disabled={isSubmitting}
                                className="px-6 py-3 bg-terracotta hover:bg-terracotta/90 text-white font-bold rounded-xl text-sm transition-all active:scale-95 hover-scale hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                            </button>
                        </div>
                        {message && (
                            <p className={`mt-3 text-sm ${message.includes('Success') || message.includes('subscribed') ? 'text-green-600' : 'text-terracotta'}`}>
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;

