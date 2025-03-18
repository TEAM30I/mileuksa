
import React, { useEffect, useRef } from 'react';
import PageLayout from '../components/PageLayout';
import { MapPin, Bus, Car, Phone, Clock } from 'lucide-react';

const Location = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add Kakao Maps script - This is just a placeholder
    // In a real app, you would use proper Kakao Maps integration or Google Maps
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_MAPS_API_KEY&autoload=false";
    document.head.appendChild(script);
    
    script.onload = () => {
      // Initialize map when script is loaded
      // This is just a placeholder for demonstration purposes
      if (mapRef.current) {
        // In reality, you would have code here to initialize the map
        mapRef.current.innerHTML = `
          <div class="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
            <div class="text-center">
              <MapPin class="w-12 h-12 mx-auto mb-2" />
              <p>지도가 여기에 표시됩니다</p>
              <p class="text-sm">(Kakao Maps 또는 Google Maps API 키 필요)</p>
            </div>
          </div>
        `;
      }
    };
    
    return () => {
      // Clean up
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <PageLayout 
      title="찾아오시는 길" 
      subtitle="미륵사를 방문하시는 모든 분들을 환영합니다."
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="rounded-xl overflow-hidden shadow-lg h-[500px] reveal">
              <div ref={mapRef} className="w-full h-full bg-gray-100">
                {/* Map will be loaded here */}
              </div>
            </div>
            
            <div className="reveal reveal-delay-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full">
                <h3 className="text-xl font-semibold text-temple-brown mb-6 flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-temple-red" />
                  미륵사 위치
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">주소</h4>
                    <p className="text-gray-600">
                      서울특별시 강남구 테헤란로 123<br />
                      미륵사 (우: 06123)
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-temple-red" />
                      연락처
                    </h4>
                    <p className="text-gray-600">
                      전화: 02-123-4567<br />
                      팩스: 02-123-4568<br />
                      이메일: info@mireuksa.org
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-temple-red" />
                      운영시간
                    </h4>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex justify-between">
                        <span>일반 참배 시간</span>
                        <span>06:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>사무실 운영 시간</span>
                        <span>09:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>템플스테이 체크인</span>
                        <span>14:00 - 16:00</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        * 명절 및 특별법회 기간에는 운영시간이 변경될 수 있습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal">
              <h3 className="text-xl font-semibold text-temple-brown mb-4 flex items-center">
                <Bus className="mr-2 h-5 w-5 text-temple-red" />
                대중교통 이용 안내
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">지하철</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-temple-red/10 text-temple-red px-2 py-1 rounded text-xs font-medium mr-2 mt-0.5">2호선</span>
                      <span>강남역 3번 출구에서 도보 10분</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-temple-red/10 text-temple-red px-2 py-1 rounded text-xs font-medium mr-2 mt-0.5">9호선</span>
                      <span>신논현역 5번 출구에서 도보 5분</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">버스</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium mr-2 mt-0.5">간선</span>
                      <span>140, 144, 145, 146번 버스 미륵사 입구 하차</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium mr-2 mt-0.5">지선</span>
                      <span>3412, 4412번 버스 미륵사 정문 하차</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <h3 className="text-xl font-semibold text-temple-brown mb-4 flex items-center">
                <Car className="mr-2 h-5 w-5 text-temple-red" />
                주차 안내
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  미륵사는 방문객을 위한 무료 주차장을 운영하고 있습니다. 주말 및 법회일에는 주차장이 혼잡할 수 있으니 가급적 대중교통 이용을 권장합니다.
                </p>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">주차장 정보</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>운영시간</span>
                      <span>05:30 - 21:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>주차요금</span>
                      <span>무료 (사찰 방문객 한정)</span>
                    </li>
                    <li className="flex justify-between">
                      <span>주차가능대수</span>
                      <span>약 50대</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-temple-beige/20 p-3 rounded-lg text-sm">
                  <p className="text-temple-brown font-medium mb-1">주차 유의사항</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>법회 및 행사 시에는 주차공간이 부족할 수 있습니다.</li>
                    <li>방문증을 차량 내부에 비치해 주세요. (사무실에서 수령)</li>
                    <li>장시간 주차 시 사무실에 주차 사유를 알려주세요.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-temple-beige/10 rounded-xl p-6 md:p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">방문 안내</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사를 방문하시는 모든 분들께 몇 가지 안내 말씀 드립니다:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>사찰 내에서는 정숙하고 조용한 분위기를 유지해 주세요.</li>
                <li>법당에 입장 시 신발을 벗고 들어가시기 바랍니다.</li>
                <li>참배 및 기도는 안내에 따라 진행해 주시기 바랍니다.</li>
                <li>음식물은 지정된 장소에서만 드시기 바랍니다.</li>
                <li>사진 촬영은 허용된 장소에서만 가능합니다. (법당 내부 촬영 금지)</li>
                <li>단체 방문 시 사전에 미륵사 사무실로 연락주시기 바랍니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Location;
