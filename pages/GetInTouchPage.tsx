import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Stepper, { Step } from '../components/Stepper';
import SubmissionSuccess from '../components/SubmissionSuccess';
import { Select } from '../components/ui/Select';
import { ArrowLeft, User, Building, Send, Mail, Phone, MessageSquare, Briefcase, GraduationCap, Users } from 'lucide-react';
import { API_BASE } from '../lib/api';

const GetInTouchPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<'individual' | 'company'>('individual');

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [individualData, setIndividualData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        course: '',
        year: '',
        interest: '',
    });

    const [companyData, setCompanyData] = useState({
        companyName: '',
        designation: '',
        name: '', // Contact Person Name
        email: '', // Work Email
        phone: '',
        message: '',
        partnershipType: '',
    });

    // Derived state for current form rendering
    const formData = activeTab === 'individual' ? individualData : companyData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (activeTab === 'individual') {
            setIndividualData(prev => ({ ...prev, [name]: value }));
        } else {
            setCompanyData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSelectChange = (name: string) => (value: string) => {
        if (activeTab === 'individual') {
            setIndividualData(prev => ({ ...prev, [name]: value }));
        } else {
            setCompanyData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const data = activeTab === 'individual' ? individualData : companyData;
        const payload = {
            type: activeTab,
            ...data
        };

        try {
            // 1. Send email via Web3Forms (from frontend - bypasses Cloudflare)
            const emailPayload = {
                access_key: 'f9a72503-9caf-4f79-a546-760bebe29228',
                subject: `New Contact: ${activeTab.toUpperCase()} - ${data.name}`,
                from_name: 'Cyberparadigm Website',
                ...data,
                submission_type: activeTab,
            };

            const emailResponse = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(emailPayload),
            });
            const emailResult = await emailResponse.json();

            if (!emailResult.success) {
                console.warn('Email failed:', emailResult);
            }

            const emailOk = !!emailResult.success;
            if (!emailOk) {
                console.warn('Email failed:', emailResult);
            }

            if (API_BASE) {
                try {
                    const dbResponse = await fetch(`${API_BASE}/api/contact`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload),
                    });
                    if (!dbResponse.ok) {
                        console.error('Database save failed:', dbResponse.status);
                    }
                } catch (dbError) {
                    console.error('Database save failed:', dbError);
                }
            }

            if (emailOk) {
                setIsSuccess(true);
                window.scrollTo(0, 0);
                if (activeTab === 'individual') {
                    setIndividualData({
                        name: '', email: '', phone: '', message: '', course: '', year: '', interest: ''
                    });
                } else {
                    setCompanyData({
                        companyName: '', designation: '', name: '', email: '', phone: '', message: '', partnershipType: ''
                    });
                }
            } else {
                alert('Error submitting form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-ivory text-[#353535] selection:bg-terracotta/20 selection:text-terracotta">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-[#8A897C] hover:text-[#353535] transition-colors mb-8 font-medium group">
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    {isSuccess ? (
                        <div className="py-12">
                            <SubmissionSuccess />
                        </div>
                    ) : (
                        <>
                            <div className="text-center max-w-2xl mx-auto mb-12">
                                <h2 className="text-sm font-bold text-terracotta uppercase tracking-widest mb-4">Get In Touch</h2>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-[#353535] mb-4 leading-tight">
                                    Let's Start a Conversation
                                </h3>
                                <p className="text-[#353535]/70 text-lg leading-relaxed">
                                    Whether you're an individual looking to join or a company seeking partnership, we'd love to hear from you.
                                </p>
                            </div>

                            {/* Tab Selector */}
                            <div className="flex justify-center gap-4 mb-12">
                                <button
                                    onClick={() => setActiveTab('individual')}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === 'individual'
                                        ? 'bg-terracotta text-white shadow-lg'
                                        : 'bg-white text-[#353535]/70 hover:bg-terracotta/5 border border-[#D2D7DF]'
                                        }`}
                                >
                                    <User className="w-5 h-5" />
                                    I'm an Individual
                                </button>
                                <button
                                    onClick={() => setActiveTab('company')}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm transition-all ${activeTab === 'company'
                                        ? 'bg-terracotta text-white shadow-lg'
                                        : 'bg-white text-[#353535]/70 hover:bg-terracotta/5 border border-[#D2D7DF]'
                                        }`}
                                >
                                    <Building className="w-5 h-5" />
                                    I represent a Company
                                </button>
                            </div>

                            {/* Stepper Form */}
                            {activeTab === 'individual' ? (
                                <Stepper
                                    key="individual"
                                    initialStep={1}
                                    onFinalStepCompleted={handleSubmit}
                                    isSubmitting={isSubmitting}
                                    backButtonText="Back"
                                    nextButtonText="Continue"
                                    submitButtonText="Submit Application"
                                >
                                    <Step>
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-3 rounded-xl bg-terracotta/10">
                                                <User className="w-6 h-6 text-terracotta" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#353535]">Personal Details</h4>
                                                <p className="text-[#BDBBB0] text-sm">Let's start with your contact info.</p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Full Name *</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BDBBB0]" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="Your full name"
                                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Email Address *</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BDBBB0]" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="your@email.com"
                                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Phone Number *</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BDBBB0]" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="+91 98765 43210"
                                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Step>
                                    <Step>
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-3 rounded-xl bg-terracotta/10">
                                                <GraduationCap className="w-6 h-6 text-terracotta" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#353535]">Education</h4>
                                                <p className="text-[#BDBBB0] text-sm">Tell us about your academic background.</p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <Select
                                                    label="Current Year"
                                                    name="year"
                                                    value={formData.year}
                                                    onChange={handleSelectChange('year')}
                                                    required
                                                    placeholder="Select your year"
                                                    options={[
                                                        { value: "2nd Year", label: "2nd Year" },
                                                        { value: "3rd Year", label: "3rd Year" },
                                                        { value: "4th Year", label: "4th Year" },
                                                        { value: "Graduate", label: "Graduate" },
                                                        { value: "Working Professional", label: "Working Professional" },
                                                    ]}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Course / Degree</label>
                                                <input
                                                    type="text"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., B.Tech CSE, BCA, etc."
                                                    className="w-full px-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm"
                                                />
                                            </div>
                                        </div>
                                    </Step>
                                    <Step>
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-3 rounded-xl bg-terracotta/10">
                                                <Briefcase className="w-6 h-6 text-terracotta" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#353535]">Interests & Motivation</h4>
                                                <p className="text-[#BDBBB0] text-sm">Why do you want to join us?</p>
                                            </div>
                                        </div>
                                        <div className="space-y-6">
                                            <div>
                                                <Select
                                                    label="Area of Interest"
                                                    name="interest"
                                                    value={formData.interest}
                                                    onChange={handleSelectChange('interest')}
                                                    required
                                                    placeholder="Select your area of interest"
                                                    options={[
                                                        { value: "Web Security", label: "Web Security" },
                                                        { value: "Network Security", label: "Network Security" },
                                                        { value: "Malware Analysis", label: "Malware Analysis" },
                                                        { value: "Penetration Testing", label: "Penetration Testing" },
                                                        { value: "Cloud Security", label: "Cloud Security" },
                                                        { value: "Cryptography", label: "Cryptography" },
                                                        { value: "Other", label: "Other" },
                                                    ]}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Why do you want to join Cyberparadigm? *</label>
                                                <div className="relative">
                                                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#BDBBB0]" />
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        required
                                                        rows={4}
                                                        placeholder="Tell us about your motivation, experience, and what you hope to achieve..."
                                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm resize-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Step>
                                </Stepper>
                            ) : (
                                <Stepper
                                    key="company"
                                    initialStep={1}
                                    onFinalStepCompleted={handleSubmit}
                                    isSubmitting={isSubmitting}
                                    backButtonText="Back"
                                    nextButtonText="Continue"
                                    submitButtonText="Submit Inquiry"
                                >
                                    <Step>
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-3 rounded-xl bg-terracotta/10">
                                                <Building className="w-6 h-6 text-terracotta" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#353535]">Company Details</h4>
                                                <p className="text-[#BDBBB0] text-sm">Tell us about your organization.</p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Your Name *</label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BDBBB0]" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="Your full name"
                                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Company Name *</label>
                                                <div className="relative">
                                                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BDBBB0]" />
                                                    <input
                                                        type="text"
                                                        name="companyName"
                                                        value={formData.companyName}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="Your company name"
                                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Email Address *</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BDBBB0]" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="work@company.com"
                                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Designation *</label>
                                                <div className="relative">
                                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BDBBB0]" />
                                                    <input
                                                        type="text"
                                                        name="designation"
                                                        value={formData.designation}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="Your role/title"
                                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-semibold text-[#353535] mb-2">Phone Number *</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#BDBBB0]" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="+91 98765 43210"
                                                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Step>
                                    <Step>
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="p-3 rounded-xl bg-terracotta/10">
                                                <Briefcase className="w-6 h-6 text-terracotta" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#353535]">Partnership Goals</h4>
                                                <p className="text-[#BDBBB0] text-sm">How can we work together?</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Select
                                                label="Partnership Type"
                                                name="partnershipType"
                                                value={formData.partnershipType}
                                                onChange={handleSelectChange('partnershipType')}
                                                required
                                                placeholder="Select partnership type"
                                                options={[
                                                    { value: "Talent Partnership", label: "Talent Partnership" },
                                                    { value: "Innovation Collaboration", label: "Innovation Collaboration" },
                                                    { value: "Training & Development", label: "Training & Development" },
                                                    { value: "Research Partnership", label: "Research Partnership" },
                                                    { value: "Sponsorship", label: "Sponsorship" },
                                                    { value: "Other", label: "Other" },
                                                ]}
                                            />
                                        </div>

                                        <div className="mb-8">
                                            <label className="block text-sm font-semibold text-[#353535] mb-2">Tell us about your partnership interest *</label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#BDBBB0]" />
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                    rows={4}
                                                    placeholder="Describe how you'd like to collaborate with Cyberparadigm..."
                                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D2D7DF] focus:border-terracotta outline-none text-sm resize-none"
                                                />
                                            </div>
                                        </div>
                                    </Step>
                                </Stepper>
                            )}
                        </>
                    )}
                </div>
            </main >

            <Footer />
        </div >
    );
};

export default GetInTouchPage;
