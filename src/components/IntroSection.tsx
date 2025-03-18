
import React, { useEffect, useRef } from 'react';
import { WeeklyEventsList } from './WeeklyEventsList';

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
      <div className="relative z-10 container mx-auto px-4 py-20 text-white">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left side - Temple info */}
          <div className="w-full md:w-1/2 md:pr-8 text-left mb-8 md:mb-0">
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
              className="reveal reveal-delay-1 text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              금정산 미륵사
              <span className="block text-temple-beige text-2xl mt-2 font-normal opacity-90">
                고요함 속에서 찾는 평화
              </span>
            </h1>
            
            <div 
              ref={el => elementsRef.current[2] = el}
              className="reveal reveal-delay-2 text-temple-beige/90 mb-6 space-y-3"
            >
              <p>
                금정산 미륵사는 부산광역시 금정구 금정산에 위치한 사찰로, 대한불교조계종 제14교구 범어사의 말사입니다. 
              </p>
              <p>
                신라시대인 678년에 원효대사가 창건하였으며, 금정산에서 가장 높은 곳인 해발 약 700m에 자리하고 있습니다. 
              </p>
              <p>
                사찰 뒤편에는 미륵봉이 병풍처럼 둘러싸고 있어 아름다운 자연 경관을 자랑합니다.
              </p>
            </div>
          </div>
          
          {/* Right side - Weekly events */}
          <div className="w-full md:w-2/5">
            <div ref={el => elementsRef.current[3] = el} className="reveal reveal-delay-2">
              <WeeklyEventsList className="w-full rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
