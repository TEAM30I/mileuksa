
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

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
    
    // Scroll to top on component mount (page load)
    window.scrollTo(0, 0);
    
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
            "font-serif text-2xl md:text-3xl font-bold transition-all duration-500 cursor-pointer",
            scrolled ? "text-temple-red" : "text-temple-light"
          )}
          onClick={() => scrollToSection('intro')}
        >
          미륵사
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navStructure.map((item) => (
                item.subMenu ? (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuTrigger 
                      className={cn(
                        "px-1 py-2 transition-colors duration-300 bg-transparent",
                        activeSection === item.id 
                          ? "text-temple-red" 
                          : scrolled ? "text-temple-dark hover:text-temple-red" : "text-temple-light hover:text-temple-beige"
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[220px]">
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.path}>
                            <NavigationMenuLink asChild>
                              <Link 
                                to={subItem.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.label}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink asChild>
                      <Link 
                        to={item.path}
                        className={cn(
                          "px-1 py-2 transition-colors duration-300 cursor-pointer",
                          activeSection === item.id 
                            ? "text-temple-red" 
                            : scrolled ? "text-temple-dark hover:text-temple-red" : "text-temple-light hover:text-temple-beige"
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navStructure.map((item) => (
              <div key={item.id} className="py-2 border-b border-gray-100">
                {item.subMenu ? (
                  <Popover>
                    <PopoverTrigger className={cn(
                      "flex justify-between items-center w-full py-2",
                      activeSection === item.id ? "text-temple-red font-medium" : "text-temple-dark"
                    )}>
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </PopoverTrigger>
                    <PopoverContent className="w-screen max-w-[300px] p-0">
                      <div className="grid gap-1 p-2">
                        {item.subMenu.map((subItem) => (
                          <Link 
                            key={subItem.path}
                            to={subItem.path}
                            className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link 
                    to={item.path}
                    className={cn(
                      "block py-2",
                      activeSection === item.id ? "text-temple-red font-medium" : "text-temple-dark"
                    )}
                  >
                    {item.label}
                  </Link>
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
