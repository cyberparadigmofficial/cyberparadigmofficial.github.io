
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Who can join Cyberparadigm?",
            answer: "Students from their second year of college onward with an interest in cybersecurity can join our incubation program. LetUsHack is open to anyone interested in learning cybersecurity."
        },
        {
            question: "Is there any fee to join?",
            answer: "Basic access to LetUsHack is free. Premium features and incubation support may have associated costs—please contact us for details."
        },
        {
            question: "What kind of support does Cyberparadigm provide?",
            answer: "We provide mentorship, infrastructure, tools, industry connections, and guidance to help you develop your cybersecurity skills and products."
        },
        {
            question: "How is Cyberparadigm different from other learning platforms?",
            answer: "We're not just a learning platform—we're an incubation ecosystem. We combine hands-on learning with product development, entrepreneurship, and real industry exposure."
        },
        {
            question: "Can I work on my own project ideas?",
            answer: "Absolutely! We encourage and support student-led initiatives and provide the resources needed to bring your ideas to life."
        },
        {
            question: "How can my organization partner with Cyberparadigm?",
            answer: "Reach out to us through our collaboration form, and our team will discuss partnership opportunities that align with your goals."
        },
    ];

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-terracotta uppercase tracking-widest mb-4">FAQ</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-[#353535] leading-tight">
                        Frequently Asked Questions
                    </h3>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[#D2D7DF] rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-terracotta/5 transition-colors"
                            >
                                <span className={`font-bold pr-4 transition-colors ${openIndex === index ? 'text-terracotta' : 'text-[#353535]'}`}>{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180 text-terracotta' : 'text-[#8A897C]'}`} />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 pt-0">
                                    <p className="text-[#353535]/70 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
