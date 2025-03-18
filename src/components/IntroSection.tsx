
import React, { useEffect, useRef } from 'react';
import { ArrowDown, MapPin, Calendar, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

// Temporary video URL - replace with actual temple video
const VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-buddhist-temple-4210-large.mp4";

const IntroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const scrollPosition = window.scrollY;
      
      // Parallax effect for video
      const video = section.querySelector('video');
      if (video) {
        const translateY = (scrollPosition - sectionTop) * 0.2;
        video.style.transform = `translateY(${translateY}px)`;
      }

      // Reveal animations for elements
      elementsRef.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          setTimeout(() => {
            el.classList.add('active');
          }, index * 100);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuickLink = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="intro" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-temple-dark/40">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div 
          ref={el => elementsRef.current[0] = el} 
          className="reveal mb-4 inline-block"
        >
          <span className="bg-temple-red/80 backdrop-blur-sm text-temple-beige px-4 py-1 rounded-full text-sm uppercase tracking-wider">
            한국 불교문화의 정수
          </span>
        </div>
        
        <h1 
          ref={el => elementsRef.current[1] = el}
          className="reveal reveal-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          미륵사
          <span className="block text-temple-beige text-2xl md:text-3xl mt-2 font-normal opacity-90">
            고요함 속에서 찾는 평화
          </span>
        </h1>
        
        <p 
          ref={el => elementsRef.current[2] = el}
          className="reveal reveal-delay-2 max-w-2xl mx-auto text-lg md:text-xl text-temple-beige/90 mb-12"
        >
          백제시대부터 이어져온 한국 불교의 역사적 성지인 미륵사에 오신 것을 환영합니다. 
          아름다운 자연과 함께하는 고요한 명상, 그리고 오랜 역사가 담긴 문화유산을 경험해보세요.
        </p>

        {/* Quick Access Buttons */}
        <div 
          ref={el => elementsRef.current[3] = el}
          className="reveal reveal-delay-3 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16"
        >
          {[
            { icon: MapPin, label: '찾아오시는 길', id: 'location' },
            { icon: Calendar, label: '법회 및 행사', id: 'events' },
            { icon: Phone, label: '문의/연락', id: 'faq' }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleQuickLink(item.id)}
              className={cn(
                "glass hover:bg-white/20 transition-all duration-300 py-4 px-6 rounded-lg",
                "text-temple-light flex flex-col items-center justify-center",
                "hover:shadow-lg hover:-translate-y-1"
              )}
            >
              <item.icon className="mb-2" size={24} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Recent Notice */}
        <div 
          ref={el => elementsRef.current[4] = el}
          className="reveal reveal-delay-3 mt-16"
        >
          <div className="glass p-4 md:p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="font-semibold text-lg mb-3">최근 공지사항</h3>
            <div className="space-y-2 text-left">
              <div className="flex gap-4 pb-2 border-b border-white/10">
                <span className="text-temple-beige/70 text-sm">2023.06.15</span>
                <p className="flex-1">여름 템플스테이 참가자 모집 안내</p>
              </div>
              <div className="flex gap-4 pb-2 border-b border-white/10">
                <span className="text-temple-beige/70 text-sm">2023.06.10</span>
                <p className="flex-1">7월 초하루 법회 일정</p>
              </div>
              <div className="flex gap-4">
                <span className="text-temple-beige/70 text-sm">2023.06.05</span>
                <p className="flex-1">미륵사지 유물전시관 임시 휴관 안내</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown className="text-temple-light opacity-80" size={24} />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
