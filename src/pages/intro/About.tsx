
import React, { useEffect } from 'react';
import PageLayout from '../../components/PageLayout';
import { Building, TreeDeciduous, Bell } from 'lucide-react';

const TempleAbout = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout 
      title="미륵사 소개" 
      subtitle="금정산 미륵사는 부산광역시 금정구 금정산에 위치한 사찰입니다."
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
                <h3 className="text-lg font-semibold ml-3">미륵사 역사</h3>
              </div>
              <p className="text-gray-600">
                미륵사는 원효대사가 '미륵 삼부경' 중 하나인 '상생경종오'를 집필한 곳으로 알려져 있으며, 
                오랜 역사와 전통을 이어오고 있는 사찰입니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <TreeDeciduous className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">자연 환경</h3>
              </div>
              <p className="text-gray-600">
                금정산의 해발 약 700m에 위치하여 부산 시내를 한눈에 내려다볼 수 있으며,
                사찰 주변의 아름다운 자연 경관과 함께 평화로운 분위기를 느낄 수 있습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-2">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Bell className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">신앙 생활</h3>
              </div>
              <p className="text-gray-600">
                미륵사에서는 정기적인 법회와 기도 행사가 열리며,
                다양한 불교 수행과 신앙 활동을 통해 부처님의 가르침을 실천하고 있습니다.
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
                미륵사의 상징과 의미
              </h3>
              <p className="text-gray-600 mb-4">
                미륵사는 미래불인 미륵불을 모신 사찰로, 미륵불은 미래에 이 세상에 나타나 모든 중생을 구제할 부처님입니다. 
                미륵사는 미륵불의 자비와 지혜를 바탕으로 모든 사람들이 평화롭고 행복한 삶을 살 수 있도록 기도하고 실천합니다.
              </p>
              <p className="text-gray-600">
                사찰 뒤편의 바위는 스님이 좌선하는 모습과 닮아 '좌선바위'로 불리며, 
                이 바위에는 코끼리 형상의 바위가 7개 있어 마음이 맑아야 모두 볼 수 있다는 전설이 전해집니다.
              </p>
            </div>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              주요 전각 및 시설
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사의 주요 전각 및 시설에 대해 알아보세요:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-temple-brown">염화전(拈華殿):</strong> 미륵사의 주 법당으로, 다포계 팔작지붕의 건물입니다. 내부에는 석가모니불과 문수보살, 보현보살이 모셔져 있습니다.
                </li>
                <li>
                  <strong className="text-temple-brown">독성각:</strong> 미륵전 옆 오르막길에 위치하며, 나반존자를 모신 전각입니다. 이곳에는 원효대사가 손톱으로 그렸다는 마애 미륵불이 있었다는 전설이 있습니다.
                </li>
                <li>
                  <strong className="text-temple-brown">칠성각:</strong> 염화전과 도솔선원 사이의 산길로 가면 위치하며, 이곳에서 바라보는 금정산과 수영만의 경관이 아름답습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TempleAbout;
