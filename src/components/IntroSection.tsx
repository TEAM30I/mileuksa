import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Search, ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/navbar/Navbar';
import { NavbarDropdown } from '@/components/navbar/NavbarDropdown';
import { navStructure } from '@/components/navbar/navData';

const base_background_dir = "/images/background/";
const bgImages = [
  base_background_dir + 'image_1.png',
  base_background_dir + 'image_2.png',
  base_background_dir + 'image_4.png',
  base_background_dir + 'image_5.png',
];

const IntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeBanner, setActiveBanner] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentBgIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      const threshold = window.innerHeight * 0.75;
      setShowScrollDown(scrollY < threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setShowSearch(false);
  };

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImages[currentBgIndex]}
          alt="미륵사 배경"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-temple-dark/50" />
      </div>

      {/* Navigation Banner */}
      <div className="absolute top-0 left-0 right-0 z-20">
        {!isScrolled ? (
          <>
            <div className="transition-colors duration-300 py-4 md:py-5 bg-transparent">
              <div className="container mx-auto px-4 flex flex-wrap items-center justify-center md:justify-between">
                <h1
                  onClick={() => navigate('/')}
                  className="text-white font-bold text-3xl md:text-5xl cursor-pointer"
                >
                  미륵사
                </h1>
                <div className="flex items-center space-x-3 mt-3 md:mt-3">
                  <a href="https://www.buddhism.or.kr/jongdan/main/index.php" target="_blank" className="text-white text-sm md:text-lg flex items-center">
                    <span>대한불교조계종</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                  <a href="https://www.beomeo.kr/" target="_blank" className="text-white text-sm md:text-lg flex items-center">
                    <span>범어사</span>
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                  <div className="relative">
                    {!showSearch ? (
                      <button onClick={() => setShowSearch(true)} className="text-white">
                        <Search size={18} />
                      </button>
                    ) : (
                      <form onSubmit={handleSearch} className="flex items-center">
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="검색어 입력..."
                          className="outline-none bg-transparent border-b border-white text-white placeholder-white/70 px-2 py-1 w-full md:w-40"
                        />
                        <button type="submit" className="text-white ml-1">
                          <Search size={14} />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent py-3">
              <div className="container mx-auto px-4">
                <ul className="flex flex-wrap items-center justify-center space-x-4 md:space-x-8">
                  {navStructure.map((menu) => (
                    <li key={menu.id} className="text-white text-sm md:text-lg font-bold">
                      <Link to={menu.path}>{menu.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <Navbar forceRender={true} />
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-white text-center">
        <h2 className="text-lg md:text-2xl font-bold mb-2 max-w-xs md:max-w-2xl mx-auto">
          부산 금정산 자락에 스며든 원효대사의 <br/>숨결, 삼국시대 불교문화의 정수를 품다.
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          본래[本來] <br/>청정한 마음을 찾아서
        </h1>
      </div>

      {/* Scroll Down Indicator */}
      {showScrollDown && (
        <div className="absolute bottom-5 left-0 right-0 z-50 flex flex-col items-center animate-bounce">
          <span className="text-white text-sm md:text-base mb-2">아래로 스크롤</span>
          <ArrowDown className="text-white" size={20} />
        </div>
      )}
    </section>
  );
};

export default IntroSection;