
import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Clock, Scroll, Book } from 'lucide-react';

const TempleHistory = () => {
  return (
    <PageLayout 
      title="미륵사 역사" 
      subtitle="미륵사의 역사와 전설에 대해 알아보세요."
      backgroundImage="/temple-bg.jpg"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 reveal">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-temple-brown">
                미륵사는 한국 현대 불교 역사의 중요한 부분을 차지하고 있는 사찰입니다.
              </p>
              
              <p>
                1956년 창건 이후 미륵사는 한국 사회의 변화와 함께 성장해 왔으며, 
                불교의 가르침을 현대적으로 해석하고 대중화하는 데 앞장서 왔습니다. 
                미륵사의 역사는 한국 현대 불교의 발전 과정을 보여주는 중요한 증거입니다.
              </p>
            </div>
          </div>
          
          <div className="relative mb-16 reveal">
            <div className="absolute left-5 h-full w-0.5 bg-temple-red/20"></div>
            <div className="space-y-8 relative">
              <div className="ml-10 relative">
                <div className="absolute -left-14 bg-temple-red rounded-full p-2 border-4 border-white">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h3 className="text-lg font-semibold text-temple-brown mb-2">1956년 - 미륵사 창건</h3>
                  <p className="text-gray-600">
                    미륵사는 1956년 현 청화 대종사에 의해 창건되었습니다. 
                    한국 전쟁 이후 어려운 시기에 불교 정신으로 민족의 상처를 치유하고자 하는 
                    뜻에서 건립되었습니다.
                  </p>
                </div>
              </div>
              
              <div className="ml-10 relative">
                <div className="absolute -left-14 bg-temple-red rounded-full p-2 border-4 border-white">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h3 className="text-lg font-semibold text-temple-brown mb-2">1970년대 - 대웅전 건립</h3>
                  <p className="text-gray-600">
                    1970년대에 들어 불자들의 헌신적인 참여로 대웅전이 건립되었습니다. 
                    전통적인 한국 사찰 건축 양식을 따르면서도 현대적인 요소를 가미하여 
                    독특한 건축 미학을 보여주는 대웅전입니다.
                  </p>
                </div>
              </div>
              
              <div className="ml-10 relative">
                <div className="absolute -left-14 bg-temple-red rounded-full p-2 border-4 border-white">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h3 className="text-lg font-semibold text-temple-brown mb-2">1990년대 - 불교문화관 설립</h3>
                  <p className="text-gray-600">
                    1990년대에는 불교 문화를 널리 알리고 대중화하기 위해 불교문화관이 설립되었습니다. 
                    전시실, 강당, 도서관 등을 갖춘 문화관은 불자들뿐만 아니라 
                    일반 시민들에게도 불교 문화를 소개하는 공간이 되었습니다.
                  </p>
                </div>
              </div>
              
              <div className="ml-10 relative">
                <div className="absolute -left-14 bg-temple-red rounded-full p-2 border-4 border-white">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h3 className="text-lg font-semibold text-temple-brown mb-2">2000년대 - 템플스테이 시작</h3>
                  <p className="text-gray-600">
                    2000년대 초반부터 미륵사는 템플스테이 프로그램을 시작하여 국내외 
                    많은 사람들에게 한국 불교 문화를 체험할 수 있는 기회를 제공해 왔습니다. 
                    매년 수천 명의 참가자들이 미륵사 템플스테이를 통해 명상과 불교 문화를 경험하고 있습니다.
                  </p>
                </div>
              </div>
              
              <div className="ml-10 relative">
                <div className="absolute -left-14 bg-temple-red rounded-full p-2 border-4 border-white">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h3 className="text-lg font-semibold text-temple-brown mb-2">현재 - 디지털 불교 선도</h3>
                  <p className="text-gray-600">
                    현재 미륵사는 디지털 시대에 맞춰 온라인 법문, 유튜브 채널 운영, 
                    불교 앱 개발 등 디지털 불교를 선도하고 있습니다. 
                    전통과 현대가 조화롭게 공존하는 사찰로 발전하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Scroll className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">미륵사 전설</h3>
              </div>
              <p className="text-gray-600 mb-4">
                미륵사 주변에는 오래된 전설들이 전해져 내려옵니다. 그중 가장 유명한 이야기는 
                미륵불이 현현하여 이 지역을 축복했다는 전설입니다.
              </p>
              <p className="text-gray-600">
                전설에 따르면 미륵사가 건립된 자리는 예로부터 영적인 기운이 강한 곳으로 알려져 있었으며, 
                수많은 구도자들이 이곳에서 수행하며 깨달음을 얻었다고 합니다.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 reveal reveal-delay-1">
              <div className="flex items-center mb-4">
                <div className="bg-temple-red/10 p-3 rounded-full">
                  <Book className="h-6 w-6 text-temple-red" />
                </div>
                <h3 className="text-lg font-semibold ml-3">역사적 의의</h3>
              </div>
              <p className="text-gray-600 mb-4">
                미륵사는 한국 현대 불교의 중요한 거점으로, 현대화와 전통의 조화를 
                이루며 한국 불교의 새로운 방향을 제시해 왔습니다.
              </p>
              <p className="text-gray-600">
                특히 미륵사는 불교의 사회 참여를 강조하며, 다양한 사회 봉사 활동과 
                교육 프로그램을 통해 불교가 현대 사회에서 어떤 역할을 할 수 있는지 
                보여주는 모범 사례가 되고 있습니다.
              </p>
            </div>
          </div>
          
          <div className="bg-temple-beige/20 rounded-xl p-8 reveal">
            <h3 className="text-xl font-semibold text-temple-brown mb-4">
              미륵사가 걸어온 길
            </h3>
            <div className="prose text-gray-600">
              <p>
                미륵사의 역사는 한국 불교가 현대 사회에 적응하고 발전해온 과정을 보여줍니다. 
                창건 이후 60여 년간 미륵사는 변화하는 시대에 맞춰 불교의 역할을 재정의하고, 
                더 많은 사람들에게 불교의 가르침을 전파하기 위해 노력해 왔습니다.
              </p>
              <p>
                미륵사의 역사는 단순한 건물의 역사가 아니라, 수많은 불자들과 스님들의 
                신앙과 헌신의 역사입니다. 미륵사는 앞으로도 불교의 가르침을 현대적으로 
                해석하고 실천하며, 모든 중생이 행복해지는 미륵불의 세계를 구현하기 위해 
                노력할 것입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TempleHistory;
