
import React, { useEffect, useState } from 'react';
import IntroSection from '../components/IntroSection';
import TempleInfoSection from '../components/TempleInfoSection';
import EventsSection from '../components/EventsSection';
import LocationSection from '../components/LocationSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { UpcomingEventsPopup } from '../components/UpcomingEventsPopup';
import DonationSection from '../components/DonationSection';

const Index = () => {
  const [showEventsPopup, setShowEventsPopup] = useState(false);
  const [eventsPopupClosed, setEventsPopupClosed] = useState(false);
  
  useEffect(() => {
    // Show events popup after 2 seconds if not manually closed
    if (!eventsPopupClosed) {
      const eventsTimer = setTimeout(() => {
        setShowEventsPopup(true);
      }, 2000);
      
      return () => clearTimeout(eventsTimer);
    }
    
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
  }, [eventsPopupClosed]);

  const handleEventsPopupClose = () => {
    setShowEventsPopup(false);
    setEventsPopupClosed(true); // Mark as manually closed
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main>
        {/* Hero/Intro Section */}
        <IntroSection />
        
        {/* Temple Info Section (with gallery and monk info) */}
        <TempleInfoSection />
        
        {/* Donation Section */}
        <DonationSection />
        
        {/* Events/Program Section */}
        <EventsSection />
        
        {/* Location Section */}
        <LocationSection />
        
        {/* FAQ & Contact Section */}
        <FAQSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Events Popup */}
      <UpcomingEventsPopup
        open={showEventsPopup}
        onOpenChange={handleEventsPopupClose}
      />
    </div>
  );
};

export default Index;
