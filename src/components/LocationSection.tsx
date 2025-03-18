
import React, { useEffect, useRef } from 'react';
import { MapPin, Bus, Car, Clock, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

// Location information
const locationData = {
  address: "전라북도 익산시 금마면 미륵사지로 362",
  publicTransport: [
    {
      type: "버스",
      routes: ["익산시내버스 41, 60, 70번", "금마 시외버스 터미널에서 도보 15분"]
    },
    {
      type: "기차",
      routes: ["익산역에서 택시로 20분 거리 (약 15km)", "익산역에서 41번 버스 이용 가능"]
    }
  ],
  parking: {
    available: true,
    location: "미륵사지 주차장 (사찰 정문 앞)",
    fee: "무료 (방문객용)",
    capacity: "승용차 100대, 버스 20대 주차 가능"
  },
  hours: [
    { day: "화요일 - 일요일", time: "09:00 - 17:00 (3월 - 10월)" },
    { day: "화요일 - 일요일", time: "09:00 - 16:30 (11월 - 2월)" },
    { day: "월요일", time: "휴관" }
  ],
  contact: {
    phone: "063-123-4567",
    email: "info@mireuksa.org"
  },
  mapImageUrl: "https://source.unsplash.com/random/900×700/?map"
};

// Helper components
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
            <div ref={mapRef} className="relative aspect-square md:aspect-auto md:h-full rounded-xl overflow-hidden shadow-lg">
              {/* This would be replaced with an actual map API integration */}
              <img 
                src={locationData.mapImageUrl} 
                alt="미륵사 위치" 
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
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium block">전화:</span>
                    <a href={`tel:${locationData.contact.phone}`} className="hover:text-temple-red">
                      {locationData.contact.phone}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium block">이메일:</span>
                    <a href={`mailto:${locationData.contact.email}`} className="hover:text-temple-red">
                      {locationData.contact.email}
                    </a>
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
