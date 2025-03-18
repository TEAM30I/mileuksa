
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Building, TreeDeciduous, Bell } from 'lucide-react';

const TempleAbout = () => {
  return (
    <PageLayout 
      title="미륵사 소개" 
      subtitle="미륵사는 한국 불교의 정신을 계승하고 현대적으로 해석하는 사찰입니다."
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 reveal">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-temple-brown">
                미륵사는 미래불인 미륵불을 모신 사찰로, 깨달음의 길을 함께 걷는 수행 공동체입니다.
              </p>
              
              <p>
                미륵사는 산과 강이 어우러진 아름다운 자연 속에 자리하고 있으며, 
                사시사철 자연의 변화를 느끼며 수행과 명상을 통해 내면의 평화를 찾을 수 있는 곳입니다. 
                미륵사는 불교의 가르침을 현대적으로 해석하고 실천하며, 
                누구나 쉽게 불교를 접하고 배울 수 있도록 다양한 프로그램을 운영하고 있습니다.
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
                미륵사는 1956년에 창건되어 60여 년의 역사를 이어오고 있으며, 
                수많은 불자들의 신앙과 정성으로 현재의 모습을 갖추게 되었습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <TreeDeciduous className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">수행과 명상</h3>
              </div>
              <p className="text-gray-600">
                미륵사에서는 참선, 108배, 염불 등 다양한 수행법을 통해
                마음의 평화를 찾고 부처님의 가르침을 실천하는 수행 프로그램을 운영합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-2">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Bell className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">불교 문화</h3>
              </div>
              <p className="text-gray-600">
                불교 문화 강좌, 템플스테이, 명상 워크숍 등 다양한 문화 프로그램을 통해
                불교 문화를 체험하고 배울 수 있는 기회를 제공합니다.
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
                미륵사의 대웅전은 현대적인 건축 양식과 전통적인 사찰 건축이 조화를 이룬 아름다운 건물로, 
                불교의 전통과 현대의 조화를 추구하는 미륵사의 정신을 상징합니다.
              </p>
            </div>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              미륵사의 미션과 비전
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사는 불교의 가르침을 현대적으로 해석하고 실천하여, 모든 사람들이 행복하고 평화로운 삶을 살 수 있도록 돕는 것을 목표로 합니다.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-temple-brown">수행과 명상:</strong> 다양한 수행법을 통해 마음의 평화를 찾고 지혜를 키웁니다.
                </li>
                <li>
                  <strong className="text-temple-brown">교육과 문화:</strong> 불교 교육과 문화 프로그램을 통해 불교의 가르침을 널리 알립니다.
                </li>
                <li>
                  <strong className="text-temple-brown">자비 실천:</strong> 사회 봉사와 자선 활동을 통해 자비를 실천합니다.
                </li>
                <li>
                  <strong className="text-temple-brown">공동체 형성:</strong> 함께 수행하고 배우는 불자 공동체를 형성합니다.
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
