import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import IntroSection from '@/components/IntroSection';
import Navbar from './navbar';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backgroundImage?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  title, 
  subtitle, 
  children,
  backgroundImage = "/temple-bg.jpg"
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('.reveal:not(.active)');
      elements.forEach((el) => {
        observer.observe(el);
      });
    }
    return () => {
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll('.reveal');
        elements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 홈에서는 IntroSection을 사용, 세부 페이지에서는 수정된 Navbar를 사용 */}
      {isHomePage ? (
        <IntroSection />
      ) : (
        <Navbar />
      )}
      
      <div 
        className="pt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-temple-dark/60 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
              {subtitle && <p className="text-lg max-w-2xl mx-auto text-temple-beige/90">{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
      
      <main ref={contentRef} className="py-12 md:py-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageLayout;
