
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TempleInfoProps {
  title: string;
  description: string[];
  imageSrc: string;
}

const TempleInfo: React.FC<TempleInfoProps> = ({ title, description, imageSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="reveal py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={imageSrc} 
                alt="미륵사 전경" 
                className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-temple-dark/40 to-transparent" />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="inline-block bg-temple-red/10 px-4 py-1 rounded-full mb-4">
              <span className="text-temple-red text-sm font-medium">미륵사 소개</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-temple-dark">{title}</h2>
            
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Photo Gallery Item
interface GalleryItemProps {
  imageSrc: string;
  caption: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageSrc, caption }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-xl shadow-lg h-56 md:h-64">
        <img 
          src={imageSrc} 
          alt={caption} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <p className="mt-4 text-center font-serif italic text-temple-dark">{caption}</p>
    </div>
  );
};

// Monk Info Component
interface MonkInfoProps {
  name: string;
  position: string;
  email: string;
  account: string;
  bio: string;
  quote: string;
  imageSrc: string;
}

const MonkInfo: React.FC<MonkInfoProps> = ({ 
  name, position, email, account, bio, quote, imageSrc 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="reveal py-16 md:py-24 bg-temple-beige/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-temple-red/50" />
              <img 
                src={imageSrc} 
                alt={name} 
                className="w-full rounded-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-temple-red/50" />
            </div>
          </div>
          
          <div className="w-full lg:w-3/5">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{name}</h3>
            <p className="text-temple-red mb-4">{position}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <span className="text-sm text-gray-500">이메일</span>
                <p>{email}</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <span className="text-sm text-gray-500">후원계좌</span>
                <p>{account}</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">{bio}</p>
            </div>
            
            <blockquote className="border-l-4 border-temple-red pl-4 italic">
              "{quote}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const TempleInfoSection = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 6; // Total number of gallery items
  const itemsPerSlide = 3; // Number of items visible per slide
  
  useEffect(() => {
    // Auto scroll gallery
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (Math.ceil(totalSlides / itemsPerSlide)));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Sample data
  const galleryItems = [
    { imageSrc: "https://source.unsplash.com/random/900×700/?temple,buddhist", caption: "고요한 아침의 사찰" },
    { imageSrc: "https://source.unsplash.com/random/900×700/?buddhist,statue", caption: "불상의 미소" },
    { imageSrc: "https://source.unsplash.com/random/900×700/?temple,pagoda", caption: "사찰 전경" },
    { imageSrc: "https://source.unsplash.com/random/900×700/?zen,garden", caption: "명상의 정원" },
    { imageSrc: "https://source.unsplash.com/random/900×700/?lantern,temple", caption: "연등회" },
    { imageSrc: "https://source.unsplash.com/random/900×700/?buddhist,ceremony", caption: "불교 의식" },
  ];

  return (
    <div className="bg-white">
      {/* Temple Background Information */}
      <TempleInfo 
        title="천년의 역사를 간직한 미륵사"
        description={[
          "미륵사는 백제 시대에 창건된 우리나라에서 가장 오래된 사찰 중 하나로, 석탑과 금당, 회랑 등 완벽한 가람배치를 갖추고 있습니다.",
          "국보 제11호인 미륵사지 석탑은 백제의 뛰어난 건축기술과 예술성을 보여주는 대표적인 문화재로, 매년 많은 관광객들이 방문하고 있습니다.",
          "사찰 내부에는 다양한 불상과 불교 미술품이 전시되어 있으며, 아름다운 자연환경 속에서 심신의 안정을 찾을 수 있는 명상공간도 마련되어 있습니다."
        ]}
        imageSrc="https://source.unsplash.com/random/900×700/?korean,temple"
      />
      
      {/* Temple Photos Gallery */}
      <div ref={galleryRef} className="py-16 md:py-24 bg-temple-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-temple-red/10 px-4 py-1 rounded-full mb-4">
              <span className="text-temple-red text-sm font-medium">미륵사 갤러리</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-temple-dark">사찰의 사계절</h2>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / Math.ceil(totalSlides / itemsPerSlide))}%)` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full px-4">
                {galleryItems.slice(0, 3).map((item, index) => (
                  <GalleryItem key={index} {...item} />
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-full px-4">
                {galleryItems.slice(3, 6).map((item, index) => (
                  <GalleryItem key={index + 3} {...item} />
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(totalSlides / itemsPerSlide) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors duration-300",
                    currentSlide === index ? "bg-temple-red" : "bg-gray-300"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Monk Information */}
      <MonkInfo 
        name="법현 스님"
        position="미륵사 주지"
        email="beophyun@mireuksa.org"
        account="우리은행 1002-123-456789"
        bio="법현 스님은 20년간의 수행과 연구를 통해 한국 불교의 전통을 계승하고 있습니다. 1990년 출가하여 동국대학교 불교학과를 졸업한 후, 여러 사찰에서 수행하며 불교의 가르침을 실천해왔습니다. 2015년부터 미륵사 주지로 부임하여 사찰의 전통을 계승하고 현대인들에게 불교의 지혜를 전하는 데 힘쓰고 있습니다."
        quote="마음의 평화를 찾는 길은 자신 안에 있습니다. 명상과 자기성찰을 통해 내면의 지혜를 발견하세요."
        imageSrc="https://source.unsplash.com/random/900×700/?buddhist,monk"
      />
    </div>
  );
};

export default TempleInfoSection;
