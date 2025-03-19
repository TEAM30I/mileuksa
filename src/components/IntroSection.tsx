
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Search, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Temporary video URL - replace with actual temple video or image
const BG_IMAGE_URL = "https://source.unsplash.com/random/1920x1080/?korean,temple,buddhist";

const IntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeBanner, setActiveBanner] = useState<number | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const bannerMenus = [
    {
      id: 'intro',
      label: '사찰소개',
      description: '미륵사의 역사와, 유래, 전설 그리고 미륵사의 스님들을 소개합니다.',
      subItems: [
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
      description: '미륵사에서 진행되는 모든 법회와 행사 일정을 확인하세요.',
      subItems: [
        { label: '행사일정', path: '/events/calendar' },
        { label: '법문', path: '/events/dharma-talks' },
      ]
    },
    {
      id: 'donation',
      label: '시주',
      description: '미륵사의 불사와 자비행에 동참하실 수 있습니다.',
      path: '/donation'
    },
    {
      id: 'location',
      label: '찾아오시는길',
      description: '미륵사로 오시는 자세한 방법을 안내해 드립니다.',
      path: '/location'
    },
    {
      id: 'notice',
      label: '공지사항',
      description: '미륵사의 소식과 갤러리, 자료실을 확인하세요.',
      subItems: [
        { label: '공지사항', path: '/notice/announcements' },
        { label: 'FAQ', path: '/notice/faq' },
        { label: '미륵사 갤러리', path: '/notice/gallery' },
        { label: '자료실', path: '/notice/resources' },
      ]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implementation for search functionality
    setShowSearch(false);
  };

  // Focus input when search is shown
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <section 
      id="intro" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={BG_IMAGE_URL}
          alt="미륵사 배경"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-temple-dark/50" />
      </div>

      {/* Banners */}
      <div className="absolute top-0 left-0 right-0 z-20">
        {/* Banner 1 */}
        <div 
          className={cn(
            "transition-colors duration-300 py-5",
            activeBanner !== null ? "bg-orange-500" : "bg-transparent"
          )}
          onMouseEnter={() => setActiveBanner(0)}
          onMouseLeave={() => setActiveBanner(null)}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex-1"></div>
            <div className="flex-1 text-center">
              <h1 className="text-white font-bold text-3xl">미륵사</h1>
              <p className="text-white/80 text-sm">대한불교조계종 제14교구 범어사의 말사</p>
            </div>
            <div className="flex-1 flex items-center justify-end space-x-4">
              <a 
                href="https://www.koreanbuddhism.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <span>한국불교조계종</span>
                <ExternalLink size={16} className="ml-1" />
              </a>
              <a 
                href="https://www.beomeosa.co.kr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <span>14교구본사 범어사</span>
                <ExternalLink size={16} className="ml-1" />
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
                  <form 
                    className="flex items-center"
                    onSubmit={handleSearch}
                  >
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
            activeBanner !== null ? "bg-orange-500" : "bg-transparent"
          )}
          onMouseEnter={() => setActiveBanner(0)}
          onMouseLeave={() => setActiveBanner(null)}
        >
          <div className="container mx-auto px-4">
            <ul className="flex items-center justify-center space-x-8">
              {bannerMenus.map((menu, index) => (
                <li 
                  key={menu.id}
                  className="relative"
                  onMouseEnter={() => setActiveBanner(index + 1)}
                  onMouseLeave={() => setActiveBanner(0)}
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
        
        {/* Extended Menu Dropdown */}
        {activeBanner !== null && activeBanner > 0 && (
          <div 
            className="absolute w-full bg-white/90 backdrop-blur-sm shadow-lg z-30 animate-dropdown-down"
            onMouseEnter={() => setActiveBanner(activeBanner)}
            onMouseLeave={() => setActiveBanner(null)}
          >
            <div className="container mx-auto px-4 py-10">
              <div className="flex">
                {/* Left side - Description */}
                <div className="w-1/3 pr-10">
                  <h3 className="text-2xl font-bold text-temple-brown mb-4">
                    {bannerMenus[activeBanner - 1].label}
                  </h3>
                  <p className="text-gray-700">
                    {bannerMenus[activeBanner - 1].description}
                  </p>
                </div>
                
                {/* Right side - Sub Items */}
                <div className="w-2/3 grid grid-cols-4 gap-4">
                  {bannerMenus[activeBanner - 1].subItems ? (
                    bannerMenus[activeBanner - 1].subItems.map((item, i) => (
                      <Link 
                        key={i}
                        to={item.path}
                        className="p-3 hover:bg-temple-beige/20 rounded-lg transition-colors"
                      >
                        <span className="block text-temple-brown font-medium">{item.label}</span>
                      </Link>
                    ))
                  ) : (
                    <Link
                      to={bannerMenus[activeBanner - 1].path || '#'}
                      className="p-3 hover:bg-temple-beige/20 rounded-lg transition-colors"
                    >
                      <span className="block text-temple-brown font-medium">바로가기</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Darken background when dropdown is active */}
        {activeBanner !== null && activeBanner > 0 && (
          <div 
            className="fixed inset-0 bg-black/40 z-10"
            style={{ top: '130px' }}
          />
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-white text-center">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            천년동안 이어진 원효대사의 숨결, 삼국시대 불교문화의 정수를 간직하다
          </h2>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          본래 청정한 마음을 찾아서
        </h1>
        
        <div className="max-w-2xl mx-auto text-lg">
          <p className="mb-2">미륵사는 끊임없는 정진과 변함없는 자비로 깨달음의 길을 밝혀갑니다.</p>
          <p>깊은 수행과 지혜를 바탕으로 참된 평화와 깨달음을 전합니다.</p>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center animate-bounce">
        <span className="text-white mb-2">아래로 스크롤</span>
        <ArrowDown className="text-white" size={24} />
      </div>
    </section>
  );
};

export default IntroSection;
