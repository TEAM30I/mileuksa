
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavbarLogo } from './NavbarLogo';
import { DesktopNavMenu } from './DesktopNavMenu';
import { MobileNavMenu } from './MobileNavMenu';
import { navStructure } from './navData';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllMenus, setShowAllMenus] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['intro', 'events', 'location', 'faq'].map(id => document.getElementById(id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // 페이지 이동 시 스크롤 최상단으로 이동
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Nav */}
        {!isMobile && (
          <DesktopNavMenu 
            activeSection={activeSection} 
            showAllMenus={showAllMenus}
            setShowAllMenus={setShowAllMenus}
          />
        )}

        {/* Mobile menu button */}
        {isMobile && (
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "닫기" : "메뉴 열기"}
          >
            {mobileMenuOpen ? (
              <X className="text-temple-dark" size={24} />
            ) : (
              <Menu className="text-temple-dark" size={24} />
            )}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <MobileNavMenu 
          activeSection={activeSection} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
      )}
    </header>
  );
};
