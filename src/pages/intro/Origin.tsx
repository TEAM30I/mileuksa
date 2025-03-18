
import React, { useEffect } from 'react';
import PageLayout from '../../components/PageLayout';
import { Building, Landmark, MapPin } from 'lucide-react';

const TempleOrigin = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout 
      title="미륵사 소개 및 유래" 
      subtitle="금정산 미륵사의 역사와 유래에 대해 알아보세요."
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 reveal">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-temple-brown">
                금정산 미륵사는 부산광역시 금정구 금정산에 위치한 사찰로, 대한불교조계종 제14교구 범어사의 말사입니다.
              </p>
              
              <p>
                신라시대인 678년에 원효대사가 창건하였으며, 금정산에서 가장 높은 곳인 해발 약 700m에 자리하고 있습니다. 
                사찰 뒤편에는 미륵봉이 병풍처럼 둘러싸고 있어 아름다운 자연 경관을 자랑합니다.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Building className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">창건 유래</h3>
              </div>
              <p className="text-gray-600">
                미륵사는 원효대사가 '미륵 삼부경' 중 하나인 '상생경종오'를 집필한 곳으로 알려져 있습니다. 
                미륵불을 모시고 미래불교의 가르침을 이어가는 사찰로 창건되었습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Landmark className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">사찰 전설</h3>
              </div>
              <p className="text-gray-600">
                사찰 뒤편의 바위는 스님이 좌선하는 모습과 닮아 '좌선바위'로 불리며, 
                이 바위에는 코끼리 형상의 바위가 7개 있어 마음이 맑아야 모두 볼 수 있다는 전설이 전해집니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-2">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">위치적 특징</h3>
              </div>
              <p className="text-gray-600">
                금정산에서 가장 높은 곳인 해발 약 700m에 자리하고 있으며, 
                사찰 뒤편에는 미륵봉이 병풍처럼 둘러싸고 있어 아름다운 자연 경관을 자랑합니다.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="reveal">
              <img 
                src="/placeholder.svg" 
                alt="미륵사 전경" 
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
            
            <div className="flex flex-col justify-center reveal reveal-delay-1">
              <h3 className="text-xl font-semibold text-temple-brown mb-4">
                미륵사의 의미
              </h3>
              <p className="text-gray-600 mb-4">
                미륵사는 미래불인 미륵불을 모신 사찰로, 미륵불은 미래에 이 세상에 나타나 모든 중생을 구제할 부처님입니다. 
                미륵사는 미륵불의 자비와 지혜를 바탕으로 모든 사람들이 평화롭고 행복한 삶을 살 수 있도록 기도하고 실천합니다.
              </p>
              <p className="text-gray-600">
                미륵사의 이름은 '미래에 오실 부처님'을 모신다는 의미를 담고 있으며, 
                미래 지향적인 불교의 가르침을 실천하는 도량으로서의 역할을 하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TempleOrigin;
