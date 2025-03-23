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

  const bannerMenus = navStructure; // navStructure를 그대로 사용

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setShowSearch(false);
  };

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

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setActiveBanner(null);
    }, 300);
  };

  const handleMouseEnter = (index: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActiveBanner(index);
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
          className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-temple-dark/50" />
      </div>

      {/* Banners */}
      <div className="absolute top-0 left-0 right-0 z-20">
        {!isScrolled ? (
          <>
            {/* Banner 1 */}
            <div
              className={cn(
                "transition-colors duration-300 py-5",
                activeBanner !== null ? "bg-[#D7772D]" : "bg-transparent"
              )}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex-1"></div>
                <div className="flex-1 text-center">
                  <h1
                    onClick={() => navigate('/')}
                    className="text-white font-bold text-5xl md:text-6xl cursor-pointer"
                  >
                    미륵사
                  </h1>
                  <p className="text-white/80 font-bold text-sm mt-4 md:mt-6">
                    대한불교조계종 제 14교구 본사 범어사의 말사
                  </p>
                </div>
                <div className="flex-1 flex items-center justify-end space-x-4">
                  <a
                    href="https://www.buddhism.or.kr/jongdan/main/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-white/80 transition-colors"
                  >
                    <span>대한불교조계종</span>
                    <ExternalLink size={16} className="ml-1 font-bold" />
                  </a>
                  <a
                    href="https://www.beomeo.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-white/80 transition-colors"
                  >
                    <span>범어사</span>
                    <ExternalLink size={16} className="ml-1 font-bold" />
                  </a>
                  <div className="relative">
                    {!showSearch ? (
                      <button
                        onClick={() => setShowSearch(true)}
                        className="text-white hover:text-white/80"
                      >
                        <Search size={20} />
                      </button>
                    ) : (
                      <form onSubmit={handleSearch} className="flex items-center">
                        <input
                          ref={searchInputRef}
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="검색어 입력..."
                          className="outline-none bg-transparent border-b border-white text-white placeholder-white/70 px-2 py-1 w-40"
                          onBlur={() => !searchQuery && setShowSearch(false)}
                        />
                        <button type="submit" className="text-white ml-1">
                          <Search size={16} />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Banner 2 */}
            <div
              className={cn(
                "transition-colors duration-300 py-3",
                activeBanner !== null ? "bg-[#D7772D]" : "bg-transparent"
              )}
            >
              <div className="container mx-auto px-4">
                <ul className="flex items-center justify-center space-x-8">
                  {bannerMenus.map((menu, index) => (
                    <li
                      key={menu.id}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(index + 1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {menu.path ? (
                        <Link
                          to={menu.path}
                          className="text-white font-bold text-lg hover:text-white/80 transition-colors"
                        >
                          {menu.label}
                        </Link>
                      ) : (
                        <span className="text-white font-bold text-lg cursor-pointer">
                          {menu.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Extended Dropdown (reused from NavbarDropdown) */}
            {activeBanner !== null && activeBanner > 0 && (
              <NavbarDropdown
                activeIndex={activeBanner}
                onClose={() => setActiveBanner(null)}
                cancelClose={() => {
                  if (timerRef.current) {
                    clearTimeout(timerRef.current);
                    timerRef.current = null;
                  }
                }}
              />
            )}
          </>
        ) : (
          // 스크롤 시, forceRender된 Navbar (Banner3 스타일) 렌더링
          <Navbar forceRender={true} />
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-white text-center">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            부산 금정산 자락에 스며든 원효대사의 숨결, 삼국시대 불교문화의 정수를 품다.
          </h2>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          "본래[本來] 청정한 마음을 찾아서"
        </h1>
        <div className="max-w-2xl mx-auto text-lg">
          <p className="mb-2 font-bold">
            미륵사는 끊임없는 정진과 변함없는 자비로 깨달음의 길을 밝혀갑니다.
          </p>
          <p className="mb-2 font-bold">
            깊은 수행과 지혜를 바탕으로 참된 평화와 깨달음을 전합니다.
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator를 배경 이미지 맨 하단에 배치 */}
      {showScrollDown && (
        <div className="absolute bottom-0 left-0 right-0 z-50 flex flex-col items-center animate-bounce">
          <span className="text-white mb-2">아래로 스크롤</span>
          <ArrowDown className="text-white" size={24} />
        </div>
      )}
    </section>
  );
};

export default IntroSection;