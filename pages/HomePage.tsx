
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import FeaturedProduct from '../components/FeaturedProduct';
import Announcement from '../components/Announcement';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Collaborations from '../components/Collaborations';
import GetInvolved from '../components/GetInvolved';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ContentSection from '../components/ContentSection';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-ivory text-[#353535] selection:bg-terracotta/20 selection:text-terracotta">
            <Navbar />
            <main>
                <Hero />
                <Announcement />
                <ValueProposition />
                <FeaturedProduct />
                <About />
                <Benefits />
                <Collaborations />
                <GetInvolved />
                <FAQ />
                <ContentSection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
