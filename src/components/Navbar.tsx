
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

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

// Collect all submenu items for the unified dropdown
const allSubMenuItems = navStructure.reduce((acc, item) => {
  if (item.subMenu) {
    return [...acc, { category: item.label, items: item.subMenu }];
  }
  return acc;
}, [] as { category: string; items: { label: string; path: string }[] }[]);

const Navbar = () => {
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
      scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className={cn("font-serif text-2xl md:text-3xl font-bold transition-all duration-500 cursor-pointer", "text-temple-red")}
          onClick={() => window.location.href = '/'}
        >
          미륵사
        </div>

        {/* Desktop Nav */}
        <nav 
          className="hidden md:flex items-center space-x-4"
        >
          <ul className="flex space-x-2">
            {navStructure.map((item) => (
              <li 
                key={item.id} 
                className="group relative"
                onMouseEnter={() => setShowAllMenus(true)}
                onMouseLeave={() => setShowAllMenus(false)}
              >
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
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
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
      </div>

      {/* 통합 드롭다운(데스크탑) */}
      {!isMobile && (
        <div 
          className={cn(
            "absolute top-full left-0 w-full bg-white shadow-lg border-t border-temple-beige",
            showAllMenus ? "animate-dropdown-down opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none animate-dropdown-up"
          )}
          onMouseEnter={() => setShowAllMenus(true)}
          onMouseLeave={() => setShowAllMenus(false)}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-5 gap-4">
              {navStructure.map((category) => (
                <div key={category.id} className="p-2">
                  {category.subMenu ? (
                    <>
                      <h3 className="font-serif font-medium text-lg mb-2 text-temple-brown border-b pb-1">{category.label}</h3>
                      <ul className="space-y-1">
                        {category.subMenu.map((subItem) => (
                          <li key={subItem.path}>
                            <Link 
                              to={subItem.path}
                              className="block py-1 text-temple-dark hover:bg-temple-beige/20 hover:text-temple-red transition-colors rounded px-2"
                              onClick={() => setShowAllMenus(false)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : category.path ? (
                    <div className="h-full flex items-center">
                      <Link 
                        to={category.path}
                        className="block py-1 text-temple-brown font-medium hover:text-temple-red transition-colors text-lg"
                        onClick={() => setShowAllMenus(false)}
                      >
                        {category.label}
                      </Link>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-temple-beige animate-dropdown-down overflow-y-auto max-h-[80vh]">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            {navStructure.map((item) => (
              <div key={item.id} className="py-2 border-b border-gray-100">
                {item.path ? (
                  <Link 
                    to={item.path}
                    className={cn(
                      "block py-2 font-medium",
                      activeSection === item.id ? "text-temple-red" : "text-temple-dark"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className={cn(
                    "py-2 font-medium",
                    activeSection === item.id ? "text-temple-red" : "text-temple-dark"
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
                        onClick={() => setMobileMenuOpen(false)}
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
