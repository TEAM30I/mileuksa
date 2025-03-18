
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import IntroSection from '../components/IntroSection';
import TempleInfoSection from '../components/TempleInfoSection';
import EventsSection from '../components/EventsSection';
import LocationSection from '../components/LocationSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Revealing elements on scroll
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero/Intro Section */}
        <IntroSection />
        
        {/* Temple Info Section (with gallery and monk info) */}
        <TempleInfoSection />
        
        {/* Events/Program Section */}
        <EventsSection />
        
        {/* Location Section */}
        <LocationSection />
        
        {/* FAQ & Contact Section */}
        <FAQSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
