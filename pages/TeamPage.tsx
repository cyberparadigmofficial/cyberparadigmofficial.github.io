
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Github, Linkedin, ArrowLeft } from 'lucide-react';
import PremiumBackground from '../components/PremiumBackground';

const TeamPage: React.FC = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Founder data
    const founder = {
        name: "Mr. Neil Gogte",
        role: "Founder & Chairman",
        image: "/assets/images/team/Neil_Gogte.png",
        github: "#",
        linkedin: "#"
    };

    // Core Team members data
    const coreTeam = [
        {
            id: 'lead',
            name: "Sripooja Mallam",
            role: "Tech Lead",
            image: "/assets/images/team/sripooja.jpg",
            github: "https://github.com/msripooja",
            linkedin: "https://www.linkedin.com/in/msripooja/"
        },
        {
            id: 1,
            name: "K Bindu Siva Madhav",
            role: "Core Team Member",
            image: "/assets/images/team/madhav.jpg",
            github: "https://github.com/M4dh4v",
            linkedin: "https://www.linkedin.com/in/k-madhav-90388a32a"
        },
        {
            id: 2,
            name: "L Abhinav",
            role: "Core Team Member",
            image: "/assets/images/team/abhinav ladda.jpeg",
            github: "https://github.com/tilluladda",
            linkedin: "https://www.linkedin.com/in/abhinav-ladda-9b24573a9"
        },
        {
            id: 3,
            name: "G Abhinav",
            role: "Core Team Member",
            image: "/assets/images/team/abhinav.jpg",
            github: "https://github.com/Abhinav21110",
            linkedin: "https://www.linkedin.com/in/abhinav-govind-00717b34b"
        },
        {
            id: 4,
            name: "G Bharath",
            role: "Core Team Member",
            image: "/assets/images/team/bharat.jpg",
            github: "https://github.com/GollaBharath",
            linkedin: "https://www.linkedin.com/in/golla-bharath/"
        },
        {
            id: 5,
            name: "N Lokesh",
            role: "Core Team Member",
            image: "/assets/images/team/lokesh.png",
            github: "https://github.com/LOKI1106",
            linkedin: "https://www.linkedin.com/in/lokesh-navale"
        },
        {
            id: 6,
            name: "G Bhanodai gupta",
            role: "Core Team Member",
            image: "/assets/images/team/gupta.jpg",
            github: "https://github.com/Bhanodai28",
            linkedin: "https://www.linkedin.com/in/bhanodai-gupta-2432b4362"
        },
        {
            id: 7,
            name: "S Anirudh Gupta",
            role: "Core Team Member",
            image: "/assets/images/team/anirudh.jpg",
            github: "https://github.com/Anirudh958",
            linkedin: "https://www.linkedin.com/in/anirudh-gupta-surisetty-80033a327"
        },
        {
            id: 8,
            name: "L Akshith",
            role: "Core Team Member",
            image: "/assets/images/team/akshith.jpeg",
            github: "https://github.com/Akshith-Labishetty",
            linkedin: "https://www.linkedin.com/in/akshith-labishetty-534b55337/"
        },
        {
            id: 9,
            name: "R.J.R.Vishwa Vikhyath",
            role: "Core Team Member",
            image: "/assets/images/team/vikyath.jpg",
            github: "https://github.com/MR-HUMAN08",
            linkedin: "https://www.linkedin.com/in/vishwa-vikhyath-692b90315/"
        },
        {
            id: 10,
            name: "B Vardhan",
            role: "Core Team Member",
            image: "/assets/images/team/vardhan.png",
            github: "https://github.com/localhost969",
            linkedin: "https://www.linkedin.com/in/vrdn96/"
        },
        {
            id: 11,
            name: "S Tharani",
            role: "Core Team Member",
            image: "/assets/images/team/sheref.jpg",
            github: "https://github.com/grim-sudo",
            linkedin: "https://www.linkedin.com/in/shefan-tharani-bb6989317"
        },
        {
            id: 12,
            name: "G Vishal",
            role: "Core Team Member",
            image: "/assets/images/team/vishal.jpg",
            github: "https://github.com/vishalgopu",
            linkedin: "https://www.linkedin.com/in/vishal-gopu-831306256"
        },
        {
            id: 13,
            name: "V Rohit",
            role: "Core Team Member",
            image: "/assets/images/team/rohit.jpeg",
            github: "https://github.com/RolittapesReal",
            linkedin: "https://www.linkedin.com/in/rohit-vennamaneni"
        },
        {
            id: 14,
            name: "G.Srinikesh Reddy",
            role: "Core Team Member",
            image: "/assets/images/team/srinikesh1.jpg",
            github: "https://github.com/Talos-Sentries101",
            linkedin: "https://www.linkedin.com/in/srinikesh-reddy-0ab00932a/",
            customClass: "scale-90"
        },
        {
            id: 15,
            name: "Arshlaan Alam",
            role: "Core Team Member",
            image: "/assets/images/team/arshlaan.jpeg",
            github: "https://github.com/Dr4cule",
            linkedin: "https://www.linkedin.com/in/arshlaan-alam-7816bb362/"
        }
    ];

    return (
        <div className="min-h-screen bg-[#F6F7EB] text-[#353535] selection:bg-[#E94F37]/20 selection:text-[#353535] relative overflow-hidden font-sans">
            <PremiumBackground />
            <Navbar />

            <main className="pt-32 pb-24 relative z-10 px-6 sm:px-8">
                {/* Header */}
                <div className="max-w-7xl mx-auto mb-20 animate-fade-in-up">
                    <Link to="/" className="inline-flex items-center gap-2 text-[#8A897C] hover:text-[#E94F37] transition-colors mb-8 font-medium group text-sm uppercase tracking-wide">
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                    <div className="max-w-3xl">
                        <h2 className="text-[#E94F37] font-bold tracking-widest uppercase text-sm mb-4">The Team</h2>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#353535] leading-tight tracking-tight mb-6">
                            Architects of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E94F37] to-[#353535]">Paradigm.</span>
                        </h1>
                        <p className="text-[#353535]/70 text-lg md:text-xl leading-relaxed max-w-2xl">
                            We are a collective of visionaries, engineers, and educators redefining the landscape of cybersecurity education.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Founder Section - Redesigned as a Feature Card */}
                    <div className="bg-white/80 backdrop-blur-2xl rounded-[2rem] p-8 md:p-12 shadow-2xl ring-1 ring-black/5 mb-24 animate-fade-in-up delay-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E94F37]/5 rounded-full blur-3xl -tranaslate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start relative z-10">
                            <div className="w-full lg:w-1/3 flex-shrink-0 flex justify-center">
                                <div className="relative">
                                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 bg-[#D2D7DF]">
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className="w-full h-full object-cover object-[center_30%]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 text-center lg:text-left">
                                <span className="inline-block py-1 px-3 rounded-full bg-[#E94F37]/10 text-[#E94F37] text-xs font-bold uppercase tracking-wider mb-4">Leadership</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-[#353535] mb-2">{founder.name}</h3>
                                <p className="text-xl text-[#353535]/60 font-medium mb-8">{founder.role}</p>

                                <div className="prose prose-lg text-[#353535]/80 leading-relaxed max-w-none">
                                    <p>
                                        Neil Gogte graduated in Bachelors of Engineering with Electronics & Communication from <strong className="text-[#353535]">Osmania University</strong> in 1985. He went on to pursue his Masters in Computer Science from <strong className="text-[#353535]">IIT Mumbai</strong> in 1987.
                                    </p>
                                    <div className="my-6 pl-6 border-l-4 border-[#E94F37]/30 italic text-[#353535]/70">
                                        "Starting his career with CMC Ltd. and Sun Microsystems in the USA, he played a pivotal role in developing critical ERP interfaces."
                                    </div>
                                    <p>
                                        Currently, Mr. Gogte serves as the <strong className="text-[#353535]">Founder and Chairman</strong> of three premier engineering institutes in Hyderabad: Keshav Memorial Institute of Technology, Neil Gogte Institute of Technology, and Keshav Memorial Engineering College.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Section Title */}
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-black/10 flex-grow"></div>
                        <h2 className="text-2xl font-bold text-[#353535] uppercase tracking-widest">Core Team</h2>
                        <div className="h-px bg-black/10 flex-grow"></div>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {coreTeam.map((member) => (
                            <div key={member.id} className="flex flex-col items-center text-center">
                                {/* Image */}
                                <div className="relative w-44 h-44 mb-6 rounded-full overflow-hidden border-[3px] border-white shadow-md bg-gray-100 ring-1 ring-black/5">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-full h-full object-cover ${member.customClass || ''}`}
                                        loading="lazy"
                                    />
                                </div>

                                {/* Text Info */}
                                <div className="w-full mb-3">
                                    <h4 className="text-xl font-semibold text-[#353535] leading-tight mb-1">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm font-medium text-[#353535]/60 tracking-wide">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center justify-center gap-4">
                                    {member.github && member.github !== '#' && (
                                        <a
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#353535]/40 hover:text-[#E94F37] transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.linkedin && member.linkedin !== '#' && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#353535]/40 hover:text-[#0077b5] transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TeamPage;
