import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navStructure } from './navData';
import { useIsMobile } from '@/hooks/use-mobile';
import { NavbarDropdown } from './NavbarDropdown';

interface NavbarProps {
  forceRender?: boolean;
}

export const Navbar = ({ forceRender = false }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMobile = useIsMobile();

  // 홈에서는 forceRender가 true가 아니면 Navbar를 렌더링하지 않음
  if (!forceRender && isHomePage) {
    return null;
  }

  const [activeBanner, setActiveBanner] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 부모 wrapper 전체에 onMouseLeave/Enter 적용
  const handleWrapperMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setActiveBanner(null);
    }, 300);
  };

  const handleWrapperMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  // 개별 메뉴에 대한 onMouseEnter
  const handleMouseEnter = (index: number) => {
    setActiveBanner(index);
  };

  // 드롭다운 내부에 마우스가 들어왔을 때 타이머 취소 함수
  const cancelClose = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {!isMobile && (
        <div
          className="bg-orange-500 transition-colors duration-300 py-3"
          onMouseEnter={handleWrapperMouseEnter}
          onMouseLeave={handleWrapperMouseLeave}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            {/* 좌측: 로고 및 외부 링크 */}
            <div className="flex items-center space-x-4">
              <div
                onClick={() => navigate('/')}
                className="text-white font-bold text-4xl md:text-5xl cursor-pointer"
              >
                미륵사
              </div>
              <a
                href="https://www.koreanbuddhism.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <span>한국불교조계종</span>
                <ExternalLink size={16} className="ml-1 font-bold" />
              </a>
              <a
                href="https://www.beomeosa.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-white/80 transition-colors"
              >
                <span>범어사</span>
                <ExternalLink size={16} className="ml-1 font-bold" />
              </a>
            </div>
            {/* 우측: 네비게이션 메뉴 */}
            <ul className="flex items-center justify-center space-x-8">
              {navStructure.map((item, index) => (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index + 1)}
                  onMouseLeave={handleWrapperMouseLeave}
                >
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="text-white font-bold text-lg hover:text-white/80 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white font-bold text-lg cursor-pointer">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {activeBanner !== null && activeBanner > 0 && (
            <NavbarDropdown
              activeIndex={activeBanner}
              onClose={() => setActiveBanner(null)}
              cancelClose={cancelClose}
            />
          )}
          {activeBanner !== null && activeBanner > 0 && (
            <div
              className="fixed inset-0 bg-black/40 z-10"
              style={{ top: '130px' }}
              onClick={() => setActiveBanner(null)}
            />
          )}
        </div>
      )}
      {isMobile && (
        <div className="bg-orange-500 flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-50">
          <div onClick={() => navigate('/')} className="text-white font-bold text-3xl cursor-pointer">
            미륵사
          </div>
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-white"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-temple-beige animate-dropdown-down overflow-y-auto max-h-[80vh]">
              <nav className="container mx-auto px-4 py-4 flex flex-col">
                {navStructure.map((item) => (
                  <div key={item.id} className="py-2 border-b border-gray-100">
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="block py-2 font-medium text-temple-dark"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="py-2 font-medium text-temple-dark">
                        {item.label}
                      </div>
                    )}
                    {item.subMenu && (
                      <div className="pl-4 pt-1 pb-2 space-y-1">
                        {item.subMenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block py-1 text-sm text-gray-600 hover:text-temple-red"
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
