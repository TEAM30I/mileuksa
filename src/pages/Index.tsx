
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import IntroSection from '../components/IntroSection';
import TempleInfoSection from '../components/TempleInfoSection';
import EventsSection from '../components/EventsSection';
import LocationSection from '../components/LocationSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import { DonationPopup } from '../components/DonationPopup';
import { UpcomingEventsPopup } from '../components/UpcomingEventsPopup';
import { WeeklyEventsList } from '../components/WeeklyEventsList';

const Index = () => {
  const [showDonationPopup, setShowDonationPopup] = useState(false);
  const [showEventsPopup, setShowEventsPopup] = useState(false);
  const [donationPopupClosed, setDonationPopupClosed] = useState(false);
  
  useEffect(() => {
    // Show donation popup after 2 seconds if not manually closed
    if (!donationPopupClosed) {
      const donationTimer = setTimeout(() => {
        setShowDonationPopup(true);
      }, 2000);
      
      return () => clearTimeout(donationTimer);
    }
    
    // Show events popup after 5 seconds if donation popup is closed
    const eventsTimer = setTimeout(() => {
      if (!showDonationPopup) {
        setShowEventsPopup(true);
      }
    }, 5000);
    
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
      clearTimeout(eventsTimer);
    };
  }, [showDonationPopup, donationPopupClosed]);

  const handleDonationPopupClose = () => {
    setShowDonationPopup(false);
    setDonationPopupClosed(true); // Mark as manually closed
  };

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
      
      {/* Popups */}
      <DonationPopup 
        open={showDonationPopup} 
        onOpenChange={handleDonationPopupClose}
        onViewEvents={() => {
          setShowDonationPopup(false);
          setDonationPopupClosed(true);
          setShowEventsPopup(true);
        }}
      />
      
      <UpcomingEventsPopup
        open={showEventsPopup}
        onOpenChange={setShowEventsPopup}
      />
    </div>
  );
};

export default Index;
