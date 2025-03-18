
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Building, Coffee, TreePine, BookOpen, BedDouble, Utensils } from 'lucide-react';

const TempleFacilities = () => {
  return (
    <PageLayout 
      title="사찰 안내" 
      subtitle="미륵사의 주요 전각과 시설을 소개합니다."
      backgroundImage="/temple-bg.jpg"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 reveal">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-temple-brown">
                미륵사는 불교의 전통과 현대적 편의를 조화롭게 갖춘 시설을 제공합니다.
              </p>
              
              <p>
                본 사찰은 불자들의 기도와 수행을 위한 전통적인 법당과 전각을 갖추고 있으며, 
                방문객들을 위한 다양한 편의 시설과 문화 공간도 마련되어 있습니다. 
                자연과 조화를 이루는 건축물과 아름다운 정원은 미륵사를 찾는 모든 이들에게 
                평화로운 휴식과 명상의 시간을 선사합니다.
              </p>
            </div>
          </div>
          
          {/* Main Temple Buildings */}
          <h2 className="text-2xl font-semibold text-temple-brown mb-6 reveal">주요 전각</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden reveal">
              <div className="aspect-video relative">
                <img 
                  src="/placeholder.svg" 
                  alt="대웅전" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-temple-red/80 text-white px-3 py-1">
                  주요 전각
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-temple-brown mb-2">대웅전</h3>
                <p className="text-gray-600 mb-4">
                  미륵사의 중심 법당으로, 석가모니불을 중앙에 모시고 있습니다. 
                  전통 목조 건축 양식으로 지어진 대웅전은 웅장하면서도 품격 있는 모습을 
                  자랑합니다. 주요 법회와 의식이 이곳에서 진행됩니다.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Building className="h-4 w-4 mr-1" />
                  <span>1975년 건립</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden reveal reveal-delay-1">
              <div className="aspect-video relative">
                <img 
                  src="/placeholder.svg" 
                  alt="미륵전" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-temple-red/80 text-white px-3 py-1">
                  주요 전각
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-temple-brown mb-2">미륵전</h3>
                <p className="text-gray-600 mb-4">
                  미래불인 미륵불을 모신 전각으로, 미륵사의 이름이 유래한 중요한 
                  건물입니다. 미륵전에서는 미륵불의 자비와 지혜를 기원하는 특별 기도가 
                  진행됩니다.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Building className="h-4 w-4 mr-1" />
                  <span>1980년 건립</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden reveal">
              <div className="aspect-video relative">
                <img 
                  src="/placeholder.svg" 
                  alt="관음전" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-temple-red/80 text-white px-3 py-1">
                  주요 전각
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-temple-brown mb-2">관음전</h3>
                <p className="text-gray-600 mb-4">
                  자비의 보살인 관세음보살을 모신 전각입니다. 관음전에서는 
                  병고침과 재난 구제를 기원하는 기도가 주로 이루어집니다. 
                  아담하고 우아한 건축 양식이 특징입니다.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Building className="h-4 w-4 mr-1" />
                  <span>1985년 건립</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden reveal reveal-delay-1">
              <div className="aspect-video relative">
                <img 
                  src="/placeholder.svg" 
                  alt="산신각" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-temple-red/80 text-white px-3 py-1">
                  주요 전각
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-temple-brown mb-2">산신각</h3>
                <p className="text-gray-600 mb-4">
                  산의 신을 모시는 전각으로, 한국 전통 신앙과 불교가 융합된 
                  독특한 공간입니다. 산신각은 주로 사찰 뒷편 높은 곳에 위치하며, 
                  안녕과 복을 기원하는 곳입니다.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Building className="h-4 w-4 mr-1" />
                  <span>1990년 건립</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Facilities */}
          <h2 className="text-2xl font-semibold text-temple-brown mb-6 reveal">편의 시설</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Coffee className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">불교 카페</h3>
              </div>
              <p className="text-gray-600">
                사찰 입구에 위치한 차분한 분위기의 카페입니다. 전통 차와 
                간단한 불교 다과를 즐길 수 있으며, 휴식과 대화를 위한 
                공간으로 활용됩니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">불교 서점</h3>
              </div>
              <p className="text-gray-600">
                다양한 불교 서적과 경전, 불교 용품을 판매하는 서점입니다. 
                불교에 관심 있는 분들을 위한 입문서부터 심도 있는 수행서까지 
                폭넓은 도서를 구비하고 있습니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-2">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Utensils className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">사찰 식당</h3>
              </div>
              <p className="text-gray-600">
                건강한 사찰 음식을 맛볼 수 있는 공간입니다. 
                계절 재료를 활용한 채식 위주의 메뉴를 제공하며, 
                불교의 식문화를 체험할 수 있습니다.
              </p>
            </div>
          </div>
          
          {/* Temple Stay Facilities */}
          <h2 className="text-2xl font-semibold text-temple-brown mb-6 reveal">템플스테이 시설</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="reveal">
              <img 
                src="/placeholder.svg" 
                alt="템플스테이 시설" 
                className="w-full h-80 object-cover rounded-lg shadow-md mb-4"
              />
            </div>
            
            <div className="flex flex-col justify-center space-y-6 reveal reveal-delay-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-temple-red/10 p-2 rounded-full">
                    <BedDouble className="h-5 w-5 text-temple-red" />
                  </div>
                  <h3 className="text-md font-semibold ml-3">숙박 시설</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  전통적인 한옥 구조의 숙소와 현대적인 편의시설을 갖춘 객실이 
                  준비되어 있습니다. 개인 및 단체 방문객을 위한 다양한 규모의 
                  객실이 마련되어 있습니다.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-temple-red/10 p-2 rounded-full">
                    <TreePine className="h-5 w-5 text-temple-red" />
                  </div>
                  <h3 className="text-md font-semibold ml-3">명상 공간</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  자연과 어우러진 명상 공간이 사찰 곳곳에 마련되어 있습니다. 
                  야외 명상장, 실내 참선실 등 다양한 수행 공간에서 마음의 
                  평화를 찾을 수 있습니다.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-temple-red/10 p-2 rounded-full">
                    <Building className="h-5 w-5 text-temple-red" />
                  </div>
                  <h3 className="text-md font-semibold ml-3">문화 체험관</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  연등 만들기, 차 시음, 불교 예술 체험 등 다양한 문화 활동을 
                  경험할 수 있는 체험관입니다. 템플스테이 참가자들에게 불교 
                  문화를 쉽고 재미있게 전달합니다.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              시설 이용 안내
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                미륵사의 모든 시설은 불교의 정신을 존중하고 평화로운 분위기를 
                유지할 수 있도록 이용해 주시기 바랍니다.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-temple-brown">관람 시간:</strong> 매일 오전 8시부터 오후 6시까지 (동절기: 오후 5시까지)
                </li>
                <li>
                  <strong className="text-temple-brown">휴무일:</strong> 연중무휴
                </li>
                <li>
                  <strong className="text-temple-brown">템플스테이 예약:</strong> 최소 일주일 전 온라인 또는 전화 예약 필수
                </li>
                <li>
                  <strong className="text-temple-brown">단체 방문:</strong> 20명 이상 단체는 사전 예약 필요
                </li>
                <li>
                  <strong className="text-temple-brown">사찰 예절:</strong> 법당 출입 시 정숙하고 예의 갖추기, 사진 촬영 제한 구역 준수
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TempleFacilities;
