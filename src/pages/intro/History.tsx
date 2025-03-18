
import React, { useEffect } from 'react';
import PageLayout from '../../components/PageLayout';
import { History, BookOpen, Clock } from 'lucide-react';

const TempleHistory = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout 
      title="미륵사 역사 및 전설" 
      subtitle="오랜 세월을 이어온 미륵사의 역사와 전설을 소개합니다."
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 reveal">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-temple-brown">
                미륵사는 원효대사가 '미륵 삼부경' 중 하나인 '상생경종오'를 집필한 곳으로 알려져 있습니다.
              </p>
              
              <p>
                또한, 사찰 뒤편의 바위는 스님이 좌선하는 모습과 닮아 '좌선바위'로 불리며, 이 바위에는 코끼리 형상의 바위가 7개 있어 마음이 맑아야 모두 볼 수 있다는 전설이 전해집니다.
              </p>
            </div>
          </div>
          
          <div className="relative mb-16">
            <div className="absolute left-1/2 h-full w-px bg-temple-red/20 transform -translate-x-1/2"></div>
            
            <div className="relative z-10">
              {/* Timeline items */}
              <div className="flex items-center mb-8 reveal">
                <div className="flex-1 pr-8 text-right">
                  <h3 className="text-lg font-semibold text-temple-brown">678년</h3>
                  <p className="text-gray-600">원효대사에 의해 미륵사 창건</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-temple-red flex items-center justify-center flex-shrink-0">
                  <History className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-600">
                    신라시대 원효대사가 미륵불을 모시는 사찰로 창건하였습니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-8 reveal reveal-delay-1">
                <div className="flex-1 pr-8 text-right">
                  <p className="text-gray-600">
                    원효대사가 미륵 삼부경 중 하나인 '상생경종오'를 이곳에서 집필하였습니다.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-temple-red flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-lg font-semibold text-temple-brown">신라시대</h3>
                  <p className="text-gray-600">'상생경종오' 집필</p>
                </div>
              </div>
              
              <div className="flex items-center mb-8 reveal reveal-delay-2">
                <div className="flex-1 pr-8 text-right">
                  <h3 className="text-lg font-semibold text-temple-brown">조선시대</h3>
                  <p className="text-gray-600">여러 차례 중수</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-temple-red flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-600">
                    조선시대에 여러 차례 중수를 거쳤으며, 불교 수행의 중요한 도량으로 자리잡았습니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center mb-8 reveal reveal-delay-3">
                <div className="flex-1 pr-8 text-right">
                  <p className="text-gray-600">
                    범어사의 말사로 지정되어 부산 지역 불교 문화의 중요한 사찰로 자리 잡았습니다.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-temple-red flex items-center justify-center flex-shrink-0">
                  <History className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-lg font-semibold text-temple-brown">근대</h3>
                  <p className="text-gray-600">범어사 말사로 지정</p>
                </div>
              </div>
              
              <div className="flex items-center reveal reveal-delay-4">
                <div className="flex-1 pr-8 text-right">
                  <h3 className="text-lg font-semibold text-temple-brown">현재</h3>
                  <p className="text-gray-600">대한불교조계종 제14교구 사찰</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-temple-red flex items-center justify-center flex-shrink-0">
                  <History className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-600">
                    현재 대한불교조계종 제14교구 범어사의 말사로서 부산 금정구 지역 신앙의 중심지로 역할을 하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              미륵사의 전설
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사에는 다양한 전설이 전해져 내려오고 있습니다:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-temple-brown">좌선바위:</strong> 사찰 뒤편의 바위는 스님이 좌선하는 모습과 닮아 '좌선바위'로 불립니다.
                </li>
                <li>
                  <strong className="text-temple-brown">일곱 코끼리:</strong> 좌선바위에는 코끼리 형상의 바위가 7개 있는데, 마음이 맑은 사람만이 모두 볼 수 있다고 합니다.
                </li>
                <li>
                  <strong className="text-temple-brown">원효대사의 마애불:</strong> 독성각에는 원효대사가 손톱으로 그렸다는 마애 미륵불이 있었다는 전설이 있습니다.
                </li>
                <li>
                  <strong className="text-temple-brown">미륵봉의 정기:</strong> 미륵사 뒤의 미륵봉에는 이 지역의 정기가 모여 있어 기도의 효험이 크다고 전해집니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TempleHistory;
