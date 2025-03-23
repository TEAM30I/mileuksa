import React, { useEffect, useRef } from 'react';
import { MapPin, Bus, Car, Clock, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

// Location information (부산광역시 금정구 기준)
const locationData = {
  address: "부산광역시 금정구 장전동 123-45",
  publicTransport: [
    {
      type: "버스",
      routes: [
        "금정구청 → 금정역 방향 101번, 120번",
        "금정구청 하차 후 도보 5분"
      ]
    },
    {
      type: "지하철",
      routes: [
        "동래역 하차 후 버스 101번 환승 (약 20분 소요)"
      ]
    }
  ],
  parking: {
    available: true,
    location: "금정구청 인근 공영주차장 (무료 주차 가능)",
    fee: "무료 (방문객용)",
    capacity: "승용차 50대, 버스 10대 주차 가능"
  },
  hours: [
    { day: "매일", time: "08:00 - 18:00" },
    { day: "연중무휴", time: "" }
  ],
  contact: {
    phone: "051-987-6543",
    email: "info@geumjeongtemple.kr"
  },
  mapImageUrl: "https://source.unsplash.com/random/900x700/?busan,geumjeong"
};

const InfoCard: React.FC<{ icon: React.ElementType; title: string; children: React.ReactNode }> = ({ 
  icon: Icon, title, children 
}) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-temple-red/10 flex items-center justify-center mr-3">
          <Icon className="text-temple-red" size={20} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

const LocationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      
      // Get all elements with reveal class
      const elements = sectionRef.current.querySelectorAll('.reveal:not(.active)');
      elements.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="location" ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <span className="inline-block bg-temple-red/10 px-4 py-1 rounded-full mb-4">
            <span className="text-temple-red text-sm font-medium">위치 안내</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-temple-dark">찾아오시는 길</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="reveal reveal-delay-1 lg:order-1 order-2">
            <div ref={mapRef} className="relative aspect-w-16 aspect-h-9 min-h-[400px] md:h-full rounded-xl overflow-hidden shadow-lg">
              {/* 실제 지도 API로 대체 가능 */}
              <img 
                src={locationData.mapImageUrl} 
                alt="금정구 미륵사 위치" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-temple-dark/70 to-transparent p-4">
                <div className="flex items-center text-white">
                  <MapPin className="mr-2" size={18} />
                  <span className="text-sm">{locationData.address}</span>
                </div>
              </div>
              
              {/* Map overlay with quick-access buttons */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors" aria-label="Zoom in">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors" aria-label="Zoom out">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="reveal reveal-delay-2 space-y-6 lg:order-2 order-1">
            <InfoCard icon={MapPin} title="주소">
              <p className="text-gray-600">{locationData.address}</p>
              <button className="mt-2 text-temple-red text-sm flex items-center hover:underline">
                길찾기
                <svg className="ml-1" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </InfoCard>

            <InfoCard icon={Bus} title="대중교통">
              <div className="space-y-4">
                {locationData.publicTransport.map((transport, index) => (
                  <div key={index}>
                    <h4 className="font-medium mb-1">{transport.type}</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {transport.routes.map((route, i) => (
                        <li key={i}>{route}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard icon={Car} title="주차 안내">
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">위치:</span> {locationData.parking.location}
                </p>
                <p>
                  <span className="font-medium">요금:</span> {locationData.parking.fee}
                </p>
                <p>
                  <span className="font-medium">수용:</span> {locationData.parking.capacity}
                </p>
              </div>
            </InfoCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard icon={Clock} title="운영 시간">
                <div className="space-y-2 text-sm text-gray-600">
                  {locationData.hours.map((hour, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="font-medium">{hour.day}</span>
                      <span>{hour.time}</span>
                    </div>
                  ))}
                </div>
              </InfoCard>

              <InfoCard icon={Phone} title="연락처">
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">전화:</span> {locationData.contact.phone}
                  </p>
                  <p>
                    <span className="font-medium">이메일:</span> {locationData.contact.email}
                  </p>
                </div>
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;