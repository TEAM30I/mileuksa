
import React, { useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const DonationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-temple-beige/10 reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-temple-red/10 px-4 py-1 rounded-full mb-4">
            <span className="text-temple-red text-sm font-medium flex items-center justify-center">
              <Heart size={16} className="mr-2" />
              시주 안내
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-temple-dark">미륵사 불사와 자비행에 동참해 주세요</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-temple-red/10 p-4">
              <h3 className="text-xl font-bold text-temple-red">산신각 칠성각 대탱화불사</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>산신각 칠성각 설판시주</span>
                  <span className="font-bold text-temple-red">100만원</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>산신각 칠성각 개인시주</span>
                  <span className="font-bold text-temple-red">10만원</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>산신각 칠성각 가족시주</span>
                  <span className="font-bold text-temple-red">30만원 (가족4명까지)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-temple-brown/10 p-4">
              <h3 className="text-xl font-bold text-temple-brown">각종 기도 및 법회</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>영가천도</span>
                  <span className="font-bold text-temple-brown">10만원 (1위)</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>백일기도</span>
                  <span className="font-bold text-temple-brown">5만원</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>생일축원</span>
                  <span className="font-bold text-temple-brown">3만원</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-temple-gold/10 p-4">
              <h3 className="text-xl font-bold text-temple-gold">계좌 안내</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-500 text-sm">은행명</h4>
                  <p className="font-medium">우체국</p>
                </div>
                <Separator />
                <div>
                  <h4 className="text-gray-500 text-sm">계좌번호</h4>
                  <p className="font-medium">502724 02 030671</p>
                </div>
                <Separator />
                <div>
                  <h4 className="text-gray-500 text-sm">예금주</h4>
                  <p className="font-medium">미륵사</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-temple-red hover:bg-temple-red/90">
            <Link to="/donation">
              <Heart className="mr-2" size={18} />
              자세한 시주 안내 보기
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
