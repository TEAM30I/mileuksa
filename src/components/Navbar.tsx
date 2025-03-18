
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

// Top-level navigation structure
const navStructure = [
  { 
    id: 'intro', 
    label: '사찰소개',
    subMenu: [
      { label: '미륵사 소개', path: '/intro/about' },
      { label: '소개 및 유래', path: '/intro/origin' },
      { label: '역사 및 전설', path: '/intro/history' },
      { label: '사찰안내', path: '/intro/facilities' },
      { label: '주지스님 인사말', path: '/intro/message' },
      { label: '미륵사 스님', path: '/intro/monks' },
    ]
  },
  { 
    id: 'events', 
    label: '법회/행사',
    subMenu: [
      { label: '행사일정', path: '/events/calendar' },
      { label: '법문', path: '/events/dharma-talks' },
    ]
  },
  { 
    id: 'donation', 
    label: '시주',
    path: '/donation'
  },
  { 
    id: 'location', 
    label: '찾아오시는길',
    path: '/location'
  },
  { 
    id: 'notice', 
    label: '공지사항',
    subMenu: [
      { label: '공지사항', path: '/notice/announcements' },
      { label: 'FAQ', path: '/notice/faq' },
      { label: '미륵사 갤러리', path: '/notice/gallery' },
      { label: '자료실', path: '/notice/resources' },
    ]
  }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect which section is in view for active state
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
    
    // Scroll to top on location change
    window.scrollTo(0, 0);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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
        ? "bg-white shadow-md py-2" 
        : "bg-white py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className={cn(
            "font-serif text-2xl md:text-3xl font-bold transition-all duration-500 cursor-pointer",
            "text-temple-red"
          )}
          onClick={() => window.location.href = '/'}
        >
          미륵사
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-2">
            {navStructure.map((item) => (
              <li key={item.id} className="group relative">
                {item.path ? (
                  <Link 
                    to={item.path}
                    className={cn(
                      "px-3 py-2 flex items-center transition-colors duration-300",
                      activeSection === item.id ? "text-temple-red" : "text-temple-dark hover:text-temple-red"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div 
                    className={cn(
                      "px-3 py-2 flex items-center cursor-pointer transition-colors duration-300",
                      activeSection === item.id ? "text-temple-red" : "text-temple-dark hover:text-temple-red"
                    )}
                  >
                    {item.label}
                  </div>
                )}
                
                {item.subMenu && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    <ul>
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.path}>
                          <Link 
                            to={subItem.path}
                            className="block px-4 py-2 text-temple-dark hover:bg-temple-beige/20 hover:text-temple-red transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-temple-dark" size={24} />
          ) : (
            <Menu className="text-temple-dark" size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-temple-beige animate-slide-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navStructure.map((item) => (
              <div key={item.id} className="py-2 border-b border-gray-100">
                {item.path ? (
                  <Link 
                    to={item.path}
                    className={cn(
                      "block py-2",
                      activeSection === item.id ? "text-temple-red font-medium" : "text-temple-dark"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className={cn(
                    "py-2",
                    activeSection === item.id ? "text-temple-red font-medium" : "text-temple-dark"
                  )}>
                    {item.label}
                  </div>
                )}
                
                {item.subMenu && (
                  <div className="pl-4 pt-1 pb-2 space-y-1">
                    {item.subMenu.map((subItem) => (
                      <Link 
                        key={subItem.path}
                        to={subItem.path}
                        className="block py-1.5 text-sm text-gray-600 hover:text-temple-red"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
