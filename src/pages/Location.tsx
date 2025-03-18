import React, { useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import { MapPin, Bus, Car, Clock } from 'lucide-react';

const Location = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout 
      title="찾아오시는 길" 
      subtitle="금정산 미륵사를 방문하는 방법을 안내합니다."
      backgroundImage="/temple-bg.jpg"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 reveal">
            <div className="prose max-w-none">
              <p className="text-xl font-medium text-temple-brown mb-6">
                금정산 미륵사는 부산광역시 금정구 금정산에 위치해 있습니다.
              </p>
              <p className="text-gray-600">
                신라시대인 678년에 원효대사가 창건하였으며, 금정산에서 가장 높은 곳인 해발 약 700m에 자리하고 있습니다. 
                아래의 안내를 참고하여 미륵사를 방문해 주세요.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="order-2 md:order-1 reveal reveal-delay-1">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-temple-brown mb-4 flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-temple-red" />
                    주소 안내
                  </h3>
                  <p className="text-gray-700 mb-4">
                    부산광역시 금정구 금정산로 (상세주소) 미륵사
                  </p>
                  
                  <h4 className="font-medium text-temple-brown mt-6 mb-2 flex items-center">
                    <Bus className="mr-2 h-4 w-4 text-temple-red" />
                    대중교통 이용
                  </h4>
                  <div className="text-gray-600 space-y-2">
                    <p>
                      부산 지하철 1호선 온천장역 맞은편 홈플러스 앞 버스정류장에서 203번 직행버스를 타고 종점인 죽전마을에서 하차한 후, 등산로를 따라 약 1시간에서 1시간 30분 정도 산행하면 미륵사에 도착할 수 있습니다.
                    </p>
                  </div>
                  
                  <h4 className="font-medium text-temple-brown mt-6 mb-2 flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-temple-red" />
                    등산로 이용
                  </h4>
                  <div className="text-gray-600 space-y-2">
                    <p>
                      금정산성 북문에서 남쪽으로 약 15분 정도 산행하면 미륵사에 도착할 수 있습니다.
                    </p>
                  </div>
                  
                  <h4 className="font-medium text-temple-brown mt-6 mb-2 flex items-center">
                    <Car className="mr-2 h-4 w-4 text-temple-red" />
                    차량 이용
                  </h4>
                  <div className="text-gray-600 space-y-2">
                    <p>
                      산성마을까지 차량으로 오신 후, 금성초교 앞에서 미륵사 차량 운행을 이용하세요.
                    </p>
                    <p>매일 오전 9시에 금성초교 앞에서 차량이 운행됩니다.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 reveal">
              <div className="bg-gray-100 rounded-xl h-full flex items-center justify-center p-4">
                <div className="w-full">
                  <div className="aspect-w-16 aspect-h-12 w-full">
                    {/* Map placeholder - replace with actual map */}
                    <img 
                      src="/placeholder.svg" 
                      alt="미륵사 위치" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    * 실제 지도로 변경될 예정입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-6 md:p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              셔틀버스 안내
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사는 신도들의 편의를 위해 셔틀버스 서비스를 제공하고 있습니다:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-temple-brown">초하루 기도법회, 독성 기도법회, 백중영가천도 셔틀버스:</strong>
                  <ul className="list-none pl-4 mt-1 space-y-1">
                    <li>온천장 지하철역 1번 출구에서 08:30 출발</li>
                    <li>화명역 2번 출구에서 08:40 출발</li>
                    <li>산성마을 금성초교 앞 9:00 출발</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-temple-brown">일반 셔틀버스:</strong>
                  <ul className="list-none pl-4 mt-1">
                    <li>매일 오전 9시 산성마을 금성초교 앞에서 출발</li>
                  </ul>
                </li>
                <li>
                  <strong className="text-temple-brown">특별 행사 시:</strong> 행사에 따라 추가 셔틀버스가 운행될 수 있으니 행사 공지를 확인해 주세요.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Location;
