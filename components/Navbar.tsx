import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PillNav from './PillNav';
import { Shield } from 'lucide-react';
import logo from '../assets/images/logo1.jpeg';

interface NavbarProps {
  hideOnHero?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ hideOnHero = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: isHomePage ? "#about" : "/#about", label: "About" },
    { href: isHomePage ? "#benefits" : "/#benefits", label: "Why Join" },
    { href: isHomePage ? "#collaborations" : "/#collaborations", label: "Partners" },
    { href: isHomePage ? "#contact" : "/#contact", label: "Contact" },
    { href: isHomePage ? "#faq" : "/#faq", label: "FAQ" },
    { href: "/team", label: "Team" },
  ];

  return (
    <PillNav
      items={navLinks}
      logo={logo}
      logoAlt="Cyberparadigm Logo"
      baseColor="#353535"
      pillColor="#D55F5A" // Terracotta
      hoveredPillTextColor="#ffffff"
      className="font-sans"
      hideOnHero={hideOnHero}
    />
  );
};

export default Navbar;

