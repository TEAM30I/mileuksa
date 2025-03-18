
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { id: 'intro', label: '사찰소개' },
  { id: 'events', label: '법회/행사' },
  { id: 'location', label: '찾아오시는길' },
  { id: 'faq', label: '문의(FAQ)' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect which section is in view for active state
      const sections = navLinks.map(link => document.getElementById(link.id));
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      scrolled 
        ? "bg-white/80 backdrop-blur-md shadow-md py-2" 
        : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className={cn(
            "font-serif text-2xl md:text-3xl font-bold transition-all duration-500",
            scrolled ? "text-temple-red" : "text-temple-light"
          )}
          onClick={() => scrollToSection('intro')}
        >
          미륵사
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "nav-link relative px-1 py-2 transition-colors duration-300",
                activeSection === link.id 
                  ? "text-temple-red" 
                  : scrolled ? "text-temple-dark hover:text-temple-red" : "text-temple-light hover:text-temple-beige",
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-temple-red after:transform after:scale-x-0 after:transition-transform after:duration-300",
                activeSection === link.id && "after:scale-x-100"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={scrolled ? "text-temple-dark" : "text-temple-light"} size={24} />
          ) : (
            <Menu className={scrolled ? "text-temple-dark" : "text-temple-light"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-temple-beige animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "nav-link text-left py-2 transition-colors duration-300",
                  activeSection === link.id ? "text-temple-red font-medium" : "text-temple-dark"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
