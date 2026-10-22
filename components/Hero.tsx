
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_HEADLINES } from '../constants';

// Import local images
import hero1 from '../assets/images/group_pic_hero_.jpg';
import hero2 from '../assets/images/hero-2.jpeg';
import hero3 from '../assets/images/hero-3.jpeg';
import hero4 from '../assets/images/abhinav.jpg';
import hero5 from '../assets/images/arslan.jpg';


import hero6 from '../assets/images/new.jpg';


// Slideshow images with captions
const SLIDESHOW_IMAGES = [
  {
    url: hero1,
    caption: "The Minds Behind Cyber Paradigm",
    subcaption: "Learn real-world web security through practical labs",
    objectPosition: "75% 25%"
  },
  {
    url: hero2, // Using hero-3 as team/workshop photo
    caption: "Code review / setup",
    subcaption: "Dedicated mentors driving cybersecurity education",
    objectPosition: "80% 30%"
  },
  {
    url: hero5, // Using hero-5 as workshop full photo
    caption: "Inside The Workspace",
    subcaption: "Large-scale events with hands-on learning experiences",
    objectPosition: "75% 20%"
  },
  {
    url: hero3,
    caption: "Our Passionate Team",
    subcaption: "Simulating real-world cyber attacks",
    objectPosition: "right center"
  },
  {
    url: hero4,
    caption: "PATH TO MASTERY",
    subcaption: "Growing together in cybersecurity",
    objectPosition: "80% 20%"
  },
  {
    url: hero6,
    caption: "Cyber Security Innovation",
    subcaption: "Building the future of digital defense",
    objectPosition: "center 40%"
  }
];

const Hero: React.FC = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideFade, setSlideFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);





  const [scrollY, setScrollY] = useState(0);

  // Scroll listener for blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Headline rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setHeadlineIndex((prev) => (prev + 1) % HERO_HEADLINES.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, []);



  // Slideshow auto-advance
  // Slideshow auto-advance
  useEffect(() => {
    if (isPaused) return;

    // First image (index 0) stays for 5 seconds, others for 2 seconds
    const duration = slideIndex === 0 ? 5000 : 2000;

    const timer = setTimeout(() => {
      setSlideFade(false);
      setTimeout(() => {
        setSlideIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
        setSlideFade(true);
      }, 400);
    }, duration);

    return () => clearTimeout(timer);
  }, [isPaused, slideIndex]);

  const goToSlide = useCallback((index: number) => {
    if (index === slideIndex) return;
    setSlideFade(false);
    setTimeout(() => {
      setSlideIndex(index);
      setSlideFade(true);
    }, 400);
  }, [slideIndex]);

  const nextSlide = useCallback(() => {
    goToSlide((slideIndex + 1) % SLIDESHOW_IMAGES.length);
  }, [slideIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((slideIndex - 1 + SLIDESHOW_IMAGES.length) % SLIDESHOW_IMAGES.length);
  }, [slideIndex, goToSlide]);

  return (
    <section
      className="relative h-screen w-full flex items-center overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-screen Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {SLIDESHOW_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === slideIndex ? (slideFade ? 'opacity-100' : 'opacity-0') : 'opacity-0'
              }`}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover scale-105 animate-slow-zoom will-change-transform"
              style={{ objectPosition: image.objectPosition || 'center center' }}
            />
          </div>
        ))}

        {/* Cyber Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        {/* Dark Gradient Overlay for text readability - Optimized */}
        <div className={`absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 transition-opacity duration-700 ease-in-out ${slideIndex === 0 ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 transition-opacity duration-700 ease-in-out ${slideIndex === 0 ? 'opacity-0' : 'opacity-100'}`} />

        {/* Subtle overlay specifically for the first slide */}
        <div className={`absolute inset-0 bg-black/25 transition-opacity duration-700 ease-in-out ${slideIndex === 0 ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <div
          className="max-w-2xl transition-opacity duration-1000 opacity-100"
          style={{
            filter: `blur(${Math.min(scrollY / 40, 10)}px)`,
            willChange: 'filter'
          }}
        >

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white/90 uppercase tracking-widest mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
            K-Hub's Cybersecurity Vertical
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl leading-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
          >
            Pioneering the Future of Cybersecurity Innovation
          </h1>

          {/* Subheadline */}
          <p
            className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-medium mb-10 drop-shadow-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            Cyberparadigm is where groundbreaking ideas meet industry expertise. We're building the next generation of cybersecurity professionals
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
          >
            <a href="https://letushack.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-8 py-4 rounded-xl font-bold text-base transition-all active:scale-95 shadow-2xl hover:-translate-y-0.5 hover-scale hover-glow">
              Explore LetUsHack
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/contact?type=company" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-base transition-all active:scale-95 hover:-translate-y-0.5 hover-scale">
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Current Slide Caption - Bottom Right */}
        <div
          className={`absolute bottom-24 right-6 text-right hidden lg:block transition-all duration-500 ${slideFade ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          style={{
            filter: `blur(${Math.min(scrollY / 40, 10)}px)`,
            willChange: 'filter'
          }}
        >
          <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Now Showing</p>
          <h3 className="text-white text-2xl font-bold drop-shadow-lg">
            {SLIDESHOW_IMAGES[slideIndex].caption}
          </h3>
          <p className="text-white/70 text-base mt-1">
            {SLIDESHOW_IMAGES[slideIndex].subcaption}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDESHOW_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === slideIndex
              ? 'bg-white w-10'
              : 'bg-white/40 w-2 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2 opacity-60 z-20">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Scroll</span>
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1">
          <div className="w-1 h-1 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Subtle Animated CSS for zoom effect */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 15s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
